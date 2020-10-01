import React from 'react';
import { createMuiTheme, ThemeProvider , makeStyles} from '@material-ui/core';
import Home from './Home';

const useStyles = makeStyles({
  root: {
    background: '#f44366',
    height: '100vh',
  }
})

function App() {

  const theme = createMuiTheme({
    pallete: {
      primary: {
        main: '#f44366',
      },
    },
  });

  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  )
  
}

export default App;