import React from "react";
import { withStyles } from "@material-ui/core/styles";

import { Divider } from "@material-ui/core";

import FullScreenModal from "../../../../UI/FullScreenModal/FullScreenModal";
import Youtube from "../../../../UI/Youtube/Youtube";
import { Typography } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import Table from "../../../../UI/Table/Table";

import ButtonWithLink from "../../../../UI/Button/Button";
// import Chart from "../../../../UI/Chart/Chart";

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
        Unders
      </Typography>
    </div>
  );
};

let id = 0;
function createData(name, ds, tcb, tca, tcw, scw) {
  id += 1;
  return { id, name, ds, tcb, tca, tcw, scw };
}

const rows = [
  createData(
    "Quick Sort",
    "Array",
    "O(nlog(n))",
    "O(nlog(n))",
    "O(n^2)",
    "O(n)"
  ),
  createData(
    "Merge Sort",
    "Array",
    "O(nlog(n))",
    "O(nlog(n))",
    "O(nlog(n))",
    "O(n)"
  ),
  createData(
    "Heap Sort",
    "Array",
    "O(nlog(n))",
    "O(nlog(n))",
    "O(nlog(n))",
    "O(1)"
  ),
  createData(
    "Smooth Sort",
    "Array",
    "O(n)",
    "O(nlog(n))",
    "O(nlog(n))",
    "O(1)"
  ),
  createData("Bubble Sort", "Array", "O(n)", "O(n^2)", "O(n^2)", "O(1)"),
  createData("Insertion Sort", "Array", "O(n)", "O(n^2)", "O(n^2)", "O(1)"),
  createData("Selection Sort", "Array", "O(n^2)", "O(n^2)", "O(n^2)", "O(1)")
];

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  }
});

