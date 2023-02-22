import { createTheme } from '@mui/material/styles';
import { green, purple, blue } from '@mui/material/colors';

const customTheme = createTheme({
  typography: {
    fontFamily: [
      'Kiwi Maru',
      'serif',
    ].join(','),
    h1: {
      fontSize: '4rem',
    },
    h2: {
      fontSize: '3rem',
    },
    h3: {
      fontSize: '2.5rem',
    },
    h4: {
      fontSize: '2rem',
    },
    h5: {
      fontSize: '1.5rem',
    },
    h6: {
      fontSize: '1rem',
    },
  },
  palette: {
    background: {
      default: blue[50],
    },
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
  },
});

export default customTheme;
