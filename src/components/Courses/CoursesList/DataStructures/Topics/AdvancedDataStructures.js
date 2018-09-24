import React from "react";
import { withStyles } from "@material-ui/core/styles";

import FullScreenModal from "../../../../UI/FullScreenModal/FullScreenModal";
import Youtube from "../../../../UI/Youtube/Youtube";
import YoutubeMid from "../../../../UI/Youtube/YoutubeMid";

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
        Understanding AdvancedDataStructure
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

const AdvancedDataStructure = props => {
  const { classes } = props;
  return (
    <React.Fragment>
      <div className={classes.root}>
        <Typography component="h3" variant="display1" color="primary">
          AdvancedDataStructure
        </Typography>
        <Margin />
        <Typography component="p" variant="body2">
          There are many types of data structures link trie , binary indexed
          trees, AVL trees , Splay trees , B tree , Red-Black Tree and
          K-dimensional tree.
        </Typography>

        <Margin />
        <Margin />
        <Typography component="p" variant="subheading" color="primary">
          Tries
        </Typography>
        <Youtube id="zIjfhVPRZCg" />
        <Typography component="p" variant="body2">
          In computer science, a trie, also called digital tree, radix tree or
          prefix tree is a kind of search tree—an ordered tree data structure
          used to store a dynamic set or associative array where the keys are
          usually strings
        </Typography>
        <Typography component="p" variant="subheading" color="primary">
          AVL trees
        </Typography>
        <YoutubeMid id="f4sJ5dOeOow" />
        <Typography component="p" variant="body2">
          An AVL tree is another balanced binary search tree. Named after their
          inventors, Adelson-Velskii and Landis, they were the first dynamically
          balanced trees to be proposed. Like red-black trees, they are not
          perfectly balanced, but pairs of sub-trees differ in height by at most
          1, maintaining an O(logn) search time.
        </Typography>
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
          link="https://www.geeksforgeeks.org/data-structures/#AdvancedDataStructure"
        />
      </div>
    </React.Fragment>
  );
};

export default withStyles(styles)(AdvancedDataStructure);
