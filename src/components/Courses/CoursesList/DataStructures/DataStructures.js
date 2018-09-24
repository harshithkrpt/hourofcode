import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Youtube from "../../../UI/Youtube/Youtube";
import Margin from "../../../UI/Margin/Margin";
import Button from "../../../UI/Button/Button";

import Arrays from "./Topics/Arrays";
import LinkedList from "./Topics/LinkedList";
import Stack from "./Topics/Stack";
import Queue from "./Topics/Queue";
import BinaryTree from "./Topics/BinaryTree";
import BinarySearchTree from "./Topics/BinarySearchTree";
import Heap from "./Topics/Heap";
import Hashing from "./Topics/Hashing";
import Graph from "./Topics/Graph";
import Matrix from "./Topics/Matrix";
import AdvancedDataStructures from "./Topics/AdvancedDataStructures";

import ExpansionPanel from "../../../UI/ExpansionPanel/ExpansionPanel";

// stepper
import Stepper from "../../../UI/Stepper/Stepper";

// path
function getSteps() {
  return ["First Steps", "Courses"];
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
          <Typography component="p" variant="body2" color="primary">
            List of Courses
          </Typography>
          <Button
            name="Fundementals Edx Course Link"
            link="https://www.edx.org/course/foundations-of-data-structures"
          />
          <Button
            name="Foundations Edx Course Link"
            link="https://www.edx.org/course/foundations-of-data-structures"
          />
          <Button
            name="Youtube PlayList Course (Imp)"
            link="https://www.youtube.com/playlist?list=PL2_aWCzGMAwI3W_JlcBbtYTwiQSsOTa6P"
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

class DataStructures extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div style={{ marginTop: "100px" }}>
        <Paper className={classes.root} elevation={0}>
          <Typography variant="display1" component="h3" color="primary">
            Data Structures
          </Typography>
          <Margin />
          <Margin />
          <Typography variant="body2" component="p">
            In computer science, a data structure is a data organization,
            management and storage format that enables efficient access and
            modification. More precisely, a data structure is a collection of
            data values, the relationships among them, and the functions or
            operations that can be applied to the data.
          </Typography>
          <Margin />

          <Margin />
          <Margin />
          <Typography component="h3" variant="headline">
            Where we use Data Structures ?
          </Typography>
          <Margin />
          <Typography component="p" variant="body2">
            A data structure is a specialized format for organizing and storing
            data. General data structure types include the array, the file, the
            record, the table, the tree, and so on. Any data structure is
            designed to organize data to suit a specific purpose so that it can
            be accessed and worked with in appropriate ways.
          </Typography>
          <Margin />
          <Margin />
          <Youtube id="bum_19loj9A" />
          <Margin />
          <Margin />
          <Typography component="h3" variant="subheading">
            Types of Data Structures :
          </Typography>
          <Margin />
          <Margin />
          <Typography component="p" variant="body2">
            1.Array
          </Typography>
          <Typography component="p" variant="body2">
            2.Linked List
          </Typography>
          <Typography component="p" variant="body2">
            3.Stack
          </Typography>
          <Typography component="p" variant="body2">
            4.Queue
          </Typography>
          <Typography component="p" variant="body2">
            5.Binary Tree
          </Typography>
          <Typography component="p" variant="body2">
            6.Binary Search Tree
          </Typography>
          <Typography component="p" variant="body2">
            7.Heap
          </Typography>
          <Typography component="p" variant="body2">
            8.Hashing
          </Typography>
          <Typography component="p" variant="body2">
            9.Graph
          </Typography>
          <Typography component="p" variant="body2">
            10.Matrix
          </Typography>
          <Typography component="p" variant="body2">
            11.Advanced Data Structures
          </Typography>
          <Margin />
          <Margin />
          <Typography component="p" variant="body2">
            IMPORTANT -- On the bottom you will find the courses/resourses where
            you can learn basic to advanced data structures do check it.
          </Typography>
          <div style={{ marginTop: "30px" }}>
            <ExpansionPanel heading={"Arrays"} component={<Arrays />} />

            <ExpansionPanel
              heading={"Linked List"}
              component={<LinkedList />}
            />
            <ExpansionPanel heading={"Stack"} component={<Stack />} />
            <ExpansionPanel heading={"Queue "} component={<Queue />} />
            <ExpansionPanel
              heading={"Binary Tree"}
              component={<BinaryTree />}
            />
            <ExpansionPanel
              heading={"Binary Search Tree"}
              component={<BinarySearchTree />}
            />
            <ExpansionPanel heading={"Heap"} component={<Heap />} />
            <ExpansionPanel heading={"Hashing"} component={<Hashing />} />
            <ExpansionPanel heading={"Graph"} component={<Graph />} />
            <ExpansionPanel heading={"Matrix"} component={<Matrix />} />
            <ExpansionPanel
              heading={"Advanced Data Structures"}
              component={<AdvancedDataStructures />}
            />
          </div>
          <div style={{ marginTop: "30px" }} />
          <Typography variant="headline" component="h3" color="primary">
            Path to Learn Data Structures
          </Typography>
          <Stepper path={getSteps} pathContent={getStepContent} />
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(DataStructures);
