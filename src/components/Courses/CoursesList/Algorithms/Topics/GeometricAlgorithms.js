import React from "react";
import { withStyles } from "@material-ui/core/styles";

import { Typography } from "@material-ui/core";

import Button from "../../../../UI/Button/Button";
import Margin from "../../../../UI/Margin/Margin";

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
      <div className={classes.root}>
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
      </div>
    </React.Fragment>
  );
};

export default withStyles(styles)(GeometricAlgorithms);
