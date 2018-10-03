import React from "react";
import { withStyles } from "@material-ui/core/styles";

import { Typography } from "@material-ui/core";

import Button from "../../../../UI/Button/Button";
import Margin from "../../../../UI/Margin/Margin";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  }
});

const GraphAlgorithms = props => {
  const { classes } = props;
  return (
    <React.Fragment>
      <div className={classes.root}>
        <Typography component="h3" variant="display1" color="primary">
          Graph Algorithms
        </Typography>
        <Typography component="p" variant="body2">
          A graph is an abstract notation used to represent the connection
          between pairs of objects
        </Typography>
        <Margin />
        <ul>
          <li>
            {" "}
            <Typography component="p" variant="body2">
              <b>Vertices</b> − Interconnected objects in a graph are called
              vertices. Vertices are also known as <b>nodes</b>.
            </Typography>
          </li>
          <li>
            {" "}
            <Typography component="p" variant="body2">
              <b>Edges</b> − Edges are the links that connect the vertices.
            </Typography>
          </li>
        </ul>
        <Margin />
        <Margin />
        <Typography component="p" variant="body2">
          There are two types of graphs −
        </Typography>
        <ul>
          <li>
            {" "}
            <Typography component="p" variant="body2">
              <b>Directed graph</b> − In a directed graph, edges have direction,
              i.e., edges go from one vertex to another..
            </Typography>
          </li>
          <li>
            {" "}
            <Typography component="p" variant="body2">
              <b>Undirected graph</b> − In an undirected graph, edges have no
              direction. .
            </Typography>
          </li>
        </ul>
        <Margin />
        <Margin />
        <Typography component="p" variant="body2">
          Click below for more info on Graph's
        </Typography>
        <Button
          name="Click Here"
          link="https://www.tutorialspoint.com/parallel_algorithm/graph_algorithm.htm"
        />
      </div>
    </React.Fragment>
  );
};

export default withStyles(styles)(GraphAlgorithms);
