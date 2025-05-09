import {AppBar, Box, Button, IconButton, Toolbar, Typography} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

export default function Home() {
  return (
      <div>
          <Box sx={{ flexGrow: 1 }}>
              <AppBar position="static">
                  <Toolbar>
                      <IconButton
                          size="large"
                          edge="start"
                          color="inherit"
                          aria-label="menu"
                          sx={{ mr: 2 }}
                      >
                          <MenuIcon />
                      </IconButton>
                      <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
                          Auction Plataform
                      </Typography>
                      <Button color="inherit">Login</Button>
                  </Toolbar>
              </AppBar>
          </Box>

      </div>
    );
}
