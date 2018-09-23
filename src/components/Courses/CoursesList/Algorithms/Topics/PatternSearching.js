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
      />
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
        Understanding Time Complexity
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

const PatternSearching = props => {
  const { classes } = props;
  return (
    <React.Fragment>
      <div className={classes.root}>
        <Typography component="h3" color="primary" variant="display1">
          Pattern Searching
        </Typography>
        <Typography component="p" variant="body2">
          Pattern searching is an important problem in computer science. When we
          do search for a string in notepad/word file or browser or database,
          pattern searching algorithms are used to show the search results.
        </Typography>
        <Margin />
        <Margin />
        <Typography component="h3" variant="headline">
          Watch This
        </Typography>
        <Youtube id="GTJr8OvyEVQ" />
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
          name="Click Here For  More"
          link="https://www.geeksforgeeks.org/algorithms-gq/pattern-searching/"
        />
      </div>
    </React.Fragment>
  );
};

export default withStyles(styles)(PatternSearching);
