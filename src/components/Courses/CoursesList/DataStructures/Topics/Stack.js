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
        Understanding Stack
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

const Stack = props => {
  const { classes } = props;
  return (
    <React.Fragment>
      <div className={classes.root}>
        <Typography component="h3" variant="display1" color="primary">
          Stack
        </Typography>
        <Margin />
        <Typography component="p" variant="body2">
          Stack is a linear data structure which follows a particular order in
          which the operations are performed. The order may be LIFO(Last In
          First Out) or FILO(First In Last Out).
        </Typography>
        <Margin />

        <Typography component="p" variant="body2">
          There are many real-life examples of a stack. Consider an example of
          plates stacked over one another in the canteen. The plate which is at
          the top is the first one to be removed, i.e. the plate which has been
          placed at the bottommost position remains in the stack for the longest
          period of time. So, it can be simply seen to follow LIFO(Last In First
          Out)/FILO(First In Last Out) order.
        </Typography>
        <Margin />
        <Margin />
        <Youtube id="F1F2imiOJfk" />
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
          link="https://www.geeksforgeeks.org/stack-data-structure/"
        />
      </div>
    </React.Fragment>
  );
};

export default withStyles(styles)(Stack);
