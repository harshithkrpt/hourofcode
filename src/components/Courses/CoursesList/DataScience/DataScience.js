import React, { Component } from "react";

import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Youtube from "../../../UI/Youtube/Youtube";
import Margin from "../../../UI/Margin/Margin";

import ExpansionPanel from "../../../UI/ExpansionPanel/ExpansionPanel";

import Curriculum from "./Topics/Curriculum";
import Motivation from "./Topics/Motivation";
import Prerequisites from "./Topics/Prerequisites";
import References from "./Topics/References";

// stepper
import Stepper from "../../../UI/Stepper/Stepper";
import ScrollToTop from "../../../UI/ScrollToTop/ScrollToTop";
// path
function getSteps() {
  return ["First Steps", "From Reference's"];
}

// switch cases for path
function getStepContent(step) {
  switch (step) {
    case 0:
      return (
        <React.Fragment>
          <ScrollToTop />
          <Typography component="p" variant="body2">
            If you are truly interested in learning Data Science follow below
            steps regularly. And you can learn the basics of Data Science with
            in 3 months follow the resources given below regularly.
          </Typography>
          <div style={{ marginTop: "20px" }} />
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
          <Margin />
        </React.Fragment>
      );
    case 1:
      return (
        <Typography component="p" variant="body2">
          Learn The Content form the resources tab above and keep motivated and
          learn data science.
        </Typography>
      );

    default:
      return "Unknown step";
  }
}

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

class DataScience extends Component {
  state = {
    youtubeIds: ["6hfOvs8pY1k"]
  };

  render() {
    const { classes } = this.props;

    return (
      <div style={{ marginTop: "100px" }}>
        <Paper className={classes.root} elevation={2}>
          <Typography variant="headline" component="h3" color="primary">
            Data Science
          </Typography>
          <Margin />
          <Margin />
          <Typography variant="body2" component="p">
            Data science is an interdisciplinary field that uses scientific
            methods, processes, algorithms and systems to extract knowledge and
            insights from data in various forms, both structured and
            unstructured, similar to data mining.
          </Typography>
          <Margin />
          <Typography variant="headline" component="h3" color="primary">
            What is Data Science ?
          </Typography>
          <Youtube id="z1kPKBdYks4" />

          <div style={{ marginTop: "100px" }}>
            <ExpansionPanel heading={"Curriculum"} component={<Curriculum />} />

            <ExpansionPanel heading={"Motivation"} component={<Motivation />} />
            <ExpansionPanel
              heading={"Prerequisites"}
              component={<Prerequisites />}
            />
            <ExpansionPanel heading={"References"} component={<References />} />
          </div>
          <div style={{ marginTop: "30px" }} />
          <Typography variant="headline" component="h3" color="primary">
            Path to Learn Block Chain
          </Typography>

          <Stepper path={getSteps} pathContent={getStepContent} />
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(DataScience);
