import React from "react";
import { withStyles } from "@material-ui/core/styles";

import FullScreenModal from "../../../../UI/FullScreenModal/FullScreenModal";
import Youtube from "../../../../UI/Youtube/Youtube";
import { Typography } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import Button from "../../../../UI/Button/Button";

import Margin from "../../../../UI/Margin/Margin";

export const VideoComponent = props => {
  return (
    <div>
      <Typography
        variant="headline"
        style={{ textAlign: "center", marginTop: "20px" }}
        component="h3"
      >
        Understanding BackTracking
      </Typography>
      <Youtube id="D6xkbGLQesk" />
    </div>
  );
};

export const CodeComponent = props => {
  return (
    <div>
      <Typography
        variant="headline"
        style={{ textAlign: "center", marginTop: "20px" }}
        component="h3"
      >
        Understanding Back Tracking
      </Typography>
    </div>
  );
};

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  }
});

const BackTracking = props => {
  const { classes } = props;
  return (
    <React.Fragment>
      <Paper className={classes.root} elevation={1}>
        <Typography component="h3" variant="display1" color="primary">
          Back Tracking
        </Typography>
        <Margin />
        <Typography component="p" variant="body2">
          Backtracking is an algorithmic-technique for solving problems
          recursively by trying to build a solution incrementally, one piece at
          a time, removing those solutions that fail to satisfy the constraints
          of the problem at any point of time (by time, here, is referred to the
          time elapsed till reaching any level of the search tree).
        </Typography>
        <Margin />
        <Typography component="h3" variant="headline">
          According to Wiki Defination
        </Typography>
        <Typography component="p" variant="body2">
          <b>Backtracking</b> can be defined as a general algorithmic technique
          that considers searching every possible combination in order to solve
          an optimization problem.
        </Typography>
        <Margin />
        <Margin />
        <Youtube id="DKCbsiDBN6c" />
        <div style={{ display: "flex", marginTop: "20px" }}>
          <FullScreenModal
            heading="Analysis of Algorithms"
            component={<VideoComponent />}
            buttonName="Watch Video Samples"
          />
          <FullScreenModal
            heading="Analysis Of Algorithms"
            component={<CodeComponent />}
            buttonName="Watch Code Samples"
          />
        </div>
        <Button
          name="Click Here For More"
          link="https://www.geeksforgeeks.org/backtracking-introduction/"
        />
      </Paper>
    </React.Fragment>
  );
};

export default withStyles(styles)(BackTracking);
