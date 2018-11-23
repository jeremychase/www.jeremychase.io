import React from 'react';
import { render } from 'react-dom';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import 'typeface-roboto';

import App from './App';

const theme = createMuiTheme();

function MyApp() {
    return (
          <MuiThemeProvider theme={theme}>
            <CssBaseline />
            <App />
          </MuiThemeProvider>
        );
}

render(<MyApp />, document.querySelector('#react-app'));
