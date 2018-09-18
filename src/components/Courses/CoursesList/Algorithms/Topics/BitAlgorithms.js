import React from "react";
import { withStyles } from "@material-ui/core/styles";

import FullScreenModal from "../../../../UI/FullScreenModal/FullScreenModal";
import Youtube from "../../../../UI/Youtube/Youtube";
import { Typography } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import Button from "../../../../UI/Button/Button";
import Margin from "../../../../UI/Margin/Margin";

import Dimensions from "react-dimensions";

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

const BitAlgorithms = props => {
  const { classes } = props;
  return (
    <React.Fragment>
      <Paper className={classes.root} elevation={1}>
        <Typography component="h3" variant="display1" color="primary">
          Bit Algorithms
        </Typography>
        <Margin />
        <Typography component="p" variant="body2">
          Bit manipulation is the act of algorithmically manipulating bits or
          other pieces of data shorter than a word. Computer programming tasks
          that require bit manipulation include low-level device control, error
          detection and correction algorithms, data compression, encryption
          algorithms, and optimization
        </Typography>
        <Margin />
        <Margin />
        <Youtube id="NLKQEOgBAnw" />

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
          link="https://www.geeksforgeeks.org/bitwise-algorithms/"
        />
      </Paper>
    </React.Fragment>
  );
};

export default withStyles(styles)(Dimensions()(BitAlgorithms));
