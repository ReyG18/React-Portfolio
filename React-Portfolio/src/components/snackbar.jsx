import React from 'react'
import { Snackbar, Alert } from '@mui/material'
// import { Button } from '@mui/material/Button'

export default function SnackbarNotification({ open, handleSnackbarClose}) {

  return(
    <>
      {/* <Button onClick={handleOpen}>Submit</Button> */}
      <Snackbar
        open={open}
        autoHideDuration={5000}
        onClose={handleSnackbarClose}
      >
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