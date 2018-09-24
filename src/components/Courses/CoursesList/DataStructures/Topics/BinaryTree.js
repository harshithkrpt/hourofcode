import React from "react";
import { withStyles } from "@material-ui/core/styles";

import FullScreenModal from "../../../../UI/FullScreenModal/FullScreenModal";
import Youtube from "../../../../UI/Youtube/Youtube";
import { Typography } from "@material-ui/core";

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
        Understanding Arrays
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

const Arrays = props => {
  const { classes } = props;
  return (
    <React.Fragment>
      <div className={classes.root}>
        <Typography component="h3" variant="display1" color="primary">
          Binary Tree
        </Typography>
        <Margin />

        <Typography component="p" variant="body2">
          <b>Trees :</b> Unlike Arrays, Linked Lists, Stack and queues, which
          are linear data structures, trees are hierarchical data structures.
        </Typography>
        <Typography component="p" variant="body2">
          <b>Tree Vocabulary:</b> The topmost node is called root of the tree.
          The elements that are directly under an element are called its
          children. The element directly above something is called its parent.
          For example, a is a child of f and f is the parent of a. Finally,
          elements with no children are called leaves.
        </Typography>
        <Typography component="p" variant="body2">
          <b>Binary Tree:</b> A tree whose elements have at most 2 children is
          called a binary tree. Since each element in a binary tree can have
          only 2 children, we typically name them the left and right child.
        </Typography>
        <Margin />

        <Margin />
        <Margin />
        <Youtube id="oSWTXtMglKE" />
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
          link="https://www.geeksforgeeks.org/binary-tree-set-1-introduction/"
        />
      </div>
    </React.Fragment>
  );
};

export default withStyles(styles)(Arrays);
