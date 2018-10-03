import React from "react";
import { withStyles } from "@material-ui/core/styles";

import FullScreenModal from "../../../../UI/FullScreenModal/FullScreenModal";
import Youtube from "../../../../UI/Youtube/Youtube";
import { Typography, Divider } from "@material-ui/core";

import Button from "../../../../UI/Button/Button";
import Margin from "../../../../UI/Margin/Margin";
import YoutubeMid from "../../../../UI/Youtube/YoutubeMid";
import OutputCard from "../../../../UI/OutPutCard/OutPutCard";
import { CodeData } from "../../../../../Code/CodeData/CodeData";
import {
  Example1,
  Example1Output,
  Example2,
  Example2Output,
  Example3,
  Example3Output
} from "./CodeSamples/BranchAndBoundCS";

export const VideoComponent = props => {
  return (
    <div>
      <Typography
        variant="headline"
        style={{ textAlign: "center", marginTop: "20px" }}
        component="h3"
      >
        Branch And Bound Tutorials
      </Typography>
      <Margin />
      <Typography
        style={{ marginLeft: "30px" }}
        component="h3"
        variant="subheading"
      >
        Branch and Bound Introduction
      </Typography>
      <Youtube id="3RBNPc0_Q6g" />

      <Margin />
      <Typography
        style={{ marginLeft: "30px" }}
        component="h3"
        variant="subheading"
      >
        Travelling Sales Person Problem - Branch and Bound
      </Typography>
      <Youtube id="1FEP_sNb62k" />

      <Margin />
      <Typography
        style={{ marginLeft: "30px" }}
        component="h3"
        variant="subheading"
      >
        Knapsack using Branch and Bound
      </Typography>
      <YoutubeMid id="yV1d-b_NeK8" />

      <Margin />
      <Typography
        style={{ marginLeft: "30px" }}
        component="h3"
        variant="subheading"
      >
        15 Puzzle Problems
      </Typography>
      <YoutubeMid id="tMwC2VSYSYs" />
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
        Branch And Bound Code
      </Typography>
      <Margin />
      <Typography
        component="h3"
        variant="subheading"
        color="primary"
        style={{ marginLeft: "20px" }}
      >
        Implementation of 0/1 Knapsack using Branch and Bound
      </Typography>
      <CodeData code={Example1} />
      <Typography
        component="h3"
        variant="subheading"
        color="secondary"
        style={{ marginLeft: "20px" }}
      >
        Output
      </Typography>
      <OutputCard data={Example1Output} />
      <Divider />

      <Margin />
      <Typography
        component="h3"
        variant="subheading"
        color="primary"
        style={{ marginLeft: "20px" }}
      >
        8 Puzzles Question
      </Typography>
      <CodeData code={Example2} />
      <Typography
        component="h3"
        variant="subheading"
        color="secondary"
        style={{ marginLeft: "20px" }}
      >
        Output
      </Typography>
      <OutputCard data={Example2Output} />
      <Divider />

      <Margin />
      <Typography
        component="h3"
        variant="subheading"
        color="primary"
        style={{ marginLeft: "20px" }}
      >
        N Queen Problem using Branch And Bound
      </Typography>
      <CodeData code={Example3} />
      <Typography
        component="h3"
        variant="subheading"
        color="secondary"
        style={{ marginLeft: "20px" }}
      >
        Output
      </Typography>
      <OutputCard data={Example3Output} />
      <Divider />
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

const BranchAndBound = props => {
  const { classes } = props;
  return (
    <React.Fragment>
      <div className={classes.root}>
        <Typography variant="display1" component="h3" color="primary">
          Branch And Bound
        </Typography>
        <Margin />
        <Typography variant="body2" component="p">
          Branch and bound is an algorithm design paradigm which is generally
          used for solving combinatorial optimization problems. These problems
          typically exponential in terms of time complexity and may require
          exploring all possible permutations in worst case. Branch and Bound
          solve these problems relatively quickly.
        </Typography>
        <Margin />
        <Margin />
        <Youtube id="3RBNPc0_Q6g" />
        <Margin />
        <Margin />
        <Typography component="p" variant="body2">
          Click Below to know about solving 0/1 KnapSack using Branch and Bound
        </Typography>
        <Margin />
        <Button
          link="https://www.geeksforgeeks.org/0-1-knapsack-using-branch-and-bound/"
          name="Click Here"
        />
        <div style={{ display: "flex", marginTop: "20px" }}>
          <FullScreenModal
            heading="Branch And Bound"
            component={<VideoComponent />}
            buttonName="Watch Video Samples"
          />
          <FullScreenModal
            heading="Branch And Bound"
            component={<CodeComponent />}
            buttonName="Watch Code Samples"
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default withStyles(styles)(BranchAndBound);
