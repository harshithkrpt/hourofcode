import React from "react";
import { withStyles } from "@material-ui/core/styles";

import FullScreenModal from "../../../../UI/FullScreenModal/FullScreenModal";
import Youtube from "../../../../UI/Youtube/Youtube";
import { Typography, Divider } from "@material-ui/core";

import Button from "../../../../UI/Button/Button";
import Margin from "../../../../UI/Margin/Margin";
import OutputCard from "../../../../UI/OutPutCard/OutPutCard";
import { CodeData } from "../../../../../Code/CodeData/CodeData";
import {
  Example1,
  Example1Output,
  Example2,
  Example2Output,
  Example3,
  Example3Output
} from "./CodeSamples/RandomizedAlgoCS";

export const CodeComponent = props => {
  return (
    <div>
      <Typography
        variant="headline"
        style={{ textAlign: "center", marginTop: "20px" }}
        component="h3"
      >
        Randomized Algorithm
      </Typography>
      <Margin />
      <Typography
        component="h3"
        variant="subheading"
        color="primary"
        style={{ marginLeft: "20px" }}
      >
        Karger’s algorithm for Minimum Cut
      </Typography>
      <CodeData code={Example1} />
      <Typography
        component="h3"
        variant="subheading"
        color="secondary"
        style={{ marginLeft: "20px" }}
      >
        Output
      </Typography>
      <OutputCard data={Example1Output} />
      <Divider />

      <Margin />
      <Typography
        component="h3"
        variant="subheading"
        color="primary"
        style={{ marginLeft: "20px" }}
      >
        Reservoir Sampling
      </Typography>
      <CodeData code={Example2} />
      <Typography
        component="h3"
        variant="subheading"
        color="secondary"
        style={{ marginLeft: "20px" }}
      >
        Output
      </Typography>
      <OutputCard data={Example2Output} />
      <Divider />

      <Margin />
      <Typography
        component="h3"
        variant="subheading"
        color="primary"
        style={{ marginLeft: "20px" }}
      >
        Shuffle a Given Array
      </Typography>
      <CodeData code={Example3} />
      <Typography
        component="h3"
        variant="subheading"
        color="secondary"
        style={{ marginLeft: "20px" }}
      >
        Output
      </Typography>
      <OutputCard data={Example3Output} />
      <Divider />
    </div>
  );
};

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  }
});

const RandomizedAlgorithms = props => {
  const { classes } = props;
  return (
    <React.Fragment>
      <div className={classes.root}>
        <Typography component="h3" variant="display1" color="primary">
          Randomized Algorithms
        </Typography>
        <Margin />
        <Typography component="p" variant="body2">
          A randomized algorithm is an algorithm that employs a degree of
          randomness as part of its logic. The algorithm typically uses
          uniformly random bits as an auxiliary input to guide its behavior, in
          the hope of achieving good performance in the "average case" over all
          possible choices of random bits.
        </Typography>
        <Margin />
        <Margin />
        <Youtube id="z0lJ2k0sl1g" />
        <div style={{ display: "flex", marginTop: "20px" }}>
          <FullScreenModal
            heading="Randomized Algorithms"
            component={<CodeComponent />}
            buttonName="Watch Code Samples"
          />
        </div>
        <Button
          name="Click Here For More"
          link="https://www.geeksforgeeks.org/randomized-algorithms-set-1-introduction-and-analysis/"
        />
      </div>
    </React.Fragment>
  );
};

export default withStyles(styles)(RandomizedAlgorithms);
