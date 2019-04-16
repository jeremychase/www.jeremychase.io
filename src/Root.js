import React, { Component } from "react";
import PropTypes from "prop-types";

import AppBar from "@material-ui/core/AppBar";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  appbar: {
    height: "24px"
  },
  content: {},
  paper: {
    margin: theme.spacing.unit * 4,
    padding: theme.spacing.unit * 4
  },
  root: {
    flexGrow: 1
  },
  topAccent: {
    height: "6px",
    backgroundColor: theme.palette.primary.dark
  }
});

class Root extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.topAccent} />
        <AppBar className={classes.appbar} position="sticky" />

        <Grid container spacing={24}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Typography variant="h3" gutterBottom>
                Heading
              </Typography>
              <Typography variant="body1">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                blanditiis tenetur unde suscipit, quam beatae rerum inventore
                consectetur, neque doloribus, cupiditate numquam dignissimos
                laborum fugiat deleniti? Eum quasi quidem quibusdam.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

Root.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(Root);
