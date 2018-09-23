import React from "react";
import { Typography } from "@material-ui/core";
import Margin from "../../../../UI/Margin/Margin";

import ExpansionPanel from "../../../../UI/ExpansionPanel/ExpansionPanel";

export default props => {
  return (
    <div>
      <Typography component="h3" variant="headline">
        History Of AI and ML
      </Typography>
      <Margin />
      <Typography component="p" variant="subheading">
        The history of Artificial Intelligence (AI) began in antiquity, with
        myths, stories and rumors of artificial beings endowed with intelligence
        or consciousness by master craftsmen; as Pamela McCorduck writes, AI
        began with "an ancient wish to forge the gods."
      </Typography>
      <Margin />
      <Margin />
      <Margin />
      <Margin />
      <ExpansionPanel
        heading="1923"
        component={
          <React.Fragment>
            <Typography component="p" variant="body2">
              Karel Čapek play named “Rossum's Universal Robots” (RUR) opens in
              London, first use of the word "robot" in English.
            </Typography>
          </React.Fragment>
        }
      />
      <ExpansionPanel
        heading="1943"
        component={
          <React.Fragment>
            <Typography component="p" variant="body2">
              Foundations for neural networks laid.
            </Typography>
          </React.Fragment>
        }
      />
      <ExpansionPanel
        heading="1945"
        component={
          <React.Fragment>
            <Typography component="p" variant="body2">
              Isaac Asimov, a Columbia University alumni, coined the term
              Robotics.
            </Typography>
          </React.Fragment>
        }
      />
      <ExpansionPanel
        heading="1950"
        component={
          <React.Fragment>
            <Typography component="p" variant="body2">
              Alan Turing introduced Turing Test for evaluation of intelligence
              and published Computing Machinery and Intelligence. Claude Shannon
              published Detailed Analysis of Chess Playing as a search.
            </Typography>
          </React.Fragment>
        }
      />
      <ExpansionPanel
        heading="1956"
        component={
          <React.Fragment>
            <Typography component="p" variant="body2">
              John McCarthy coined the term Artificial Intelligence.
              Demonstration of the first running AI program at Carnegie Mellon
              University.
            </Typography>
          </React.Fragment>
        }
      />
      <ExpansionPanel
        heading="1958	
"
        component={
          <React.Fragment>
            <Typography component="p" variant="body2">
              John McCarthy invents LISP programming language for AI.
            </Typography>
          </React.Fragment>
        }
      />
      <ExpansionPanel
        heading="1964"
        component={
          <React.Fragment>
            <Typography component="p" variant="body2">
              Danny Bobrow's dissertation at MIT showed that computers can
              understand natural language well enough to solve algebra word
              problems correctly.
            </Typography>
          </React.Fragment>
        }
      />
      <ExpansionPanel
        heading="1965"
        component={
          <React.Fragment>
            <Typography component="p" variant="body2">
              Joseph Weizenbaum at MIT built ELIZA, an interactive problem that
              carries on a dialogue in English.
            </Typography>
          </React.Fragment>
        }
      />
      <ExpansionPanel
        heading="1969"
        component={
          <React.Fragment>
            <Typography component="p" variant="body2">
              Joseph Weizenbaum at MIT built ELIZA, an interactive problem that
              carries on a dialogue in English.
            </Typography>
          </React.Fragment>
        }
      />
      <ExpansionPanel
        heading="1973"
        component={
          <React.Fragment>
            <Typography component="p" variant="body2">
              The Assembly Robotics group at Edinburgh University built Freddy,
              the Famous Scottish Robot, capable of using vision to locate and
              assemble models.
            </Typography>
          </React.Fragment>
        }
      />
      <ExpansionPanel
        heading="1973"
        component={
          <React.Fragment>
            <Typography component="p" variant="body2">
              The first computer-controlled autonomous vehicle, Stanford Cart,
              was built.
            </Typography>
          </React.Fragment>
        }
      />

      <ExpansionPanel
        heading="1985"
        component={
          <React.Fragment>
            <Typography component="p" variant="body2">
              Harold Cohen created and demonstrated the drawing program, Aaron.
            </Typography>
          </React.Fragment>
        }
      />

      <ExpansionPanel
        heading="1990"
        component={
          <React.Fragment>
            <Typography component="p" variant="body2">
              Major advances in all areas of AI −
            </Typography>
          </React.Fragment>
        }
      />

      <ExpansionPanel
        heading="1973"
        component={
          <React.Fragment>
            <Typography component="p" variant="body2">
              The Assembly Robotics group at Edinburgh University built Freddy,
              the Famous Scottish Robot, capable of using vision to locate and
              assemble models.
            </Typography>
          </React.Fragment>
        }
      />
    </div>
  );
};
