import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#607d8b',
    },
    secondary: {
      main: '#9e9e9e',
    },
    background: {
      default: '#ffffff',
      paper: '#f5f5f5',
    },
    text: {
      primary: '#000000',
      secondary: '#ffffff',
    },
  },
  typography: {
    h1: {
      fontSize: "3rem",
      fontWeight: 300,
    },
    h2: {
      fontSize: "1.75rem",
      fontWeight: 300,
    },
    h3: {
      fontSize: "1.5rem",
      fontWeight: 300,
    },
    fontFamily: 'Roboto, Arial, sans-serif',
  },
});

export default theme;
