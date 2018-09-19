import React from "react";
import { withStyles } from "@material-ui/core/styles";

import FullScreenModal from "../../../../UI/FullScreenModal/FullScreenModal";
import Youtube from "../../../../UI/Youtube/Youtube";
import { Typography } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import Margin from "../../../../UI/Margin/Margin";
import Button from "../../../../UI/Button/Button";

export const VideoComponent = props => {
  return (
    <div>
      <Typography
        variant="headline"
        style={{ textAlign: "center", marginTop: "20px" }}
        component="h3"
      >
        Understanding Time Complexity
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
        Understanding Time Complexity
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

const BranchAndBound = props => {
  const { classes } = props;
  return (
    <React.Fragment>
      <Paper className={classes.root} elevation={1}>
        <Typography variant="display1" component="h3" color="primary">
          Branch And Bound
        </Typography>
        <Margin />
        <Typography variant="body2" component="p">
          Branch and bound is an algorithm design paradigm which is generally
          used for solving combinatorial optimization problems. These problems
          typically exponential in terms of time complexity and may require
          exploring all possible permutations in worst case. Branch and Bound
          solve these problems relatively quickly.
        </Typography>
        <Margin />
        <Margin />
        <Youtube id="3RBNPc0_Q6g" />
        <Margin />
        <Margin />
        <Typography component="p" variant="body2">
          Click Below to know about solving 0/1 KnapSack using Branch and Bound
        </Typography>
        <Margin />
        <Button
          link="https://www.geeksforgeeks.org/0-1-knapsack-using-branch-and-bound/"
          name="Click Here"
        />
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
      </Paper>
    </React.Fragment>
  );
};

export default withStyles(styles)(BranchAndBound);
