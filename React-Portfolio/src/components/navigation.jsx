import React, { useState } from 'react'
import { Tabs, Tab } from '@mui/material';
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
    <Tabs
      value={activeTab}
      onChange={handleChange}
      indicatorColor="primary"
      textColor="primary"
      variant="fullWidth"
    >
      <StyledTab label="About Me" component={Link} to="/" />
      <StyledTab label="Portfolio" component={Link} to="/portfolio" />
      <StyledTab label="Contact" component={Link} to="/contact" />
      <StyledTab label="Resume" component={Link} to="/resume" />
    </Tabs>
  )
}

export default Navigation;
