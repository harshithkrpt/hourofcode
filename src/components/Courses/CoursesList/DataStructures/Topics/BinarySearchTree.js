import React from "react";
import { withStyles } from "@material-ui/core/styles";

import FullScreenModal from "../../../../UI/FullScreenModal/FullScreenModal";
import Youtube from "../../../../UI/Youtube/Youtube";
import { Typography } from "@material-ui/core";

import Button from "../../../../UI/Button/Button";
import bstsrc from "../../../../../assets/images/bst.png";

import Margin from "../../../../UI/Margin/Margin";

export const VideoComponent = props => {
  return (
    <div>
      <Typography
        variant="headline"
        style={{ textAlign: "center", marginTop: "20px" }}
        component="h3"
      >
        Understanding BinarySearchTree
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
        Understanding Binary Search Tree
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

const BinarySearchTree = props => {
  const { classes } = props;
  return (
    <React.Fragment>
      <div className={classes.root}>
        <Typography component="h3" variant="display1" color="primary">
          Binary Search Tree
        </Typography>
        <Margin />

        <Typography component="p" variant="body2">
          Binary Search Tree is a node-based binary tree data structure which
          has the following properties:
        </Typography>
        <Typography component="p" variant="body2">
          1.The left subtree of a node contains only nodes with keys lesser than
          the node’s key.
        </Typography>
        <Typography component="p" variant="body2">
          2.The right subtree of a node contains only nodes with keys greater
          than the node’s key
        </Typography>
        <Typography component="p" variant="body2">
          3.The left and right subtree each must also be a binary search tree.
        </Typography>
        <Margin />
        <Margin />
        <img
          src={bstsrc}
          alt="binary search tree"
          style={{ width: "100%", display: "grid", justifyContent: "center" }}
        />
        <Margin />
        <Youtube id="pYT9F8_LFTM" />
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
          link="https://www.geeksforgeeks.org/binary-search-tree-data-structure/"
        />
      </div>
    </React.Fragment>
  );
};

export default withStyles(styles)(BinarySearchTree);
