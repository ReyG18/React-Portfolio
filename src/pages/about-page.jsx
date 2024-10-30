import React from 'react';
import { Typography, Box, Paper, Avatar, Grid2 } from '@mui/material';

export default function About() {

  return (
    <>
      <Paper elevation={3} >
        <Grid2 container my={4} spacing={2}>
          <Grid2 item size={{ xs: 12, sm: 6 }} offset={{ xs: 2, sm: 3 }}>
            <Box p={2}>
              <Typography
                variant='h1'
                sx={{
                  my: 4,
                  textAlign: "left",
                  color: "primary.main",
                }}
              >
                About Me
              </Typography>
            </Box>
          </Grid2>
          <Grid2 item size={{ xs: 12, sm: 6 }} offset={{ xs: 2, sm: 3 }}>
            <Box p={2}>
              {/* Avatar Placeholder */}
              <Avatar 
                alt='Reyanna Garibay'
                src='path/to/your/photo.jpg'
                sx={{ width: 100, height: 100, mb: 2 }}
              />
            </Box>
          </Grid2>
          <Grid2 item size={{ xs: 12, sm: 6 }} offset={{ xs: 2, sm: 3 }}>
            <Box p={2}>
              <Typography variant="body1" component="p" sx={{ color: '#555', lineHeight: 1.6 }}>
                Hello! My name is Reyanna Garibay, and I am a web development enthusiast based in Texas, USA.
                Currently, I am a student at Rice University's 6-month Full Stack Web Development Bootcamp, where I am learning about modern web technologies.
                I have a foundation in HTML, CSS, and JavaScript, and I am gradually learning frameworks like React and Node.js.
              </Typography>
            </Box>
          </Grid2>
          <Grid2 item size={{ xs: 12, sm: 6 }} offset={{ xs: 2, sm: 3 }}>
            <Box p={2}>
              <Typography variant="body1" component="p" sx={{ color: '#555', lineHeight: 1.6 }}>
                Outside of coding, I enjoy gaming, especially The Elder Scrolls series, and I like walking outdoors, which helps me stay balanced and inspired.
                These activities provide relaxation and help spark my creativity. My goal is to become a capable full stack developer, able to build useful and user-friendly web applications.
                I am looking forward to applying my skills in real-world projects and working with other developers to create innovative solutions.
                Thank you for visiting my portfolio, and I hope to connect with you!
              </Typography>
            </Box>
          </Grid2>
        </Grid2>
      </Paper>
    </>
  )

};

 // return(
  //   <Container>
  //     <Box sx={{
  //       pt: 4,
  //       display: "flex",
  //       flexDirection: { xs: "column", md: "row", lg: "row"},
  //       justifyContent: "space-between",
  //       }}
  //     >
  //       <Paper elevation={3} sx={{ width: {xs: 1, md: 320} }}>
  //         <Box sx={{ m: 3 }}>
  //           <Typography
  //           variant="h1"
  //           sx={{ my: 4, textAlign: "left", color: "primary.main" }}
  //           >
  //             About Me
  //           </Typography>
  //           {/* Avatar placeholder */}
  //           <Avatar
  //             alt="Reyanna Garibay"
  //             src="path/to/your/photo.jpg"
  //             sx={{ width: 100, height: 100, mb: 2 }}
  //           />
  //           <Typography variant="body1" paragraph sx={{ color: '#555', lineHeight: 1.6 }}>
  //             Hello! My name is Reyanna Garibay, and I am a web development enthusiast based in Texas, USA.
  //             Currently, I am a student at Rice University's 6-month Full Stack Web Development Bootcamp, where I am learning about modern web technologies.
  //             I have a foundation in HTML, CSS, and JavaScript, and I am gradually learning frameworks like React and Node.js.
  //           </Typography>
  //           <Typography variant="body1" paragraph sx={{ color: '#555', lineHeight: 1.6 }}>
  //           Outside of coding, I enjoy gaming, especially The Elder Scrolls series, and I like walking outdoors, which helps me stay balanced and inspired.
  //           These activities provide relaxation and help spark my creativity. My goal is to become a capable full stack developer, able to build useful and user-friendly web applications.
  //           I am looking forward to applying my skills in real-world projects and working with other developers to create innovative solutions.
  //           Thank you for visiting my portfolio, and I hope to connect with you!
  //           </Typography>
  //         </Box>
  //       </Paper>
  //     </Box>
  //   </Container>
  // )

  // return(
  //   <Grid container justifyContent="center" sx={{ mt: 4 }}>
  //     <Grid item xs={12} sm={10} md={10} lg={10}>
  //       <Paper elevation={3} sx={{ p: 3, textAlign: 'left', width: '100%', mx: 'auto' }}>
  //         <Stack spacing={3}>
  //           <Typography variant="h1" sx={{ color: '#333' }}>
  //             About Me
  //           </Typography>
  //           {/* Avatar placeholder */}
  //           <Avatar 
  //             alt="Reyanna Garibay"
  //             src="path/to/your/photo.jpg"
  //             sx={{ width: 100, height: 100, mb: 2 }}
  //           />
  //           <Typography variant="body1" paragraph sx={{ color: '#555', lineHeight: 1.6 }}>
  //           Hello! My name is Reyanna Garibay, and I am a web development enthusiast based in Texas, USA.
  //           Currently, I am a student at Rice University's 6-month Full Stack Web Development Bootcamp, where I am learning about modern web technologies.
  //           I have a foundation in HTML, CSS, and JavaScript, and I am gradually learning frameworks like React and Node.js.
  //           </Typography>
  //           <Typography variant="body1" paragraph sx={{ color: '#555', lineHeight: 1.6 }}>
  //           Outside of coding, I enjoy gaming, especially The Elder Scrolls series, and I like walking outdoors, which helps me stay balanced and inspired.
  //           These activities provide relaxation and help spark my creativity. My goal is to become a capable full stack developer, able to build useful and user-friendly web applications.
  //           I am looking forward to applying my skills in real-world projects and working with other developers to create innovative solutions.
  //           Thank you for visiting my portfolio, and I hope to connect with you!
  //           </Typography>
  //         </Stack>
  //       </Paper>
  //     </Grid>
  //   </Grid>
  // );