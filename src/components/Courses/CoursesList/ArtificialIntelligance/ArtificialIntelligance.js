import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Youtube from "../../../UI/Youtube/Youtube";
import Margin from "../../../UI/Margin/Margin";
import ExpansionPanel from "../../../UI/ExpansionPanel/ExpansionPanel";

import ApplicationsInAi from "./Topics/ApplicationsInAi";
import HistoryOfAi from "./Topics/HistoryOfAi";
import MoreTheoryOnAi from "./Topics/MoreTheoryOnAi";
import GettingStared from "./Topics/GettingStarted";

import Stepper from "../../../UI/Stepper/Stepper";

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

const ArtificialIntelligance = props => {
  const { classes } = props;
  return (
    <div style={{ marginTop: "100px" }}>
      <Paper className={classes.root} elevation={0}>
        <Typography variant="display1" component="h3" color="primary">
          Artificial Intelligance
        </Typography>
        <Margin />
        <Margin />
        <Typography variant="body2" component="p">
          Since the invention of computers or machines, their capability to
          perform various tasks went on growing exponentially. Humans have
          developed the power of computer systems in terms of their diverse
          working domains, their increasing speed, and reducing size with
          respect to time.
        </Typography>
        <Margin />
        <Typography component="p" variant="body2">
          A branch of Computer Science named Artificial Intelligence pursues
          creating the computers or machines as intelligent as human beings.
        </Typography>
        <Margin />
        <Margin />
        <Typography component="h3" variant="headline">
          What is Artificial Intelligance?
        </Typography>
        <Margin />
        <Typography component="p" variant="body2">
          According to the father of Artificial Intelligence, John McCarthy, it
          is{" "}
          <b>
            {" "}
            “The science and engineering of making intelligent machines,
            especially intelligent computer programs”.
          </b>
        </Typography>
        <Margin />
        <Margin />
        <Youtube id="kWmX3pd1f10" />
        <Margin />
        <Margin />
        <Typography component="p" variant="body2">
          Artificial Intelligence is a way of making a computer, a
          computer-controlled robot, or a software think intelligently, in the
          similar manner the intelligent humans think.
        </Typography>
        <Margin />
        <Typography component="p" variant="body2">
          AI is accomplished by studying how human brain thinks, and how humans
          learn, decide, and work while trying to solve a problem, and then
          using the outcomes of this study as a basis of developing intelligent
          software and systems.
        </Typography>

        <div style={{ marginTop: "30px" }}>
          <ExpansionPanel
            heading={"Applications In AI"}
            component={<ApplicationsInAi />}
          />

          <ExpansionPanel
            heading={"History Of AI"}
            component={<HistoryOfAi />}
          />
          <ExpansionPanel
            heading={"More Theory On AI -Links"}
            component={<MoreTheoryOnAi />}
          />
          <ExpansionPanel
            heading={"Getting Started With AI -IMP-"}
            component={<GettingStared />}
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
};

export default withStyles(styles)(ArtificialIntelligance);
