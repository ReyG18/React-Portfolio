import React from 'react';
import Navigation from './navigation';
import { AppBar, Toolbar, Typography, Container, Grid2 } from '@mui/material';

function Header() {

  return(
    // Fixed AppBar header
    <AppBar position="fixed">
      <Container>
        <Toolbar>
          <Grid2 container alignItems="center" justifyContent="space-between">
            <Grid2 item>
              <Typography
                variant="h3"
                component="h2"
                sx={{px: 1}}
              >
                Reyanna Garibay
              </Typography>
            </Grid2>
          </Grid2>
          <Grid2 item>
            {/* Navigation containing links within header */}
            <Navigation />
          </Grid2>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;