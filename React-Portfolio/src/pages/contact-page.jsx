import React, { useState } from 'react';
import { Box, Button, Typography, LinearProgress, Stack } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { Formik, Form, Field } from 'formik';
import { TextField } from 'formik-mui';
import * as Yup from 'yup';
import SnackbarNotification from '../components/snackbar';

export default function Contact(props) {
  const [open, setOpen] = useState(false);

  const handleSnackbarClose = () => {
    setOpen(false);
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('This field is required'),
    email: Yup.string().email().required('This field is required'),
    message: Yup.string().required('This field is required'),
  });

  return(
    <>
      <Stack spacing={2} sx={{ textAlign: 'justify', my: 4 }}>
        <Typography variant="h4" fontWeight='light'>
          Contact Me
        </Typography>
        <Typography variant="body1" fontWeight='light'>
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
        }}
      >
        {({ submitForm, isSubmitting }) => (
          <Form>
            <Stack spacing={2} sx={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
              <Field 
                component={TextField}
                name='name'
                label='Name'
                size='normal'
              />
              <Field 
                component={TextField}
                name='email'
                label='Email'
                size='normal'
              />
              <Field 
                component={TextField}
                name='message'
                label='Message'
                multiline
                rows={4}
              />
              {isSubmitting && <LinearProgress />}
              <Button
                variant="contained"
                color="primary"
                fullWidth
                sx={{ mt: 2, m: 1, width: '20ch' }}
                endIcon={<SendIcon />}
                disabled={isSubmitting}
                onClick={() => {
                  <SnackbarNotification {...props}/>
                  submitForm}}
              >
                <Typography variant='button' sx={{ textAlign: 'left', display: 'inline-block' }}>
                  Send
                </Typography>
              </Button>
            </Stack>
          </Form>
        )}
      </Formik>
    </>
  );
};
