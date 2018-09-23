import React from "react";
import { withStyles } from "@material-ui/core/styles";

import ButtonWithLink from "../../../../UI/Button/Button";
import FullScreenModal from "../../../../UI/FullScreenModal/FullScreenModal";
import Youtube from "../../../../UI/Youtube/Youtube";
import { Typography } from "@material-ui/core";

import Margin from "../../../../UI/Margin/Margin";

export const VideoComponent = props => {
  return (
    <div>
      <Typography
        variant="headline"
        style={{ textAlign: "center", marginTop: "20px" }}
        component="h3"
      >
        Understanding Time Complexity
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

const GreedyAlgorithms = props => {
  const { classes } = props;
  return (
    <React.Fragment>
      <div className={classes.root}>
        <Typography component="h3" variant="display1" color="primary">
          Greedy Algorithms
        </Typography>
        <Typography component="p" variant="body2">
          A greedy algorithm is an algorithmic paradigm that follows the problem
          solving heuristic of making the locally optimal choice at each stage
          with the intent of finding a global optimum.
        </Typography>
        <Margin />
        <Typography component="h4" variant="headline">
          What is a 'Greedy algorithm'?
        </Typography>
        <Typography component="p" variant="body2">
          A greedy algorithm, as the name suggests,{" "}
          <b>
            always makes the choice that seems to be the best at that moment
          </b>
          . This means that it makes a locally-optimal choice in the hope that
          this choice will lead to a globally-optimal solution.
        </Typography>
        <Margin />
        <Typography component="h4" variant="headline">
          How do you decide which choice is optimal?
        </Typography>
        <Typography component="p" variant="body2">
          Assume that you have an <b>objective function</b> that needs to be
          optimized (either maximized or minimized) at a given point. A Greedy
          algorithm makes greedy choices at each step to ensure that the
          objective function is optimized. The Greedy algorithm has only one
          shot to compute the optimal solution so that{" "}
          <b>it never goes back and reverses the decision</b>.
        </Typography>
        <Margin />

        <Typography component="p" variant="body2">
          Greedy algorithms have some advantages and disadvantages:
        </Typography>
        <ol>
          <li>
            <Typography component="p" variant="body1">
              It is quite easy to come up with a greedy algorithm (or even
              multiple greedy algorithms) for a problem.
            </Typography>
          </li>
          <li>
            <Typography component="p" variant="body1">
              Analyzing the run time for greedy algorithms will generally be
              much easier than for other techniques (like Divide and conquer).
              For the Divide and conquer technique, it is not clear whether the
              technique is fast or slow. This is because at each level of
              recursion the size of gets smaller and the number of sub-problems
              increases.
            </Typography>
          </li>
          <li>
            <Typography component="p" variant="body1">
              The difficult part is that for greedy algorithms you have to work
              much harder to understand correctness issues. Even with the
              correct algorithm, it is hard to prove why it is correct. Proving
              that a greedy algorithm is correct is more of an art than a
              science. It involves a lot of creativity.
            </Typography>
          </li>
        </ol>
        <Margin />

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
        <ButtonWithLink
          link="https://www.hackerearth.com/practice/algorithms/greedy/basics-of-greedy-algorithms/tutorial/"
          name="Click here for More"
        />
      </div>
    </React.Fragment>
  );
};

export default withStyles(styles)(GreedyAlgorithms);
