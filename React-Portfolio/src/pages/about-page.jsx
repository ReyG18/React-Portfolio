import React from 'react';
import { Typography, Grid, Paper, Avatar } from '@mui/material';

export default function About() {

  return(
    <Grid container justifyContent="left" sx={{ mt: 4 }}>
      <Grid item>
        <Avatar 
          alt="Reyanna Garibay"
          src="path/to/your/photo.jpg" // Replace with the path to your photo
          sx={{ width: 150, height: 150, mb: 2 }}
        />
      </Grid>
      <Grid item>
        <Paper elevation={3} sx={{ p: 2 }}>
          <Typography variant="h4">
            About Me
          </Typography>
          <Typography variant="body1" paragraph>
            Hello! My name is Reyanna Garibay, and I am a passionate web developer based in Texas, USA. 
            Currently, I am a student at Rice University's 6-month Full Stack Web Development Bootcamp, 
            where I am honing my skills in modern web technologies. With a strong foundation in HTML, 
            CSS, and JavaScript, I am expanding my expertise in frameworks like React and Node.js.
          </Typography>
          <Typography variant="body1" paragraph>
            My journey into web development started with a curiosity to understand how websites and applications work. This curiosity quickly evolved into a passion for creating intuitive and engaging user experiences. I love the challenge of turning ideas into reality through code.
          </Typography>
          <Typography variant="body1" paragraph>
            Outside of coding, I am an avid gamer and a huge fan of The Elder Scrolls series. I also enjoy walking outdoors, which helps me stay balanced and inspired. These hobbies not only provide relaxation but also fuel my creativity.
          </Typography>
          <Typography variant="body1" paragraph>
            My goal is to become a proficient full stack developer, capable of building robust and user-friendly web applications. I am excited about the opportunity to apply my skills in real-world projects and collaborate with other developers to create innovative solutions. Thank you for visiting my portfolio, and I look forward to connecting with you!
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};
