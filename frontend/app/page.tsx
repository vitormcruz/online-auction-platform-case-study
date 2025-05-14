"use client";

import {AppBar, Box, Button, IconButton, Toolbar, Typography, Drawer, List, ListItem, ListItemIcon, ListItemText, Container} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import HomeIcon from '@mui/icons-material/Home';
import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }
    setDrawerOpen(open);
  };

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
                          onClick={toggleDrawer(true)}
                      >
                          <MenuIcon />
                      </IconButton>
                      <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
                          Auction Platform
                      </Typography>
                      <Button color="inherit">Login</Button>
                  </Toolbar>
              </AppBar>
          </Box>

          <Drawer
            anchor="left"
            open={drawerOpen}
            onClose={toggleDrawer(false)}
          >
            <Box
              sx={{ width: 250 }}
              role="presentation"
              onClick={toggleDrawer(false)}
              onKeyDown={toggleDrawer(false)}
            >
              <List>
                <Link href="/" passHref style={{ textDecoration: 'none', color: 'inherit' }}>
                  <ListItem button>
                    <ListItemIcon>
                      <HomeIcon />
                    </ListItemIcon>
                    <ListItemText primary="Home" />
                  </ListItem>
                </Link>
                <Link href="/auction-items" passHref style={{ textDecoration: 'none', color: 'inherit' }}>
                  <ListItem button>
                    <ListItemIcon>
                      <ShoppingBagIcon />
                    </ListItemIcon>
                    <ListItemText primary="Auction Items" />
                  </ListItem>
                </Link>
              </List>
            </Box>
          </Drawer>
          
          <Container maxWidth="lg" sx={{ mt: 4 }}>
            <Box sx={{ my: 4, textAlign: 'center' }}>
              <Typography variant="h3" component="h1" gutterBottom>
                Welcome to the Online Auction Platform
              </Typography>
              <Typography variant="h5" component="h2" gutterBottom>
                Discover unique items and place your bids
              </Typography>
              <Box sx={{ mt: 4 }}>
                <Link href="/auction-items" passHref>
                  <Button variant="contained" size="large" color="primary">
                    Browse Auction Items
                  </Button>
                </Link>
              </Box>
            </Box>
          </Container>
      </div>
    );
}
