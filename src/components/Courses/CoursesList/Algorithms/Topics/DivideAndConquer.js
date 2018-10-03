import React from "react";
import { withStyles } from "@material-ui/core/styles";

import FullScreenModal from "../../../../UI/FullScreenModal/FullScreenModal";
import Youtube from "../../../../UI/Youtube/Youtube";
import { Typography, Divider } from "@material-ui/core";

import Button from "../../../../UI/Button/Button";
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
} from "./CodeSamples/DivideAndConquerCS";

export const VideoComponent = props => {
  return (
    <div>
      <Typography
        variant="headline"
        style={{ textAlign: "center", marginTop: "20px" }}
        component="h3"
      >
        Divide And Conquer Tutorials
      </Typography>
      <Margin />
      <Typography
        style={{ marginLeft: "30px" }}
        component="h3"
        variant="subheading"
      >
        Introduction
      </Typography>
      <Youtube id="2Rr2tW9zvRg" />

      <Margin />
      <Typography
        style={{ marginLeft: "30px" }}
        component="h3"
        variant="subheading"
      >
        Strassens Matrix Multiplication
      </Typography>
      <Youtube id="0oJyNmEbS4w" />

      <Margin />
      <Typography
        style={{ marginLeft: "30px" }}
        component="h3"
        variant="subheading"
      >
        Quick Sort Algorithm
      </Typography>
      <Youtube id="7h1s2SojIRw" />

      <Margin />
      <Typography
        style={{ marginLeft: "30px" }}
        component="h3"
        variant="subheading"
      >
        Merge Sort Algorithm
      </Typography>
      <Youtube id="mB5HXBb_HY8" />
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
        Divide and Conquer Code
      </Typography>
      <Margin />
      <Typography
        component="h3"
        variant="subheading"
        color="primary"
        style={{ marginLeft: "20px" }}
      >
        Merging of Two Sorted Arrays
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
        Merge Sort Algorithm
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
        Quick Sort Algorithm
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

const DivideAndConquer = props => {
  const { classes } = props;
  return (
    <React.Fragment>
      <div className={classes.root}>
        <Typography component="h3" variant="display1" color="primary">
          Divide And Conquer
        </Typography>
        <Margin />
        <Typography component="p" variant="body2">
          Like Greedy and Dynamic Programming, Divide and Conquer is an
          algorithmic paradigm. A typical Divide and Conquer algorithm solves a
          problem using following three steps.
        </Typography>
        <Margin />
        <Typography component="p" variant="body2">
          A typical Divide and Conquer algorithm solves a problem using
          following three steps.
        </Typography>
        <Margin />
        <ol>
          <li>
            <Typography component="p" variant="body2">
              <b>Divide</b>: Break the given problem into subproblems of same
              type.
            </Typography>
          </li>
          <li>
            <Typography component="p" variant="body2">
              <b>Conquer</b>: Recursively solve these subproblems
            </Typography>
          </li>
          <li>
            <Typography component="p" variant="body2">
              <b>Combine</b>: Appropriately combine the answers
            </Typography>
          </li>
        </ol>
        <Margin />
        <Margin />
        <Margin />
        <Typography component="p" variant="body2">
          Following are some standard algorithms that are Divide and Conquer
          algorithms.
        </Typography>
        <Margin />
        <ol>
          <li>
            <Typography component="p" variant="body2">
              <b>Binary Search</b> is a searching algorithm. In each step, the
              algorithm compares the input element x with the value of the
              middle element in array. If the values match, return the index of
              middle. Otherwise, if x is less than the middle element, then the
              algorithm recurs for left side of middle element, else recurs for
              right side of middle element.
            </Typography>
          </li>
          <li>
            <Typography component="p" variant="body2">
              <b>Quicksort</b> is a sorting algorithm. The algorithm picks a
              pivot element, rearranges the array elements in such a way that
              all elements smaller than the picked pivot element move to left
              side of pivot, and all greater elements move to right side.
              Finally, the algorithm recursively sorts the subarrays on left and
              right of pivot element.
            </Typography>
          </li>
          <li>
            <Typography component="p" variant="body2">
              <b>Merge Sort</b> is also a sorting algorithm. The algorithm
              divides the array in two halves, recursively sorts them and
              finally merges the two sorted halves.
            </Typography>
          </li>
          <li>
            <Typography component="p" variant="body2">
              <b>Closest Pair of Points</b> the problem is to find the closest
              pair of points in a set of points in x-y plane. The problem can be
              solved in O(n^2) time by calculating distances of every pair of
              points and comparing the distances to find the minimum. The Divide
              and Conquer algorithm solves the problem in O(nLogn) time.
            </Typography>
          </li>
        </ol>
        <Margin />
        <Margin />
        <Youtube id="2Rr2tW9zvRg" />
        <Margin />
        <Typography component="h3" variant="headline">
          Divide and Conquer (D & C) vs Dynamic Programming (DP)
        </Typography>
        <Typography component="p" variant="body2">
          Both paradigms (D & C and DP) divide the given problem into
          subproblems and solve subproblems. How to choose one of them for a
          given problem? Divide and Conquer should be used when same subproblems
          are not evaluated many times. Otherwise Dynamic Programming or
          Memoization should be used. For example, Binary Search is a Divide and
          Conquer algorithm, we never evaluate the same subproblems again. On
          the other hand, for calculating nth Fibonacci number, Dynamic
          Programming should be preferred (See this for details).
        </Typography>
        <div style={{ display: "flex", marginTop: "20px" }}>
          <FullScreenModal
            heading="Divide And Conquer"
            component={<VideoComponent />}
            buttonName="Watch Video Samples"
          />
          <FullScreenModal
            heading="Divide and Conquer"
            component={<CodeComponent />}
            buttonName="Watch Code Samples"
          />
        </div>
        <Button
          name="Click Here For More"
          link="https://www.geeksforgeeks.org/divide-and-conquer/"
        />
      </div>
    </React.Fragment>
  );
};

export default withStyles(styles)(DivideAndConquer);
