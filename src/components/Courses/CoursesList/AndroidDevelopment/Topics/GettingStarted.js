import React from "react";
import { withStyles } from "@material-ui/core/styles";

import { Typography } from "@material-ui/core";

import Margin from "../../../../UI/Margin/Margin";
import Button from "../../../../UI/Button/Button";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  }
});

const GettingStarted = props => {
  const { classes } = props;
  return (
    <React.Fragment>
      <div className={classes.root}>
        <Typography component="h3" variant="display1" color="default">
          Getting Started
        </Typography>
        <Margin />
        <Typography component="p" variant="body2">
          If you're brand new to Android and want to jump into code, start with
          the{" "}
          <a
            href="https://developer.android.com/training/basics/firstapp/index.html"
            target="_blank"
            style={{ textDecoration: "none" }}
            rel="noopener noreferrer"
          >
            Build Your First App
          </a>{" "}
          tutorial.
        </Typography>
        <Margin />
        <Margin />
        <Typography component="h3" variant="headline">
          Resources
        </Typography>
        <ul>
          <li>
            <Typography component="h5" variant="title">
              <a
                href="https://codelabs.developers.google.com/?cat=Android"
                style={{ textDecoration: "none" }}
                color="primary"
                rel="noopener"
              >
                CodeLabs
              </a>
            </Typography>
            <Margin />
            <Typography component="p" variant="body1">
              Short, self-paced tutorials that each cover a discrete topic. Most
              codelabs step you through the process of building a small app, or
              adding a new feature to an existing app.
            </Typography>
            <Button
              name="Click Here"
              link="https://codelabs.developers.google.com/?cat=Android"
            />
          </li>
          <li>
            <Typography component="h5" variant="title">
              <a
                href="https://codelabs.developers.google.com/?cat=Android"
                style={{ textDecoration: "none" }}
                color="primary"
              >
                End to End Training
              </a>
            </Typography>
            <Margin />
            <Typography component="p" variant="body1">
              Short, self-paced tutorials that each cover a discrete topic. Most
              codelabs step you through the process of building a small app, or
              adding a new feature to an existing app.
            </Typography>
            <Button
              name="Click Here"
              link="https://codelabs.developers.google.com/?cat=Android"
            />
          </li>
        </ul>
        <Margin />
        <Margin />
        <Typography component="h3" variant="headline">
          Prerequisites
        </Typography>
        <Typography component="p" variant="body2">
          1. A Laptop or PC
        </Typography>
        <Typography component="p" variant="body2">
          2. Android Studio
        </Typography>
        <Typography component="p" variant="body2">
          3. Java or Kotlin Languages
        </Typography>
        <Typography component="p" variant="body2">
          4. SQL (useful not mandatory for beginners)
        </Typography>
        <Typography component="p" variant="body2">
          5. XML (easy to learn )
        </Typography>
      </div>
    </React.Fragment>
  );
};

export default withStyles(styles)(GettingStarted);
