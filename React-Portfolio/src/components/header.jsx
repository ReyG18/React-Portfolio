import React from 'react';
import Navigation from './navigation';
import { AppBar, Toolbar, Typography, Container, Grid } from '@mui/material';

function Header() {

  return(
    <AppBar position="fixed">
      <Container>
        <Toolbar>
          <Grid container alignItems="center" justifyContent="space-between">
            <Grid item>
              <Typography variant="h6" component="div">
                Reyanna Garibay
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Navigation />
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;