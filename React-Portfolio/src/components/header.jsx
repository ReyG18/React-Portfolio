import React from 'react';
import Navigation from './navigation';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';

function Header() {

  return(
    <AppBar position="fixed">
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="h6" component="div">
            Reyanna Garibay
          </Typography>
        </Box>
        <Navigation />
      </Toolbar>
    </AppBar>
  );
};

export default Header;