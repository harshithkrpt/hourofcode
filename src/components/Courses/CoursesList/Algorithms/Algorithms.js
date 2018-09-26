import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Youtube from "../../../UI/Youtube/Youtube";
import "./Algorithm.css";
import ExpansionPanel from "../../../UI/ExpansionPanel/ExpansionPanel";
import Margin from "../../../UI/Margin/Margin";
import ReferenceCard from "../../../UI/ReferenceCard/ReferenceCard";

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
import ScrollToTop from "../../../UI/ScrollToTop/ScrollToTop";

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
  return ["First Steps", "Resources", "Using Resources"];
}

// switch cases
function getStepContent(step) {
  switch (step) {
    case 0:
      return (
        <React.Fragment>
          <ScrollToTop />
          <Typography component="p" variant="body2">
            If you are truly interested in learning Algorithms follow below
            steps regularly. Before that in next steps you will find resources
            (Youtube videos) and free websites where you can learn "Algirithms".
          </Typography>
          <Margin />
          <Typography component="h3" variant="headline">
            Steps
          </Typography>
          <Typography component="p" variant="body2">
            1. Do 1-2 Hrs of regular Coding
          </Typography>
          <Typography component="p" variant="body2">
            2. Watch youtube videos
          </Typography>
          <Typography component="p" variant="body2">
            3. Code Along while watching those videos
          </Typography>
          <Typography component="p" variant="body2">
            4. Watch videos with 1.5x-2x speed if you are comfortable
          </Typography>
          <Typography component="p" variant="body2">
            4. Repeat this daily
          </Typography>
        </React.Fragment>
      );
    case 1:
      return (
        <React.Fragment>
          <Typography component="p" variant="body2">
            Below you will find links to all important youtube playlists , free
            courses so only focus on one playlist or one course until you
            finished . If you didn't understand any concept then try from other
            resources feel free to watch them multiple times .
          </Typography>
          <Margin />
          <Typography component="h3" variant="headline">
            Resources
          </Typography>
          <Margin />
          <Margin />
          <Typography component="h3" variant="headline">
            Using C/C++ Youtube Course
          </Typography>
          <Margin />
          <ReferenceCard
            link="https://www.youtube.com/playlist?list=PL2_aWCzGMAwI3W_JlcBbtYTwiQSsOTa6P"
            title="Youtube PlayList (thecodeschool)"
          >
            <Typography component="p" variant="body2">
              This playlist covers all the important algorithms and
              datastructures implemented using c/c++
            </Typography>
          </ReferenceCard>
          <Margin />
          <Margin />
          <Typography component="h3" variant="headline">
            MIT Courses (theory)
          </Typography>
          <Margin />
          <ReferenceCard
            link="https://www.youtube.com/playlist?list=PLUl4u3cNGP61Oq3tWYp6V_F-5jb5L2iHb"
            title="Youtube Playlist (from MIT)"
          >
            <Typography component="p" variant="body2">
              This is a popular youtube playlist . If you are intrested in
              understanding the inner concepts of algorithms theoretically then
              watch this playlist
            </Typography>
          </ReferenceCard>
          <Margin />
          <Margin />
          <Typography component="h3" variant="headline">
            Using Python (From Google)
          </Typography>
          <Margin />
          <ReferenceCard
            link="https://in.udacity.com/course/data-structures-and-algorithms-in-python--ud513"
            title="Data Structures & Algorithms in Python"
          >
            <Typography component="p" variant="body2">
              This is a free course from google . I highly recommend this but
              this course is in python .
            </Typography>
          </ReferenceCard>
          <Margin />
          <Margin />
          <Typography component="h3" variant="headline">
            From EDX
          </Typography>
          <Margin />
          <ReferenceCard
            link=" https://www.edx.org/course/algorithm-design-analysis-pennx-sd3x"
            title="Data Structures & Algorithms in Python"
          >
            <Typography component="p" variant="body2">
              This is a free course from Edx.com . I highly recommend this but
              this course is in python .
            </Typography>
          </ReferenceCard>
        </React.Fragment>
      );
    case 2:
      return (
        <React.Fragment>
          <Margin />
          <Typography component="p" variant="body2">
            As Mentioned earlier you should code along with them
          </Typography>
          <Typography component="p" variant="body2">
            Finally Practice Practice ............
          </Typography>
        </React.Fragment>
      );
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
