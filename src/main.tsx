import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
            main: "#000319",
        },
        secondary: {
            main: "#02051b",
        },
        background: {
            default: "#210225",
            paper: "#38033fff",
        },
        text: {
            primary: "#ffffff",
            secondary: "#bbbbbb",
        },
    },
    typography: {
        fontFamily: "Inter",
    },
    components: {
        MuiTypography: {
            styleOverrides: {
                h2: {
                    fontWeight: 800,
                    fontSize: "4rem",
                },
            },
        },
    },
});

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </StrictMode>
);
