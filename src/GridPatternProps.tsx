import { Box } from "@mui/material";
import * as React from "react";

type GridPatternProps = {
  boxSize?: number;
  fillPercent?: number;
  fadeLeft?: boolean;
  fadeRight?: boolean;
  fadeTop?: boolean;
  fadeBottom?: boolean;
};

// - Default configuration values ---------------------

const boxSizeDefault = 128;
const fillPercentDefault = 0.3;

const lineColor = "#ffffff";
const lineOpacity = 0.02;

const fillColor = "#ffffff";
const squareFillOpacity = 0.01;

const starColorLeft = "#54353d";
const starColorRight = "#535664";
const starOpacity = 1;
const starLength = 0.08;
const starGirth = 0.02;
const starPaddingSides = 3;
const starPaddingTop = 2;

const fadeLeftDefault = true;
const fadeRightDefault = true;
const fadeTopDefault = true;
const fadeBottomDefault = true;

// ----------------------------------------------------

const renderStar = (
  cx: number,
  cy: number,
  armLength: number,
  spread: number,
  color: string,
  opacity: number,
) => {
  const L = armLength;
  const s = spread / 2;

  const north = `${cx},${cy - L} ${cx - s},${cy} ${cx + s},${cy}`;
  const south = `${cx},${cy + L} ${cx + s},${cy} ${cx - s},${cy}`;
  const east = `${cx + L},${cy} ${cx},${cy - s} ${cx},${cy + s}`;
  const west = `${cx - L},${cy} ${cx},${cy + s} ${cx},${cy - s}`;

  return (
    <g fill={color} opacity={opacity} shapeRendering="geometricPrecision">
      <polygon points={north} />
      <polygon points={east} />
      <polygon points={south} />
      <polygon points={west} />
    </g>
  );
};

