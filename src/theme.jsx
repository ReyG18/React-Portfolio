import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  colorSchemes: {
    light: {
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
    },
    dark: {
      palette: {
        primary: {
          main: '#90a4ae',
        },
        secondary: {
          main: '#757575',
        },
        background: {
          default: '#121212',
          paper: '#424242',
        },
        text: {
          primary: '#ffffff',
          secondary: '#bdbdbd',
        },
      },
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

