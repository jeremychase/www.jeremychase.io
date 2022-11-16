import React, { Component } from "react";
import PropTypes from "prop-types";

import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

import WAVES from 'vanta/dist/vanta.waves.min'
import * as THREE from 'three'

const styles = theme => ({
  appbar: {
    height: "24px"
  },
  heroContent: {
    maxWidth: 600,
    margin: "0 auto",
  },
  heroButtons: {
    marginTop: theme.spacing(4)
  },
  root: {},
  splitter: {
    height: "60vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  },
  waves: {
    minHeight: "100vh"
  },
  topAccent: {
    height: "6px",
    backgroundColor: theme.palette.primary.dark
  }
});

class Root extends Component {
  componentDidMount() {
    console.log("Hello; How are you today?")
    const { theme } = this.props;

    this.effect = WAVES({
      el: "#waves",
      color: theme.palette.primary.dark,
      shininess: 61.0,
      waveHeight: 40.0,
      waveSpeed: 0.65,
      zoom: 0.65,
      THREE: THREE
    });
  }

  componentWillUnmount() {
    if (this.effect) this.effect.destroy();
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <div id="waves" className={classes.waves}>
          <div className={classes.topAccent} />
          <AppBar className={classes.appbar} position="sticky" />

          <div className={classes.splitter}>
            <div className={classes.heroUnit}>
              <div className={classes.heroContent}>
                <Typography
                  component="h1"
                  variant="h1"
                  align="center"
                  color="textPrimary"
                  gutterBottom
                >
                  Jeremy Chase
                </Typography>
                <Typography
                  variant="h6"
                  align="center"
                  color="textSecondary"
                  paragraph
                >
                  Real Human Person
                </Typography>
                <div className={classes.heroButtons}>
                  <Grid container spacing={3} justify="center">
                    <Grid item>
                      <Button
                        variant="outlined"
                        href="https://github.com/JeremyChase"
                        color="secondary"
                      >
                        github
                      </Button>
                    </Grid>
                    <Grid item>
                      <Button
                        variant="outlined"
                        href="https://www.linkedin.com/in/jeremychase/"
                        color="secondary"
                      >
                        LinkedIn
                      </Button>
                    </Grid>
                    <Grid item>
                      <Button
                        variant="outlined"
                        href="mailto:jeremy.chase@gmail.com"
                        color="secondary"
                      >
                        email
                      </Button>
                    </Grid>
                  </Grid>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Root.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(Root);
