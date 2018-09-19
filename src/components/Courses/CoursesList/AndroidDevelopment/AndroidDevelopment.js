import React, { Component } from "react";

import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Youtube from "../../../UI/Youtube/Youtube";
import Margin from "../../../UI/Margin/Margin";
import GettingStarted from "./Topics/GettingStarted";

import InstallAndroidStudio from "./Topics/InstallingAndroidStudio";

import ExpansionPanel from "../../../UI/ExpansionPanel/ExpansionPanel";

// stepper
import Stepper from "../../../UI/Stepper/Stepper";

// path
function getSteps() {
  return ["Learn Analysis Of Algorithm", "Create an ad group", "Create an ad"];
}

// switch cases for path
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

class AndroidDevelopment extends Component {
  state = {
    youtubeIds: ["VkGTiR8ZMVA"]
  };

  render() {
    const { classes } = this.props;

    return (
      <div style={{ marginTop: "100px" }}>
        <Paper className={classes.root} elevation={0}>
          <Typography variant="headline" component="h3" color="primary">
            Android Development
          </Typography>
          <Margin />
          <Margin />
          <Typography variant="body2" component="p">
            In the last 10 years, Android has made a name for itself, not only
            with its candy-themed platform updates, but also with its
            widespread, and unexpected, success. In its lifetime, the
            open-source mobile operating system has grown to include 1.4 billion
            active users and 80% of smartphones today run Android software. Over
            1 billion Android phones were sold in 2014 alone.
          </Typography>
          <Margin />
          <Typography component="p" variant="body2">
            So its a good choice if you want to build or learn building Android
            applications
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
              heading={"Getting Started"}
              component={<GettingStarted />}
            />

            <ExpansionPanel
              heading={"Installing Android Studio"}
              component={<InstallAndroidStudio />}
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

export default withStyles(styles)(AndroidDevelopment);
