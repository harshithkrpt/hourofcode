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

const MathematicalAlgorithms = props => {
  const { classes } = props;
  return (
    <React.Fragment>
      <div className={classes.root}>
        <Typography component="h3" variant="display1" color="primary">
          Mathematical Algorithms
        </Typography>
        <Margin />

        <Typography component="p" variant="body2">
          An algorithm in mathematics is a procedure, a description of a set of
          steps that can be used to solve a mathematical computation: but they
          are much more common than that today
        </Typography>
        <Margin />
        <Margin />
        <Button
          name="Click Here For More"
          link="https://www.geeksforgeeks.org/mathematical-algorithms/"
        />
      </div>
    </React.Fragment>
  );
};

export default withStyles(styles)(MathematicalAlgorithms);
