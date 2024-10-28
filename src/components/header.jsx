import React from 'react';
import Navigation from './navigation';
import { AppBar, Toolbar, Typography, Container, Grid } from '@mui/material';

function Header() {

  return(
    // Fixed AppBar header
    <AppBar position="fixed">
      <Container>
        <Toolbar>
          <Grid container alignItems="center" justifyContent="space-between">
            <Grid item>
              <Typography
                variant="h3"
                component="h2"
                sx={{px: 1}}
              >
                Reyanna Garibay
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            {/* Navigation containing links within header */}
            <Navigation />
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;