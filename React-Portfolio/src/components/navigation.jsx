import React, { useState } from 'react'
import { Tabs, Tab, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import { styled } from '@mui/system';

function Navigation() {

  const StyledTab = styled(Tab)({
    minWidth: 120,
    flexShrink: 1,
  });

  const [activeTab, setActiveTab] = useState(0);
  const handleChange = (event, newValue) => {
    setActiveTab(newValue);
  };
  
  return(
    <Grid container justifyContent="flex-end">
      <Tabs
        value={activeTab}
        textColor="secondary"
        onChange={handleChange}
        indicatorColor="secondary"
        variant="fullWidth"
      >
        <StyledTab label="About Me" component={Link} to="/" />
        <StyledTab label="Portfolio" component={Link} to="/portfolio" />
        <StyledTab label="Contact" component={Link} to="/contact" />
        <StyledTab label="Resume" component={Link} to="/resume" />
      </Tabs>
    </Grid>
  )
}

export default Navigation;
