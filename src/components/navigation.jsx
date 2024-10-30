import React, { useState } from 'react'
import { Tabs, Tab } from '@mui/material';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import { styled } from '@mui/system';

function Navigation() {

  // Custom styled Tab component with minimum width and flexible shrink behavior
  const StyledTab = styled(Tab)({
    minWidth: 120,
    flexShrink: 1,
  });

  // State to track the active tab and handle tab change
  const [activeTab, setActiveTab] = useState(0);
  const handleChange = (event, newValue) => {
    setActiveTab(newValue);
  };
  
  return(
    <Grid container justifyContent="flex-end">
      {/* Tabs component to handle navigation */}
      <Tabs
        value={activeTab}
        textColor="secondary"
        onChange={handleChange}
        indicatorColor="secondary"
        variant="fullWidth"
      >
        {/* Using StyledTab for nav tabs  */}
        <StyledTab label="About Me" component={Link} to="/" />
        <StyledTab label="Portfolio" component={Link} to="/portfolio" />
        <StyledTab label="Contact" component={Link} to="/contact" />
        <StyledTab label="Resume" component={Link} to="/resume" />
      </Tabs>
    </Grid>
  )
}

export default Navigation;
