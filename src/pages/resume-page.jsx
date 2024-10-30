import React from 'react';
import { Typography, Paper, Stack } from '@mui/material';
import Grid from '@mui/material/Grid2';

export default function Resume() {
  
  return(
    // Placeholder paper
    <Grid container justifyContent="center" sx={{ mt: 4 }}>
      <Grid item xs={12} sm={10} md={10} lg={10}>
        <Paper elevation={3} sx={{ px: 40, py: 20, mx: 15, my: 5, width: '100%' }}>
          <Stack spacing={3}>
            <Typography variant="h4" sx={{ fontWeight: 300, color: '#333' }}>
              Resume
            </Typography>
            <Typography variant="body1" paragraph sx={{ color: '#555', lineHeight: 1.6 }}>
              Coming Soon...
            </Typography>
          </Stack>
        </Paper>
      </Grid>
    </Grid>
  );
}
