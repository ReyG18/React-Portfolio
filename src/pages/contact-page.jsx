import React, { useState } from 'react';
import { Button, Typography, LinearProgress, Stack, Paper } from '@mui/material';
import Grid from '@mui/material/Grid2';
import SendIcon from '@mui/icons-material/Send';
import { Formik, Form, Field } from 'formik';
import { TextField } from 'formik-mui';
import * as Yup from 'yup';
import SnackbarNotification from '../components/snackbar';

export default function Contact() {
  // State to manage snackbar visibility
  const [open, setOpen] = useState(false);

  const handleSnackbarClose = () => {
    setOpen(false);
  };

  // Validation schema for the form using Yup
  const validationSchema = Yup.object({
    name: Yup.string().required('This field is required'),
    email: Yup.string().email().required('This field is required'),
    message: Yup.string().required('This field is required'),
  });

  return(
    <Grid container justifyContent="center" sx={{ mt: 4 }}>
      <Grid item xs={12} sm={10} md={10} lg={10}>
        <Paper elevation={3} sx={{ px: 2, py: 2, mx: 30, textAlign: 'center', width: '100%' }}>
          <Stack spacing={3}>
            <Typography variant="h4" sx={{ fontWeight: 300, color: '#333' }}>
              Contact Me
            </Typography>
            <Typography variant="body1" sx={{ fontWeight: 300, color: '#555'}}>
              Submit the form below to get in touch
            </Typography>
          </Stack>
          <Formik
            initialValues={{name: '', email: '', message: ''}}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              setTimeout(() => {
                setSubmitting(false);
                resetForm();
              }, 500);
              setOpen(true);
            }}
          >
            {({ submitForm, isSubmitting }) => (
              <Form>
                <Stack spacing={2} sx={{ mt: 3 }}>
                  <Field 
                    component={TextField}
                    name='name'
                    label='Name'
                    size='normal'
                    fullWidth
                    sx={{
                      '& .MuiInputLabel-root': { color: '#333' },
                      '& .MuiInputLabel-root.Mui-focused': { color: '#333' } }}
                  />
                  <Field 
                    component={TextField}
                    name='email'
                    label='Email'
                    size='normal'
                    fullWidth
                    sx={{
                      '& .MuiInputLabel-root': { color: '#333' },
                      '& .MuiInputLabel-root.Mui-focused': { color: '#333' } }}
                  />
                  <Field 
                    component={TextField}
                    name='message'
                    label='Message'
                    multiline
                    rows={4}
                    fullWidth
                    sx={{
                      '& .MuiInputLabel-root': { color: '#333' },
                      '& .MuiInputLabel-root.Mui-focused': { color: '#333' } }}
                  />
                  {isSubmitting && <LinearProgress />}
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    sx={{ mt: 2 }}
                    endIcon={<SendIcon />}
                    disabled={isSubmitting}
                    onClick={submitForm}
                  >
                    <Typography variant='button'>
                      Send
                    </Typography>
                  </Button>
                </Stack>
              </Form>
            )}
          </Formik>
          <SnackbarNotification open={open} handleClose={handleSnackbarClose} />
        </Paper>
      </Grid>
    </Grid>
  );
};
