import React from "react";
import { withStyles } from "@material-ui/core/styles";

import FullScreenModal from "../../../../UI/FullScreenModal/FullScreenModal";
import Youtube from "../../../../UI/Youtube/Youtube";
import { Typography } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import Margin from "../../../../UI/Margin/Margin";
import Button from "../../../../UI/Button/Button";

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

const GeometricAlgorithms = props => {
  const { classes } = props;
  return (
    <React.Fragment>
      <Paper className={classes.root} elevation={1}>
        <Typography component="h3" variant="display1" color="primary">
          Geometrical Algorithms
        </Typography>
        <Margin />
        <Typography className="p" variant="body2">
          Computational geometry is a branch of computer science devoted to the
          study of algorithms which can be stated in terms of geometry. ...
          Combinatorial computational geometry, also called algorithmic
          geometry, which deals with geometric objects as discrete entities.
        </Typography>
        <Button
          name="Click Here For More"
          link="https://www.geeksforgeeks.org/geometric-algorithms/"
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

export default withStyles(styles)(Dimensions()(GeometricAlgorithms));
