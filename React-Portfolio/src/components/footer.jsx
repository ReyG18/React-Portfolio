import React from 'react';
import { Grid, Box, Container, Stack, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
  return (
    <Box component="footer" sx={{ py:2, backgroundColor: 'background.default', color: 'text.primary' }}>
      <Container maxWidth="md">
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          <Grid item>
            <Stack direction="row" spacing={2} justifyContent="center">
              <IconButton aria-label="GitHub" component="a" href="https://github.com/ReyG18" sx={{ color: 'primary.main' }}>
                <GitHubIcon />
              </IconButton>
              <IconButton aria-label="LinkedIn" component="a" href="https://www.linkedin.com/in/reyanna-garibay-893068315/" sx={{ color: 'primary.main' }}>
                <LinkedInIcon />
              </IconButton>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Footer;