import React from "react";
import { render } from "react-dom";

import deepPurple from "@material-ui/core/colors/deepPurple";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import "typeface-roboto";

import Root from "./Root";

const theme = createMuiTheme({
  palette: {
    primary: deepPurple
  }
});

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Root />
    </MuiThemeProvider>
  );
}

render(<App />, document.querySelector("#react-app"));
