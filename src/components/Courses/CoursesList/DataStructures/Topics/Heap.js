import React from "react";
import { withStyles } from "@material-ui/core/styles";

import FullScreenModal from "../../../../UI/FullScreenModal/FullScreenModal";
import Youtube from "../../../../UI/Youtube/Youtube";
import { Typography } from "@material-ui/core";
import YoutubeMid from "../../../../UI/Youtube/YoutubeMid";
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

const Heap = props => {
  const { classes } = props;
  return (
    <React.Fragment>
      <div className={classes.root}>
        <Typography component="h3" variant="display1" color="primary">
          Heap
        </Typography>
        <Typography component="p" variant="body2">
          In computer science, a heap is a specialized tree-based data structure
          that satisfies the heap property: if P is a parent node of C, then the
          key of P is either greater than or equal to or less than or equal to
          the key of C. The node at the "top" of the heap is called the root
          node.
        </Typography>
        <Margin />
        <Margin />
        <Typography component="h3" variant="subheading" color="primary">
          Binary Heap
        </Typography>
        <Typography component="p" variant="body2">
          A Binary Heap is a Binary Tree with following properties.
        </Typography>
        <Typography component="p" variant="body2">
          1) It’s a complete tree (All levels are completely filled except
          possibly the last level and the last level has all keys as left as
          possible). This property of Binary Heap makes them suitable to be
          stored in an array.
        </Typography>
        <Typography component="p" variant="body2">
          2) A Binary Heap is either Min Heap or Max Heap. In a Min Binary Heap,
          the key at root must be minimum among all keys present in Binary Heap.
          The same property must be recursively true for all nodes in Binary
          Tree. Max Binary Heap is similar to MinHeap.
        </Typography>
        <Margin />

        <Margin />
        <Margin />
        <Youtube id="t0Cq6tVNRBA" />
        <YoutubeMid id="uZj0hetLFHU" />
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
          link="https://www.geeksforgeeks.org/binary-heap/"
        />
      </div>
    </React.Fragment>
  );
};

export default withStyles(styles)(Heap);
