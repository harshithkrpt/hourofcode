import React from "react";
import { withStyles } from "@material-ui/core/styles";

import FullScreenModal from "../../../../UI/FullScreenModal/FullScreenModal";
import Youtube from "../../../../UI/Youtube/Youtube";
import YoutubeMid from "../../../../UI/Youtube/YoutubeMid";

import { Typography, Divider } from "@material-ui/core";

import Button from "../../../../UI/Button/Button";

import Margin from "../../../../UI/Margin/Margin";
import { CodeData } from "../../../../../Code/CodeData/CodeData";
import OutputCard from "../../../../UI/OutPutCard/OutPutCard";
import { Example1, Example1Output } from "./CodeSamples/BacktrackingCS";

export const VideoComponent = props => {
  return (
    <div>
      <Typography
        variant="headline"
        style={{ textAlign: "center", marginTop: "20px" }}
        component="h3"
      >
        Back Tracking Videos
      </Typography>
      <Margin />
      <Typography
        style={{ marginLeft: "30px" }}
        component="h3"
        variant="subheading"
      >
        Introduction to Backtracking
      </Typography>
      <Youtube id="DKCbsiDBN6c" />

      <Margin />
      <Typography
        style={{ marginLeft: "30px" }}
        component="h3"
        variant="subheading"
      >
        N Queens Problem using Backtracking
      </Typography>
      <Youtube id="xFv_Hl4B83A" />

      <Margin />
      <Typography
        style={{ marginLeft: "30px" }}
        component="h3"
        variant="subheading"
      >
        Sum of Subsets
      </Typography>
      <YoutubeMid id="kyLxTdsT8ws" />

      <Margin />
      <Typography
        style={{ marginLeft: "30px" }}
        component="h3"
        variant="subheading"
      >
        Graph Coloring Method
      </Typography>
      <Youtube id="052VkKhIaQ4" />

      <Margin />
      <Typography
        style={{ marginLeft: "30px" }}
        component="h3"
        variant="subheading"
      >
        Hamiltonian Cycle
      </Typography>
      <Youtube id="dQr4wZCiJJ4" />

      <Margin />
      <Typography
        style={{ marginLeft: "30px" }}
        component="h3"
        variant="subheading"
      >
        Sudoku Backtracking
      </Typography>
      <Youtube id="l7f9-GNH1j8" />
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
        BackTracking Programmes
      </Typography>
      <Margin />
      <Typography
        component="h3"
        variant="subheading"
        color="primary"
        style={{ marginLeft: "20px" }}
      >
        Program to print all permutations of a given string
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

const BackTracking = props => {
  const { classes } = props;
  return (
    <React.Fragment>
      <div className={classes.root}>
        <Typography component="h3" variant="display1" color="primary">
          Back Tracking
        </Typography>
        <Margin />
        <Typography component="p" variant="body2">
          Backtracking is an algorithmic-technique for solving problems
          recursively by trying to build a solution incrementally, one piece at
          a time, removing those solutions that fail to satisfy the constraints
          of the problem at any point of time (by time, here, is referred to the
          time elapsed till reaching any level of the search tree).
        </Typography>
        <Margin />
        <Typography component="h3" variant="headline">
          According to Wiki Defination
        </Typography>
        <Typography component="p" variant="body2">
          <b>Backtracking</b> can be defined as a general algorithmic technique
          that considers searching every possible combination in order to solve
          an optimization problem.
        </Typography>
        <Margin />
        <Margin />
        <Youtube id="DKCbsiDBN6c" />
        <div style={{ display: "flex", marginTop: "20px" }}>
          <FullScreenModal
            heading="Back Tracking"
            component={<VideoComponent />}
            buttonName="Watch Video Samples"
          />
          <FullScreenModal
            heading="Back Tracking"
            component={<CodeComponent />}
            buttonName="Watch Code Samples"
          />
        </div>
        <Button
          name="Click Here For More"
          link="https://www.geeksforgeeks.org/backtracking-introduction/"
        />
      </div>
    </React.Fragment>
  );
};

export default withStyles(styles)(BackTracking);
