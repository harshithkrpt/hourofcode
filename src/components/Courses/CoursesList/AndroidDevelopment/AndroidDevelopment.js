import React, { Component } from "react";

import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Youtube from "../../../UI/Youtube/Youtube";
import Margin from "../../../UI/Margin/Margin";
import GettingStarted from "./Topics/GettingStarted";
import ReferenceCard from "../../../UI/ReferenceCard/ReferenceCard";
import InstallAndroidStudio from "./Topics/InstallingAndroidStudio";

import ExpansionPanel from "../../../UI/ExpansionPanel/ExpansionPanel";

// stepper
import Stepper from "../../../UI/Stepper/Stepper";
import ScrollToTop from "../../../UI/ScrollToTop/ScrollToTop";

// path
function getSteps() {
  return ["First Steps (Important)", "Resources", "Using Resources"];
}

// switch cases for path
function getStepContent(step) {
  switch (step) {
    case 0:
      return (
        <React.Fragment>
          <Typography component="p" variant="body2">
            If you are truly interested in learning Android Development follow
            below steps regularly. Before that in next steps you will find
            resources (Youtube videos) and free websites where you can learn
            "Android Development".
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
          <ScrollToTop />
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
            First
          </Typography>
          <Margin />
          <ReferenceCard
            link="https://www.youtube.com/watch?v=ZLNO2c7nqjw&t=3512s"
            title="Youtube Video understanding the stack"
          >
            <Typography component="p" variant="body2">
              This video will help you in understanding the basics of android
              development this is 1 hr course .
            </Typography>
          </ReferenceCard>
          <Margin />
          <Margin />
          <Typography component="h3" variant="headline">
            Second
          </Typography>
          <Margin />
          <ReferenceCard
            link="https://www.youtube.com/playlist?list=PL6gx4Cwl9DGBsvRxJJOzG4r4k_zLKrnxl"
            title="Youtube Playlist (thenewboston)"
          >
            <Typography component="p" variant="body2">
              This is a popular youtube playlist . I recommend you can start
              from here
            </Typography>
          </ReferenceCard>
          <Margin />
          <Margin />
          <Typography component="h3" variant="headline">
            Third
          </Typography>
          <Margin />
          <ReferenceCard
            link="https://www.youtube.com/playlist?list=PLshdtb5UWjSrOJfpFOE-u55s3SnY2EO9v"
            title="Android development tutorial series 2018"
          >
            <Typography component="p" variant="body2">
              These videos are recently uploaded so before watching this be
              comfortable with the basics
            </Typography>
          </ReferenceCard>
          <Margin />
          <Margin />
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
            Basics in Android Development
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
          <Typography variant="headline" component="h3" color="primary">
            Path to Learn Android Development
          </Typography>

          <Stepper path={getSteps} pathContent={getStepContent} />
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(AndroidDevelopment);
