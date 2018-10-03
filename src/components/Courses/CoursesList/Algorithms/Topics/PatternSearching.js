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
} from "./CodeSamples/PatternSearchingCS";

export const VideoComponent = props => {
  return (
    <div>
      <Typography
        variant="headline"
        style={{ textAlign: "center", marginTop: "20px" }}
        component="h3"
      >
        Pattern Searching
      </Typography>

      <Margin />
      <Typography
        style={{ marginLeft: "30px" }}
        component="h3"
        variant="subheading"
      >
        Naive algorithm for Pattern Searching
      </Typography>
      <Youtube id="xP5Ox-df_ik" />

      <Margin />
      <Typography
        style={{ marginLeft: "30px" }}
        component="h3"
        variant="subheading"
      >
        Knuth-Maorris-Pratt KMP
      </Typography>
      <Youtube id="V5-7GzOfADQ" />

      <Margin />
      <Typography
        style={{ marginLeft: "30px" }}
        component="h3"
        variant="subheading"
      >
        Wildacard Matching - DP
      </Typography>
      <Youtube id="3ZDZ-N0EPV0" />

      <Margin />
      <Typography
        style={{ marginLeft: "30px" }}
        component="h3"
        variant="subheading"
      >
        Rabin Karp Substring Search Pattern Matching
      </Typography>
      <Youtube id="CpZh4eF8QBw" />

      <Margin />
      <Typography
        style={{ marginLeft: "30px" }}
        component="h3"
        variant="subheading"
      >
        Z Algorithm Z values
      </Typography>
      <Youtube id="KG44VoDtsAA" />
    </div>
  );
};

export const CodeComponent = props => {
  return (
    <div>
      <Typography
        variant="headline"
        style={{ textAlign: "center", marginTop: "20px" }}
        component="h3"
      >
        Pattern Searching Tutorials
      </Typography>
      <Margin />
      <Typography
        component="h3"
        variant="subheading"
        color="primary"
        style={{ marginLeft: "20px" }}
      >
        Naive algorithm for Pattern Searching
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
        KMP Algorithm
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
        Rabin-Karp Algorithm for Pattern Searching
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

const PatternSearching = props => {
  const { classes } = props;
  return (
    <React.Fragment>
      <div className={classes.root}>
        <Typography component="h3" color="primary" variant="display1">
          Pattern Searching
        </Typography>
        <Typography component="p" variant="body2">
          Pattern searching is an important problem in computer science. When we
          do search for a string in notepad/word file or browser or database,
          pattern searching algorithms are used to show the search results.
        </Typography>
        <Margin />
        <Margin />
        <Typography component="h3" variant="headline">
          Watch This
        </Typography>
        <Youtube id="GTJr8OvyEVQ" />
        <div style={{ display: "flex", marginTop: "20px" }}>
          <FullScreenModal
            heading="Pattern Searching"
            component={<VideoComponent />}
            buttonName="Watch Video Samples"
          />
          <FullScreenModal
            heading="Pattern Searching"
            component={<CodeComponent />}
            buttonName="Watch Code Samples"
          />
        </div>

        <Button
          name="Click Here For  More"
          link="https://www.geeksforgeeks.org/algorithms-gq/pattern-searching/"
        />
      </div>
    </React.Fragment>
  );
};

export default withStyles(styles)(PatternSearching);
