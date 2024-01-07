import {createTheme} from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      light: '#4e63a7',
      main: '#223c92',
      dark: '#172a66',
      contrastText: '#fff',
    },
    secondary: {
      light: '#eecf5d',
      main: '#eac435',
      dark: '#a38925',
      contrastText: '#000',
    },
    error: {
      main: '#e40066', // Use for error states
    },
    warning: {
      main: '#fb4d3d', // Use for warning states
    },
    info: {
      main: '#03cea4', // Use for informational messages or elements
    },
  },
});

export default theme;