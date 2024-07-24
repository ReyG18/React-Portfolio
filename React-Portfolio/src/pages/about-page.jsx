import React from 'react';
import { Typography, Grid, Paper, Stack, Avatar } from '@mui/material';

export default function About() {

  return(
    <Grid container justifyContent="center" sx={{ mt: 4 }}>
      <Grid item xs={12} sm={10} md={10} lg={10}>
        <Paper elevation={3} sx={{ p: 3, textAlign: 'left', width: '100%', mx: 'auto' }}>
          <Stack spacing={3}>
            <Typography variant="h4" sx={{ fontWeight: 300, color: '#333' }}>
              About Me
            </Typography>
            {/* Avatar placeholder */}
            <Avatar 
              alt="Reyanna Garibay"
              src="path/to/your/photo.jpg"
              sx={{ width: 100, height: 100, mb: 2 }}
            />
            <Typography variant="body1" paragraph sx={{ color: '#555', lineHeight: 1.6 }}>
            Hello! My name is Reyanna Garibay, and I am a web development enthusiast based in Texas, USA.
            Currently, I am a student at Rice University's 6-month Full Stack Web Development Bootcamp, where I am learning about modern web technologies.
            I have a foundation in HTML, CSS, and JavaScript, and I am gradually learning frameworks like React and Node.js.
            </Typography>
            <Typography variant="body1" paragraph sx={{ color: '#555', lineHeight: 1.6 }}>
            Outside of coding, I enjoy gaming, especially The Elder Scrolls series, and I like walking outdoors, which helps me stay balanced and inspired.
            These activities provide relaxation and help spark my creativity. My goal is to become a capable full stack developer, able to build useful and user-friendly web applications.
            I am looking forward to applying my skills in real-world projects and working with other developers to create innovative solutions.
            Thank you for visiting my portfolio, and I hope to connect with you!
            </Typography>
          </Stack>
        </Paper>
      </Grid>
    </Grid>
  );
};
