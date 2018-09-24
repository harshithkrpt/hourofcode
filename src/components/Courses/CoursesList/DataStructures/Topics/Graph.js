import React from "react";
import { withStyles } from "@material-ui/core/styles";

import FullScreenModal from "../../../../UI/FullScreenModal/FullScreenModal";
import Youtube from "../../../../UI/Youtube/Youtube";
import { Typography } from "@material-ui/core";

import Button from "../../../../UI/Button/Button";

import Margin from "../../../../UI/Margin/Margin";
import graphsrc from "../../../../../assets/images/graph.png";

export const VideoComponent = props => {
  return (
    <div>
      <Typography
        variant="headline"
        style={{ textAlign: "center", marginTop: "20px" }}
        component="h3"
      >
        Understanding Graphs
      </Typography>
      <Youtube id="D6xkbGLQesk" />
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
        Understanding Back Tracking
      </Typography>
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

const Graphs = props => {
  const { classes } = props;
  return (
    <React.Fragment>
      <div className={classes.root}>
        <Typography component="h3" variant="display1" color="primary">
          Graphs
        </Typography>
        <Margin />
        <Typography component="p" variant="body2">
          A Graph is a non-linear data structure consisting of nodes and edges.
          The nodes are sometimes also referred to as vertices and the edges are
          lines or arcs that connect any two nodes in the graph. More formally a
          Graph can be defined as,
        </Typography>

        <Margin />
        <Typography component="p" variant="body2">
          A Graph consists of a finite set of vertices(or nodes) and set of
          Edges which connect a pair of nodes.
        </Typography>
        <img src={graphsrc} alt="graph" style={{ width: "100%" }} />
        <Margin />
        <Typography component="p" variant="body2">
          {`In the above Graph, the set of vertices V = {(0, 1, 2, 3, 4)} and the
          set of edges E = {(01, 12, 23, 34, 04, 14, 13)}.`}
        </Typography>

        <Margin />
        <Youtube id="gXgEDyodOJU" />
        <div style={{ display: "flex", marginTop: "20px" }}>
          <FullScreenModal
            heading="Analysis of Algorithms"
            component={<VideoComponent />}
            buttonName="Watch Video Samples"
          />
          <FullScreenModal
            heading="Analysis Of Algorithms"
            component={<CodeComponent />}
            buttonName="Watch Code Samples"
          />
        </div>
        <Button
          name="Click Here For More"
          link="https://www.geeksforgeeks.org/graph-data-structure-and-algorithms/"
        />
      </div>
    </React.Fragment>
  );
};

export default withStyles(styles)(Graphs);
