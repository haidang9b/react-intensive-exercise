import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Button, Box, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { ShoppingCart, Menu as MenuIcon } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        {/* Brand Title */}
        <Typography variant="h6" component={Link} to="/" sx={{ flexGrow: 1, textDecoration: 'none', color: 'inherit' }}>
          Pet Shop
        </Typography>

        {/* Navigation Links (Hidden on smaller screens) */}
        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/products">
            Products
          </Button>
          <Button color="inherit" component={Link} to="/about">
            About Us
          </Button>
          <Button color="inherit" component={Link} to="/contact">
            Contact
          </Button>
          <Button color="inherit" component={Link} to="/login">
            Login
          </Button>
        </Box>

        {/* Cart Icon */}
        <IconButton color="inherit" component={Link} to="/cart">
          <ShoppingCart />
        </IconButton>

        {/* Mobile Menu Icon */}
        <IconButton color="inherit" onClick={toggleDrawer(true)} sx={{ display: { sm: 'none' } }}>
          <MenuIcon />
        </IconButton>
      </Toolbar>

      {/* Drawer for Mobile Menu */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box
          role="presentation"
          sx={{ width: 250 }}
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
           <List>
            <ListItem component={Link} to="/" sx={{ textDecoration: 'none', color: 'inherit', padding: '8px 16px' }}>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem component={Link} to="/products" sx={{ textDecoration: 'none', color: 'inherit', padding: '8px 16px' }}>
              <ListItemText primary="Products" />
            </ListItem>
            <ListItem component={Link} to="/about" sx={{ textDecoration: 'none', color: 'inherit', padding: '8px 16px' }}>
              <ListItemText primary="About Us" />
            </ListItem>
            <ListItem component={Link} to="/contact" sx={{ textDecoration: 'none', color: 'inherit', padding: '8px 16px' }}>
              <ListItemText primary="Contact" />
            </ListItem>
            <ListItem component={Link} to="/login" sx={{ textDecoration: 'none', color: 'inherit', padding: '8px 16px' }}>
              <ListItemText primary="Login" />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
};
export default Navbar;