import React from "react";
import { Typography } from "@material-ui/core";
import Button from "../../../../UI/Button/Button";
import Youtube from "../../../../UI/Youtube/Youtube";

export default () => {
  return (
    <div>
      <Typography component="p" variant="body2">
        The only things that you need to know are how to use Git and GitHub.
        Here are some resources to learn about them:
      </Typography>
      <Youtube id="SWYqp7iY_Tc" />
      <Button
        link="https://try.github.io/levels/1/challenges/1"
        name="Try Git"
      />
      <Button
        link="http://rogerdudler.github.io/git-guide/"
        name="Git -Simple Guide"
      />
    </div>
  );
};
