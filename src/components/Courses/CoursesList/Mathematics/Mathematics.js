import React, { Component } from "react";
// import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
// import Typography from "@material-ui/core/Typography";
import Youtube from "../../../UI/Youtube/Youtube";

// import ExpansionPanel from "../../../UI/ExpansionPanel/ExpansionPanel";

// stepper
// import Stepper from "../../../UI/Stepper/Stepper";

// // path
// function getSteps() {
//   return ["Learn Analysis Of Algorithm", "Create an ad group", "Create an ad"];
// }

// // switch cases for path
// function getStepContent(step) {
//   switch (step) {
//     case 0:
//       return `For each ad campaign that you create, you can control how much
//                 you're willing to spend on clicks and conversions, which networks
//                 and geographical locations you want your ads to show on, and more.`;
//     case 1:
//       return "An ad group contains one or more ads which target a shared set of keywords.";
//     case 2:
//       return `Try out different ad text to see what brings in the most customers,
//                 and learn how to enhance your ads using features like ad extensions.
//                 If you run into any problems with your ads, find out how to tell if
//                 they're running and how to resolve approval issues.`;
//     default:
//       return "Unknown step";
//   }
// }

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

class Algorithms extends Component {
  state = {
    youtubeIds: ["6hfOvs8pY1k"]
  };

  render() {
    const { classes } = this.props;

    return (
      <div style={{ marginTop: "100px" }}>
        <Paper className={classes.root} elevation={0}>
          <Youtube id={this.state.youtubeIds[0]} />
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(Algorithms);
