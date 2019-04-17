import React from "react";
import { render } from "react-dom";

import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import "typeface-roboto";

import Root from "./Root";

const theme = createMuiTheme({
  palette: {
    primary: { main: "#000640" },
    secondary: { main: "#264000" },
    type: "dark"
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