const AnalysisOfAlgrithm = props => {
  const { classes } = props;
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <React.Fragment>
        <Paper className={classes.root} elevation={1}>
          <Typography variant="display1" component="h3" color="primary">
            Asymptotic Analysis
          </Typography>
          <Typography
            component="p"
            variant="body2"
            style={{ marginTop: "10px" }}
          >
            Asymptotic analysis is input bound i.e., if there's no input to the
            algorithm, it is concluded to work in a constant time. Other than
            the "input" all other factors are considered constant. Asymptotic
            analysis refers to computing the running time of any operation in
            mathematical units of computation.
          </Typography>
          <Typography
            variant="headline"
            component="h3"
            style={{ marginTop: "15px" }}
          >
            Worst, Average and Best Cases
          </Typography>
          <Typography
            component="p"
            variant="body2"
            style={{ marginTop: "15px" }}
          >
            We can have three cases to analyze an algorithm:
          </Typography>
          <ol>
            <li>
              <Typography component="p" variant="body2">
                Worst Case
              </Typography>
            </li>
            <li>
              <Typography component="p" variant="body2">
                Average Case
              </Typography>
            </li>
            <li>
              <Typography component="p" variant="body2">
                Best Case
              </Typography>
            </li>
          </ol>
          <Typography component="h3" variant="headline">
            Worst Case Analysis
          </Typography>
          <Typography component="p" variant="body2">
            In the worst case analysis, we calculate upper bound on running time
            of an algorithm. We must know the case that causes maximum number of
            operations to be executed. For Linear Search, the worst case happens
            when the element to be searched (x in the above code) is not present
            in the array. When x is not present, the search() functions compares
            it with all the elements of arr[] one by one. Therefore, the worst
            case time complexity of linear search would be Θ(n).
          </Typography>
          <Divider style={{ marginTop: "10px", marginBottom: "10px" }} />
          <Typography component="h3" variant="headline">
            Average Case Analysis
          </Typography>
          <Typography component="p" variant="body2">
            In average case analysis, we take all possible inputs and calculate
            computing time for all of the inputs. Sum all the calculated values
            and divide the sum by total number of inputs. We must know (or
            predict) distribution of cases. For the linear search problem, let
            us assume that all cases are uniformly distributed (including the
            case of x not being present in array). So we sum all the cases and
            divide the sum by (n+1). Following is the value of average case time
            complexity.
          </Typography>
          <Divider style={{ marginTop: "10px", marginBottom: "10px" }} />
          <Typography component="h3" variant="headline">
            Best Case Analysis
          </Typography>
          <Typography component="p" variant="body2">
            In the best case analysis, we calculate lower bound on running time
            of an algorithm. We must know the case that causes minimum number of
            operations to be executed. In the linear search problem, the best
            case occurs when x is present at the first location. The number of
            operations in the best case is constant (not dependent on n). So
            time complexity in the best case would be Θ(1)
          </Typography>
          <Divider style={{ margin: "10px 0px 10px 0px" }} />
          <Typography
            component="h3"
            variant="display1"
            style={{ color: "purple" }}
          >
            Asymptotic Notations
          </Typography>
          <Typography
            component="p"
            variant="body2"
            style={{ marginTop: "15px" }}
          >
            We can have three types of notations in an algorithm:
          </Typography>
          <ol>
            <li>
              <Typography component="p" variant="body2">
                Θ Notation (Theta)
              </Typography>
            </li>
            <li>
              <Typography component="p" variant="body2">
                Big O Notation
              </Typography>
            </li>
            <li>
              <Typography component="p" variant="body2">
                Ω Notation
              </Typography>
            </li>
          </ol>
          <Typography component="h3" variant="headline">
            Θ Notation (Theta)
          </Typography>
          <Typography component="p" variant="body2">
            The theta notation bounds a functions from above and below, so it
            defines exact asymptotic behavior. A simple way to get Theta
            notation of an expression is to drop low order terms and ignore
            leading constants. For example, consider the following expression.
          </Typography>
          <Typography component="p" variant="body2">
            3n
            <sup>3</sup> + 6n
            <sup>2</sup> + 6000 = Θ(n
            <sup>3</sup>)
          </Typography>
          <Typography component="p" variant="body2">
            if f(n) is theta of g(n), then the value f(n) is always between
            c1*g(n) and c2*g(n) for large values of n (n >= n0). The definition
            of theta also requires that f(n) must be non-negative for values of
            n greater than n0.
          </Typography>

          <Divider style={{ margin: "10px 0px" }} />
          <Typography component="h3" variant="headline">
            Big O Notation
          </Typography>
          <Typography component="p" variant="body2">
            The Big O notation defines an upper bound of an algorithm, it bounds
            a function only from above. For example, consider the case of
            Insertion Sort. It takes linear time in best case and quadratic time
            in worst case. We can safely say that the time complexity of
            Insertion sort is O(n
            <sup>2</sup>
            ). Note that O(n
            <sup>2</sup>) also covers linear time.
          </Typography>

          <Typography component="p" variant="body2">
            The Big O notation is useful when we only have upper bound on time
            complexity of an algorithm. Many times we easily find an upper bound
            by simply looking at the algorithm.
          </Typography>
          <Divider style={{ margin: "10px 0px" }} />
          <Typography component="h3" variant="headline">
            Ω Notation
          </Typography>
          <Typography component="p" variant="body2">
            Just as Big O notation provides an asymptotic upper bound on a
            function, Ω notation provides an asymptotic lower bound.
          </Typography>

          <Typography component="p" variant="body2">
            The Big O notation is useful when we only have upper bound on time
            complexity of an algorithm. Many times we easily find an upper bound
            by simply looking at the algorithm. lower bound. Ω Notation can be
            useful when we have lower bound on time complexity of an
            algorithm.The best case performance of an algorithm is generally not
            useful, the Omega notation is the least used notation among all
            three.
          </Typography>
          <Typography component="p" variant="body2">
            For any two functions f(n) and g(n), we have f(n) = Θ(g(n)) if and
            only if f(n) = O(g(n)) and f(n) = Ω(g(n)).
          </Typography>
          {window.innerWidth > 1000 ? <Table rows={rows} /> : null}

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
            link="https://www.tutorialspoint.com/design_and_analysis_of_algorithms/analysis_of_algorithms.htm"
            name="For More Click Here"
          />
        </Paper>
      </React.Fragment>
    </div>
  );
};

export default withStyles(styles)(AnalysisOfAlgrithm);
