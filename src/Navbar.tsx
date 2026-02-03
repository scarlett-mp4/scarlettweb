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
    <Box sx={{
      width: "30%",
      height:'70px',
      backgroundColor: "#02051b",
      borderRadius: 5,
      border: `1px solid #ffffff11`,
    }}>
      {/* <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          ></IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar> */}
    </Box>
  );
};
