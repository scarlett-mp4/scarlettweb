import { Box, Typography, useTheme } from "@mui/material";
import { GridPattern } from "./GridPatternProps";

export default function App() {
  const theme = useTheme();

  return (
    <>
      <Box
        sx={{
          width: "100vw",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        <GridPattern />
      </Box>
    </>
  );
}
