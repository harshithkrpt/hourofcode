import React from "react";
import { withStyles } from "@material-ui/core/styles";

import FullScreenModal from "../../../../UI/FullScreenModal/FullScreenModal";
import Youtube from "../../../../UI/Youtube/Youtube";
import { Typography } from "@material-ui/core";

import Button from "../../../../UI/Button/Button";
import linkedListsrc from "../../../../../assets/images/linked_list.png";

import Margin from "../../../../UI/Margin/Margin";

export const VideoComponent = props => {
  return (
    <div>
      <Typography
        variant="headline"
        style={{ textAlign: "center", marginTop: "20px" }}
        component="h3"
      >
        Understanding LinkedList
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

const LinkedList = props => {
  const { classes } = props;
  return (
    <React.Fragment>
      <div className={classes.root}>
        <Typography component="h3" variant="display1" color="primary">
          Linked List
        </Typography>
        <Margin />
        <Typography component="p" variant="body2">
          A linked list is a linear data structure, in which the elements are
          not stored at contiguous memory locations. The elements in a linked
          list are linked using pointers as shown in the below image:
        </Typography>
        <Margin />
        <Margin />
        <Typography component="p" variant="body2">
          In simple words, a linked list consists of nodes where each node
          contains a data field and a reference(link) to the next node in the
          list.
        </Typography>
        <Margin />
        <Margin />
        <img src={linkedListsrc} alt="linked list" style={{ width: "100%" }} />
        <Margin />
        <Margin />
        <Youtube id="njTh_OwMljA" />
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
          link="https://www.geeksforgeeks.org/data-structures/linked-list/"
        />
      </div>
    </React.Fragment>
  );
};

export default withStyles(styles)(LinkedList);
