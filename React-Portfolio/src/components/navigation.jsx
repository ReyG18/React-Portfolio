import React from 'react'
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

function Navigation() {
  return(
    <>
      <Button color="inherit" component={Link} to="/">
        About Me
      </Button>
      <Button color="inherit" component={Link} to="/portfolio">
        Portfolio
      </Button>
      <Button color="inherit" component={Link} to="/contact">
        Contact
      </Button>
      <Button color="inherit" component={Link} to="/resume">
        Resume
      </Button>
    </>
  )
}

export default Navigation;