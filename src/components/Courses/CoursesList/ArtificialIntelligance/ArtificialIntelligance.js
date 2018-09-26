import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Youtube from "../../../UI/Youtube/Youtube";
import Margin from "../../../UI/Margin/Margin";
import ExpansionPanel from "../../../UI/ExpansionPanel/ExpansionPanel";
import ScrollToTop from "../../../UI/ScrollToTop/ScrollToTop";
import ApplicationsInAi from "./Topics/ApplicationsInAi";
import HistoryOfAi from "./Topics/HistoryOfAi";
import MoreTheoryOnAi from "./Topics/MoreTheoryOnAi";
import GettingStared from "./Topics/GettingStarted";

import Stepper from "../../../UI/Stepper/Stepper";
import MathsForML from "./Topics/MathsForML";
import Button from "../../../UI/Button/Button";

function getSteps() {
  return ["First Steps", "Month-1", "Month-2", "Month-3"];
}

// switch cases for path
function getStepContent(step) {
  switch (step) {
    case 0:
      return (
        <React.Fragment>
          <Typography component="p" variant="body2">
            If you are truly interested in learning AI and ML follow below steps
            regularly. And you can learn the basics of AI and ML with in 3
            months follow the resources given below regularly.
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
        <React.Fragment>
          <Typography component="h3" variant="headline" color="primary">
            Week 1 Linear Algebra
          </Typography>
          <Margin />
          <Button
            name="Linear Algebra Link Youtube"
            link="https://www.youtube.com/watch?v=kjBOesZCoqc&index=1&list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab"
          />
          <Button
            name="Linear Algebra Link MIT"
            link="https://ocw.mit.edu/courses/mathematics/18-06-linear-algebra-spring-2010/"
          />
          <Margin />
          <Typography component="h3" variant="headline" color="primary">
            Week 2 Calculus
          </Typography>
          <Margin />
          <Button
            name="Calculus Youtube Link"
            link="https://www.youtube.com/playlist?list=PLZHQObOWTQDMsr9K-rj53DwVRMYO3t5Yr"
          />
          <Typography component="h3" variant="headline" color="primary">
            Week 3 Probability
          </Typography>
          <Margin />
          <Button
            name="Probability EDX Couse Link"
            link="https://www.edx.org/course/introduction-probability-science-mitx-6-041x-2"
          />
          <Typography component="h3" variant="headline" color="primary">
            Week 4 Algorithms and Data Structures
          </Typography>
          <Margin />
          <Button
            name="EDX Course Link"
            link="https://www.edx.org/course/algorithm-design-analysis-pennx-sd3x"
          />
        </React.Fragment>
      );
    case 2:
      return (
        <React.Fragment>
          <Typography component="h3" variant="headline" color="primary">
            Week 1
          </Typography>
          <Typography component="p" variant="body2">
            Learn Python Basics
          </Typography>
          <Margin />
          <Button
            name="Python Data Science Link"
            link="https://www.youtube.com/watch?v=T5pRlIbr6gg&list=PL2-dafEMk2A6QKz1mrk1uIGfHkC1zZ6UU"
          />
          <Typography component="p" variant="body2">
            Math of Intelligence Video
          </Typography>
          <Button
            name="Video Link"
            link="https://www.youtube.com/watch?v=xRJCOz3AfYY&list=PL2-dafEMk2A7mu0bSksCGMJEmeddU_H4D"
          />
          <Typography component="p" variant="body2">
            Intro to TensorFlow
          </Typography>
          <Button
            name="Tensor Flow Youtube Link"
            link="https://www.youtube.com/watch?v=2FmcHiLCwTU&list=PL2-dafEMk2A7EEME489DsI468AB0wQsMV"
          />
          <Margin />
          <Typography component="h3" variant="headline" color="primary">
            Week 2
          </Typography>
          <Typography component="p" variant="body2">
            Intro To ML (Udacity) Course
          </Typography>
          <Margin />
          <Button
            name="Udacity ML Link"
            link="https://eu.udacity.com/course/intro-to-machine-learning--ud120"
          />
          <Typography component="h3" variant="headline" color="primary">
            Week 3 and 4
          </Typography>
          <Margin />
          <Typography component="p" variant="body2">
            ML project Ideas
          </Typography>
          <Button
            name="ML Github Link"
            link="https://github.com/NirantK/awesome-project-ideas"
          />
        </React.Fragment>
      );
    case 3:
      return (
        <React.Fragment>
          <Typography component="h3" variant="headline" color="primary">
            Week 1
          </Typography>
          <Margin />
          <Typography component="p" variant="body2">
            Intro To Deep Learning
          </Typography>
          <Button
            name="Deep Learning Youtube Link"
            link="https://www.youtube.com/watch?v=vOppzHpvTiQ&list=PL2-dafEMk2A7YdKv4XfKpfbTH5z6rEEj3"
          />
          <Typography component="h3" variant="headline" color="primary">
            Week 2
          </Typography>
          <Margin />
          <Typography component="p" variant="body2">
            Deep Learning bt Fast.AI
          </Typography>
          <Button name="Fast AI Link" link="http://course.fast.ai/" />

          <Typography component="h3" variant="headline" color="primary">
            Week 3 - 4
          </Typography>
          <Margin />
          <Typography component="p" variant="body2">
            Implement Github Projects
          </Typography>
          <Button
            name="Github Projects Link"
            link="https://github.com/llSourcell?tab=repositories"
          />
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

const ArtificialIntelligance = props => {
  const { classes } = props;
  return (
    <div style={{ marginTop: "100px" }}>
      <ScrollToTop />
      <Paper className={classes.root} elevation={0}>
        <Typography variant="display1" component="h3" color="primary">
          Artificial Intelligance and Machine Learning
        </Typography>
        <Margin />
        <Margin />
        <Typography variant="body1" component="h4">
          <b> IMPORTANT </b>- Machine Learning is a sub field of AI when we say
          Machine Learning it directly comes under Artificial Intelligance.
        </Typography>
        <Margin /> <Margin />
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
        <Margin />
        <Margin />
        <Typography component="h3" variant="headline">
          What is Machine Learning ?
        </Typography>
        <Margin />
        <Margin />
        <Typography component="p" variant="body2">
          Machine learning is a field of computer science that uses statistical
          techniques to give computer systems the ability to "learn" with data,
          without being explicitly programmed. The name machine learning was
          coined in 1959 by <b>Arthur Samuel</b>.
        </Typography>
        <Margin />
        <Margin />
        <Margin />
        <Typography component="p" variant="body2">
          Machine learning is a field of computer science that uses statistical
          techniques to give computer systems the ability to "learn" with data,
          without being explicitly programmed. The name machine learning was
          coined in 1959 by <b>Arthur Samuel</b>.
        </Typography>
        <Youtube id="HcqpanDadyQ" />
        <Margin />
        <Margin />
        <Typography component="h3" variant="headline">
          ML vs AI
        </Typography>
        <Margin />
        <Margin />
        <Youtube id="WSbgixdC9g8" />
        <Margin />
        <Margin />
        <div style={{ marginTop: "30px" }}>
          <ExpansionPanel
            heading={"Applications In AI and ML"}
            component={<ApplicationsInAi />}
          />

          <ExpansionPanel
            heading={"History Of AI and ML"}
            component={<HistoryOfAi />}
          />
          <ExpansionPanel
            heading={"More Theory On AI and ML-Links"}
            component={<MoreTheoryOnAi />}
          />
          <ExpansionPanel
            heading={"Getting Started With AI and ML "}
            component={<GettingStared />}
          />
          <ExpansionPanel
            heading={"Mathematics for ML and AI "}
            component={<MathsForML />}
          />
        </div>
        <div style={{ marginTop: "30px" }} />
        <Typography variant="headline" component="h3" color="primary">
          Path to Learn AI and ML
        </Typography>
        <Stepper path={getSteps} pathContent={getStepContent} />
      </Paper>
    </div>
  );
};

export default withStyles(styles)(ArtificialIntelligance);
