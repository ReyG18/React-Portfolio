import React from 'react'
import { Snackbar, Alert } from '@mui/material'

export default function SnackbarNotification({ open, handleSnackbarClose}) {

  return(
    <>
      {/* Snackbar component to display notifications */}
      <Snackbar
        open={open}
        autoHideDuration={5000}
        onClose={handleSnackbarClose}
      >
        {/* Using Alert inside Snackbar to take advantage of Alert styling */}
        <Alert
          onClose={handleSnackbarClose}
          severity='success'
          variant='filled'
          sx={{ width: '100%' }}
        >
          Message sent!
        </Alert>
      </Snackbar>
    </>
  )
}