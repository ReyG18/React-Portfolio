import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Box, Container } from '@mui/material'
import Header from './components/header';
import Footer from './components/footer';
import About from './pages/about-page';
import Portfolio from './pages/portfolio-page';
import Contact from './pages/contact-page';
import Resume from './pages/resume-page';
import './App.css'


function App() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
      <Header />
      <Box component="main" sx={{ flexGrow: 1, mt: 8 }}>
        <Container>
          <Routes>
            <Route exact path="/" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </Container>
      </Box>
      <Footer />
    </Box>
  );
}

export default App;



























// import React from 'react'
// import { BrowserRouter as Route, Routes } from 'react-router-dom';
// import { Container } from '@mui/material'
// import Header from './components/header'
// // import Footer from './components/footer'
// import NavTabs from './components/navtabs'
// import About from './pages/about-page'
// import Portfolio from './pages/portfolio-page'
// import Contact from './pages/contact-page'
// import Resume from './pages/resume-page'

// const App = () => {
//   // const [activeTab, setActiveTab] = React.useState(0);

//   // const handlePageChange = (page) => {
//   //   setActiveTab(page);
//   // };
//   <>
//     <Header />
//     <NavTabs />
//     <Container>
//       <Routes>
//         <Route path="/about" component={About} />
//         <Route path="/portfolio" component={Portfolio} />
//         <Route path="/contact" component={Contact} />
//         <Route path="/resume" component={Resume} />
//       </Routes>
//     </Container>
//   </>
// }

// export default App
