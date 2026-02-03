import {
    AppBar,
    Box,
    Button,
    IconButton,
    Toolbar,
    Typography,
    useTheme,
} from "@mui/material";

export const Navbar: React.FC = () => {
    const theme = useTheme();

    return (
        <Box
            className="glass"
            sx={{
                width: "30%",
                height: "70px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
                zIndex: 10,
            }}
        >
            <AppBar sx={{background: "transparent", 
                borderRadius: 5,
                boxShadow: "none"
                
                }} position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    ></IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1 }}
                    >
                        News
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
};
