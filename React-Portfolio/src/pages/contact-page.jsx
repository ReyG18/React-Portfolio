import React from 'react';
import { Box, Button, Typography, LinearProgress } from '@mui/material';
import { Formik, Form, Field } from 'formik';
import { TextField } from 'formik-mui';
import * as Yup from 'yup';

export default function Contact() {

  const validationSchema = Yup.object({
    name: Yup.string().required('This field is required'),
    email: Yup.string().email().required('This field is required'),
    message: Yup.string().required('This field is required'),
  });

  return(
    <>
      <Box>
        <Typography variant="h4" gutterBottom>Contact Me</Typography>
        <Typography variant="body1">
          This is the Contact page.
        </Typography>
      </Box>
      <Formik
        initialValues={{name: '', email: '', message: ''}}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            setSubmitting(false);
            alert(JSON.stringify(values, null, 2));
          }, 500);
        }}
      >
        {({ submitForm, isSubmitting }) => (
          <Form>
            <Box>
              <Field 
                component={TextField}
                name='name'
                label='Name'
              />
            </Box>
            <Box>
              <Field 
                component={TextField}
                name='email'
                label='Email'
              />
            </Box>
            <Box>
              <Field 
                component={TextField}
                name='message'
                label='Message'
                multiline
                maxRows={4}
              />
            </Box>

            {isSubmitting && <LinearProgress />}
            <Button
              variant="contained"
              color="primary"
              disabled={isSubmitting}
              onClick={submitForm}
            >
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );
};
