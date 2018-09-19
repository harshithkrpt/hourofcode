import React from "react";
import { withStyles } from "@material-ui/core/styles";

import Margin from "../../../../UI/Margin/Margin";
import Button from "../../../../UI/Button/Button";

import FullScreenModal from "../../../../UI/FullScreenModal/FullScreenModal";
import Youtube from "../../../../UI/Youtube/Youtube";
import { Typography } from "@material-ui/core";
import { Paper } from "@material-ui/core";

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

const RandomizedAlgorithms = props => {
  const { classes } = props;
  return (
    <React.Fragment>
      <Paper className={classes.root} elevation={1}>
        <Typography component="h3" variant="display1" color="primary">
          Randomized Algorithms
        </Typography>
        <Margin />
        <Typography component="p" variant="body2">
          A randomized algorithm is an algorithm that employs a degree of
          randomness as part of its logic. The algorithm typically uses
          uniformly random bits as an auxiliary input to guide its behavior, in
          the hope of achieving good performance in the "average case" over all
          possible choices of random bits.
        </Typography>
        <Margin />
        <Margin />
        <Youtube id="z0lJ2k0sl1g" />
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
          link="https://www.geeksforgeeks.org/randomized-algorithms-set-1-introduction-and-analysis/"
        />
      </Paper>
    </React.Fragment>
  );
};

export default withStyles(styles)(RandomizedAlgorithms);
