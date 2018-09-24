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
        Understanding Hashing
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

const Hashing = props => {
  const { classes } = props;
  return (
    <React.Fragment>
      <div className={classes.root}>
        <Typography component="h3" variant="display1" color="primary">
          Hashing
        </Typography>
        <Margin />

        <Typography component="p" variant="body2">
          Hashing is the transformation of a string of characters into a usually
          shorter fixed-length value or key that represents the original string.
          Hashing is used to index and retrieve items in a database because it
          is faster to find the item using the shorter hashed key than to find
          it using the original value.
        </Typography>
        <Margin />
        <Margin />
        <Margin />
        <YoutubeMid id="wWgIAphfn2U" />
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
          link="https://www.geeksforgeeks.org/hashing-data-structure/"
        />
      </div>
    </React.Fragment>
  );
};

export default withStyles(styles)(Hashing);
