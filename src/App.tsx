import { Box, Typography, useTheme } from "@mui/material";
import { GridPattern } from "./GridPatternProps";
import { Navbar } from "./Navbar";

export default function App() {
    const theme = useTheme();

    return (
        <Box
            sx={{
                bgcolor: theme.palette.background.default,
                position: "relative",
                maxWidth: "100vw !important",
                height: "auto",
                p:0,
                m:0,
            }}
        >
            <Box
                sx={{
                    width: "100vw",
                    height: "100vh",
                    overflow: "hidden",
                    position: "absolute",
                    top: 0,
                    left: 0,
                }}
            >
                <GridPattern />
            </Box>
            <Box
                sx={{
                    background: "transparent",
                    width: "100vw",
                    height: "100vh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    pt: 4,
                    flexDirection: "column",
                    gap: 4,
                }}
            >
                <Navbar />
                <Typography variant="h2" color="textPrimary">
                    Test    
                </Typography>
            </Box>
        </Box>
    );
}