const mulberry32 = (seed: number) => {
  return () => {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
};

export const GridPattern: React.FC<GridPatternProps> = ({
  boxSize: boxSize = boxSizeDefault,
  fillPercent = fillPercentDefault,
  fadeLeft = fadeLeftDefault,
  fadeRight = fadeRightDefault,
  fadeTop = fadeTopDefault,
  fadeBottom = fadeBottomDefault,
}) => {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const [grid, setGrid] = React.useState({
    cols: 0,
    rows: 0,
    boxwidth: 0,
    boxheight: 0,
  });

  const seed = React.useMemo(() => {
    const s =
      (Math.floor(boxSize) * 73856093) ^
      (Math.floor(fillPercent * 10000) * 19349663);
    return s >>> 0;
  }, [boxSize, fillPercent]);

  React.useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      const cols = Math.ceil(width / boxSize);
      const rows = Math.ceil(height / boxSize);
      const boxwidth = cols * boxSize;
      const boxheight = rows * boxSize;

      setGrid({ cols, rows, boxwidth, boxheight });
    });

    observer.observe(el);
    return () => observer.disconnect();
  }, [boxSize]);

  const fillRects = React.useMemo(() => {
    const p = Math.max(0, Math.min(1, fillPercent));
    if (p <= 0) return [];

    const cols = grid.cols;
    const rows = grid.rows;
    if (cols <= 0 || rows <= 0) return [];

    const total = cols * rows;
    const target = Math.min(total, Math.round(p * total));

    const maxNonTouching = Math.ceil(total / 2);
    const wantStrict = Math.min(target, maxNonTouching);
    const extra = target - wantStrict;

    const idx = (x: number, y: number) => y * cols + x;
    const inBounds = (x: number, y: number) =>
      x >= 0 && x < cols && y >= 0 && y < rows;

    const picked = new Set<number>();
    const blocked = new Set<number>();

    const blockNeighbors = (x: number, y: number) => {
      const n = [
        [x, y],
        [x - 1, y],
        [x + 1, y],
        [x, y - 1],
        [x, y + 1],
      ];
      for (const [nx, ny] of n) {
        if (inBounds(nx, ny)) blocked.add(idx(nx, ny));
      }
    };

    const rand = mulberry32(seed);

    const weightForX = (x: number) => {
      const xNorm = cols <= 1 ? 0 : x / (cols - 1);
      const distToCenter = Math.abs(xNorm - 0.5) / 0.5; // 0 center, 1 edge
      const gamma = 1.6;
      return 0.25 + 0.75 * Math.pow(distToCenter, gamma);
    };

    const candidates: Array<{ x: number; y: number; i: number; w: number }> =
      [];
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        candidates.push({ x, y, i: idx(x, y), w: weightForX(x) });
      }
    }

    const keyed = candidates.map((c) => {
      const u = Math.max(1e-12, rand());
      const key = Math.pow(u, 1 / c.w);
      return { ...c, key };
    });
    keyed.sort((a, b) => b.key - a.key);

    const rects: Array<{ x: number; y: number }> = [];

    for (const c of keyed) {
      if (rects.length >= wantStrict) break;
      if (blocked.has(c.i)) continue;

      picked.add(c.i);
      rects.push({ x: c.x, y: c.y });
      blockNeighbors(c.x, c.y);
    }

    if (rects.length < wantStrict) {
      for (let y = 0; y < rows && rects.length < wantStrict; y++) {
        for (let x = y % 2; x < cols && rects.length < wantStrict; x += 2) {
          const i = idx(x, y);
          if (picked.has(i)) continue;
          picked.add(i);
          rects.push({ x, y });
        }
      }
    }

    if (extra > 0) {
      const remaining: Array<{ x: number; y: number; w: number; key: number }> =
        [];
      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          const i = idx(x, y);
          if (picked.has(i)) continue;
          const w = weightForX(x);
          const u = Math.max(1e-12, rand());
          const key = Math.pow(u, 1 / w);
          remaining.push({ x, y, w, key });
        }
      }
      remaining.sort((a, b) => b.key - a.key);
      for (let k = 0; k < extra && k < remaining.length; k++) {
        rects.push({ x: remaining[k].x, y: remaining[k].y });
      }
    }

    return rects;
  }, [grid.cols, grid.rows, fillPercent, seed]);

  const uid = React.useId();

  return (
    <Box
      ref={ref}
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "visible",
      }}
    >
      <Box
        sx={{
          overflow: "visible",
          width: grid.boxwidth,
          height: grid.boxheight,
          flexShrink: 0,
        }}
      >
        <svg
          width={grid.boxwidth}
          height={grid.boxheight}
          viewBox={`0 0 ${grid.boxwidth} ${grid.boxheight}`}
          style={{ display: "block" }}
          aria-hidden="true"
        >
          <defs>
            {/* Horizontal fade (left/right) */}
            <linearGradient id={`${uid}-fadeX`} x1="0" y1="0" x2="1" y2="0">
              <stop
                offset="0%"
                stopColor="#fff"
                stopOpacity={fadeLeft ? 0 : 1}
              />
              <stop offset="22%" stopColor="#fff" stopOpacity="1" />
              <stop offset="78%" stopColor="#fff" stopOpacity="1" />
              <stop
                offset="100%"
                stopColor="#fff"
                stopOpacity={fadeRight ? 0 : 1}
              />
            </linearGradient>

            {/* Vertical fade (top/bottom) */}
            <linearGradient id={`${uid}-fadeY`} x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="0%"
                stopColor="#fff"
                stopOpacity={fadeTop ? 0 : 1}
              />
              <stop offset="22%" stopColor="#fff" stopOpacity="1" />
              <stop offset="78%" stopColor="#fff" stopOpacity="1" />
              <stop
                offset="100%"
                stopColor="#fff"
                stopOpacity={fadeBottom ? 0 : 1}
              />
            </linearGradient>

            <mask
              id={`${uid}-maskX`}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width={grid.boxwidth}
              height={grid.boxheight}
            >
              <rect
                x="0"
                y="0"
                width={grid.boxwidth}
                height={grid.boxheight}
                fill={`url(#${uid}-fadeX)`}
              />
            </mask>

            <mask
              id={`${uid}-maskY`}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width={grid.boxwidth}
              height={grid.boxheight}
            >
              <rect
                x="0"
                y="0"
                width={grid.boxwidth}
                height={grid.boxheight}
                fill={`url(#${uid}-fadeY)`}
              />
            </mask>
          </defs>

          <g mask={`url(#${uid}-maskX)`}>
            <g mask={`url(#${uid}-maskY)`}>
              {/* Filled squares */}
              {fillRects.map(({ x, y }) => (
                <rect
                  key={`f-${x}-${y}`}
                  x={x * boxSize}
                  y={y * boxSize}
                  width={boxSize}
                  height={boxSize}
                  fill={fillColor}
                  fillOpacity={squareFillOpacity}
                  shapeRendering="crispEdges"
                />
              ))}

              {/* Grid lines */}
              {Array.from({ length: grid.rows }).map((_, y) =>
                Array.from({ length: grid.cols }).map((__, x) => (
                  <rect
                    key={`${x}-${y}`}
                    x={x * boxSize + 0.5}
                    y={y * boxSize + 0.5}
                    width={boxSize}
                    height={boxSize}
                    fill="none"
                    stroke={lineColor}
                    strokeOpacity={lineOpacity}
                    strokeWidth={2.5}
                    shapeRendering="crispEdges"
                  />
                )),
              )}

              {/* Stars */}
              {grid.cols > 0 && grid.rows > 0 && (
                <>
                  {renderStar(
                    boxSize * starPaddingSides,
                    boxSize * starPaddingTop,
                    boxSize * starLength,
                    boxSize * starGirth,
                    starColorLeft,
                    starOpacity,
                  )}

                  {renderStar(
                    grid.boxwidth - boxSize * starPaddingSides,
                    boxSize * starPaddingTop,
                    boxSize * starLength,
                    boxSize * starGirth,
                    starColorRight,
                    starOpacity,
                  )}
                </>
              )}
            </g>
          </g>
        </svg>
      </Box>
    </Box>
  );
};
