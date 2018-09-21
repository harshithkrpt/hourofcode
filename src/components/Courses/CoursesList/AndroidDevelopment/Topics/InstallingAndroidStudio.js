import React from "react";
import { withStyles } from "@material-ui/core/styles";

import { Typography } from "@material-ui/core";
import { Paper } from "@material-ui/core";

import Margin from "../../../../UI/Margin/Margin";
import Youtube from "../../../../UI/Youtube/Youtube";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  }
});

const InstallingAndroidStudio = props => {
  const { classes } = props;
  return (
    <React.Fragment>
      <Paper className={classes.root} elevation={1} style={{ width: "100%" }}>
        <Typography component="h3" variant="display1" color="primary">
          Installing Android Studio
        </Typography>
        <Margin />

        <Typography component="p" variant="body2">
          <a
            href="https://developer.android.com/studio/"
            style={{ textDecoration: "none" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            Click Here
          </a>{" "}
          to install Android Studio
        </Typography>
        <Margin />
        <Typography component="h3" variant="headline">
          Watch this video
        </Typography>
        <Margin />
        <Youtube id="7vvMltQtfxY" />
      </Paper>
    </React.Fragment>
  );
};

export default withStyles(styles)(InstallingAndroidStudio);
