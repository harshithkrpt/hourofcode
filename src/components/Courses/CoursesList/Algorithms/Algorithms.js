import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Youtube from "../../../UI/Youtube/Youtube";
import "./Algorithm.css";
import ExpansionPanel from "../../../UI/ExpansionPanel/ExpansionPanel";

// topics
import AnalysisOfAlgoritm from "./Topics/AnalysisOfAlgorithm";
import SearchingAndSorting from "./Topics/SearchingAndSorting";
import GreedyAlgorithms from "./Topics/GreedyAlgorithms";
import DyanmicProgramming from "./Topics/DynamicProgramming";
import PatternSearching from "./Topics/PatternSearching";

import BackTracking from "./Topics/BackTracking";
import DivideAndConquer from "./Topics/DivideAndConquer";
import GeometricalAlgorithms from "./Topics/GeometricAlgorithms";
import MathematicalAlgorithms from "./Topics/MathematicalAlgorithms";
import BitAlgorithms from "./Topics/BitAlgorithms";
import GraphAlgorithms from "./Topics/GraphAlgorithms";
import RandomizedAlgorithms from "./Topics/RandomizedAlgorithms";
import BranchAndBound from "./Topics/BranchAndBound";

// stepper
import Stepper from "../../../UI/Stepper/Stepper";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  }
});

// path
function getSteps() {
  return ["Learn Analysis Of Algorithm", "Create an ad group", "Create an ad"];
}

// switch cases
function getStepContent(step) {
  switch (step) {
    case 0:
      return `For each ad campaign that you create, you can control how much
                you're willing to spend on clicks and conversions, which networks
                and geographical locations you want your ads to show on, and more.`;
    case 1:
      return "An ad group contains one or more ads which target a shared set of keywords.";
    case 2:
      return `Try out different ad text to see what brings in the most customers,
                and learn how to enhance your ads using features like ad extensions.
                If you run into any problems with your ads, find out how to tell if
                they're running and how to resolve approval issues.`;
    default:
      return "Unknown step";
  }
}

class Algorithms extends Component {
  state = {
    youtubeIds: ["6hfOvs8pY1k"]
  };

  render() {
    const { classes } = this.props;

    return (
      <div style={{ marginTop: "100px" }}>
        <Paper className={classes.root} elevation={0}>
          <Typography variant="headline" component="h3" color="primary">
            Algorithms
          </Typography>
          <Typography style={{ marginTop: "15px", fontSize: "1rem" }}>
            In mathematics and computer science, an algorithm is an unambiguous
            specification of how to solve a class of problems. Algorithms can
            perform calculation, data processing and automated reasoning tasks
          </Typography>

          <Youtube id={this.state.youtubeIds[0]} />
          <Typography
            variant="headline"
            style={{ marginTop: "50px" }}
            component="h3"
            color="primary"
          >
            Topics in Algorithm
          </Typography>
          <div style={{ marginTop: "30px" }}>
            <ExpansionPanel
              heading={"Analysis of Algorithm"}
              component={<AnalysisOfAlgoritm />}
            />
            <ExpansionPanel
              heading={"Searching And Sorting"}
              component={<SearchingAndSorting />}
            />
            <ExpansionPanel
              heading="Greedy Algorithms"
              component={<GreedyAlgorithms />}
            />
            <ExpansionPanel
              heading="Dynamic Programming"
              component={<DyanmicProgramming />}
            />
            <ExpansionPanel
              heading="Pattern Searching"
              component={<PatternSearching />}
            />
            <ExpansionPanel
              heading="Back Tracking"
              component={<BackTracking />}
            />
            <ExpansionPanel
              heading="Divide And Conquer"
              component={<DivideAndConquer />}
            />
            <ExpansionPanel
              heading="Geometrical Algorithms"
              component={<GeometricalAlgorithms />}
            />
            <ExpansionPanel
              heading="Mathematical Algorithms"
              component={<MathematicalAlgorithms />}
            />
            <ExpansionPanel
              heading="Bit Algorithms"
              component={<BitAlgorithms />}
            />
            <ExpansionPanel
              heading="Graph Algorithms"
              component={<GraphAlgorithms />}
            />
            <ExpansionPanel
              heading="Randomized Algorithms"
              component={<RandomizedAlgorithms />}
            />
            <ExpansionPanel
              heading="Branch And Bound"
              component={<BranchAndBound />}
            />
          </div>
          <div style={{ marginTop: "30px" }} />
          <Typography variant="headline" component="h3">
            Path to Learn Algorithms
          </Typography>

          <Stepper path={getSteps} pathContent={getStepContent} />
        </Paper>
      </div>
    );
  }
}

Algorithms.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Algorithms);
