import React from "react";
import { withStyles } from "@material-ui/core/styles";

import FullScreenModal from "../../../../UI/FullScreenModal/FullScreenModal";
import Youtube from "../../../../UI/Youtube/Youtube";
import { Typography } from "@material-ui/core";

import Button from "../../../../UI/Button/Button";
import queuesrc from "../../../../../assets/images/queue.png";

import Margin from "../../../../UI/Margin/Margin";

export const VideoComponent = props => {
  return (
    <div>
      <Typography
        variant="headline"
        style={{ textAlign: "center", marginTop: "20px" }}
        component="h3"
      >
        Understanding Queue
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

const Queue = props => {
  const { classes } = props;
  return (
    <React.Fragment>
      <div className={classes.root}>
        <Typography component="h3" variant="display1" color="primary">
          Queue
        </Typography>
        <Margin />
        <Typography component="p" variant="body2">
          A Queue is a linear structure which follows a particular order in
          which the operations are performed. The order is First In First Out
          (FIFO). A good example of a queue is any queue of consumers for a
          resource where the consumer that came first is served first. The
          difference between stacks and queues is in removing. In a stack we
          remove the item the most recently added; in a queue, we remove the
          item the least recently added.
        </Typography>
        <Margin />
        <img src={queuesrc} alt="queue" style={{ width: "100%" }} />
        <Margin />

        <Margin />
        <Margin />
        <Youtube id="wjI1WNcIntg" />
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
          link="https://www.geeksforgeeks.org/queue-data-structure/"
        />
      </div>
    </React.Fragment>
  );
};

export default withStyles(styles)(Queue);
