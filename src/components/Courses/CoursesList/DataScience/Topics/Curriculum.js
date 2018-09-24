import React from "react";
import { Typography } from "@material-ui/core";
import Margin from "../../../../UI/Margin/Margin";

const input = [
  "Linear Algebra",
  "Single Variable Calculus",
  "Multivariable Calculus",
  "Python",
  "Probability and Statistics",
  "Introduction to Data Science",
  "Machine Learning",
  "Project",
  "Convex Optimization",
  "Data Wrangling",
  "Big Data",
  "Database",
  "Deep Learning",
  "Natural Language Processing",
  "Capstone Project",
  "Specializations"
];

export default props => {
  let jsx = input.map(data => (
    <Typography component="p" variant="body2" key={data}>
      {data}
    </Typography>
  ));
  return (
    <div>
      <Typography component="h3" variant="headline" color="primary">
        Curriculum
      </Typography>
      <Margin />
      {jsx}
      <Margin />
      <Typography component="p" variant="body2">
        IMPORTANT -- All the resources to learn this ciriculum is in the
        resources section below and you with find the path to become a data
        scientist.
      </Typography>
    </div>
  );
};
