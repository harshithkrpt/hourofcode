import React from "react";
import { withStyles } from "@material-ui/core/styles";

import FullScreenModal from "../../../../UI/FullScreenModal/FullScreenModal";
import Youtube from "../../../../UI/Youtube/Youtube";
import { Typography, Divider } from "@material-ui/core";

import Margin from "../../../../UI/Margin/Margin";
import OutputCard from "../../../../UI/OutPutCard/OutPutCard";
import { CodeData } from "../../../../../Code/CodeData/CodeData";

import {
  Example1,
  Example1Output,
  Example2,
  Example2Output,
  Example3,
  Example3Output
} from "./CodeSamples/DynamicProgrammingCS";

export const VideoComponent = props => {
  return (
    <div>
      <Typography
        variant="headline"
        style={{ textAlign: "center", marginTop: "20px" }}
        component="h3"
      >
        Dynamic Programming
      </Typography>
      <Margin />
      <Typography
        style={{ marginLeft: "30px" }}
        component="h3"
        variant="subheading"
      >
        Introduction
      </Typography>
      <Youtube id="vYquumk4nWwzhu605v9KOI" />

      <Margin />
      <Typography
        style={{ marginLeft: "30px" }}
        component="h3"
        variant="subheading"
      >
        Principles of Dynamic Programming
      </Typography>
      <Youtube id="5dRGRueKU3M" />

      <Margin />
      <Typography
        style={{ marginLeft: "30px" }}
        component="h3"
        variant="subheading"
      >
        Matrix Chain Multiplication
      </Typography>
      <Youtube id="prx1psByp7U" />

      <Margin />
      <Typography
        style={{ marginLeft: "30px" }}
        component="h3"
        variant="subheading"
      >
        Fibonacci using Dynamic Programming
      </Typography>
      <Youtube id="OQ5jsbhAv_M" />
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
        Dynamic Programming Code
      </Typography>
      <Margin />
      <Typography
        component="h3"
        variant="subheading"
        color="primary"
        style={{ marginLeft: "20px" }}
      >
        Matrix Multiplication using Dynamic Programming
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
        Subset Sum Problem
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
        0-1 Knapsack Problem
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
        <Typography component="h3" color="primary" variant="display1">
          Dynamic Programming
        </Typography>
        <Margin />
        <Typography component="p" variant="body2">
          <b>Dynamic programming </b>
          (usually referred to as DP ) is a very powerful technique to solve a
          particular class of problems. It demands very elegant formulation of
          the approach and simple thinking and the coding part is very easy. The
          idea is very simple, If you have solved a problem with the given
          input, then save the result for future reference, so as to avoid
          solving the same problem again.. shortly 'Remember your Past') . If
          the given problem can be broken up in to smaller sub-problems and
          these smaller subproblems are in turn divided in to still-smaller
          ones, and in this process, if you observe some over-lapping
          subproblems, then its a big hint for DP. Also, the optimal solutions
          to the subproblems contribute to the optimal solution of the given
          problem ( referred to as the Optimal Substructure Property ).
        </Typography>
        <Margin />
        <Margin />
        <Typography component="p" variant="body2">
          There are two ways of doing this
        </Typography>
        <Margin />
        <Typography component="p" variant="body2">
          <b>1. Top-Down :</b> Start solving the given problem by breaking it
          down. If you see that the problem has been solved already, then just
          return the saved answer. If it has not been solved, solve it and save
          the answer. This is usually easy to think of and very intuitive. This
          is referred to as <b>Memoization.</b>
        </Typography>
        <Margin />
        <Typography component="p" variant="body2">
          <b>2. Bottom-Up :</b> Analyze the problem and see the order in which
          the sub-problems are solved and start solving from the trivial
          subproblem, up towards the given problem. In this process, it is
          guaranteed that the subproblems are solved before solving the problem.
          This is referred to as <b>Tabulation</b>
        </Typography>
        <Margin />
        <Margin />
        <Typography component="h3" variant="headline">
          Watch This To Understand Dynamic Programming
        </Typography>
        <Margin />
        <Youtube id="vYquumk4nWw" />
        <div style={{ display: "flex", marginTop: "20px" }}>
          <FullScreenModal
            heading="Dynamic Programming"
            component={<VideoComponent />}
            buttonName="Watch Video Samples"
          />
          <FullScreenModal
            heading="Dynamic Programming"
            component={<CodeComponent />}
            buttonName="Watch Code Samples"
          />
        </div>
      </div>
    </React.Fragment>
  );
};
export default withStyles(styles)(BranchAndBound);
