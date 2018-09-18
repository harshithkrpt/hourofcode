import React from "react";
import { withStyles } from "@material-ui/core";
import Button from "../Button/Button";
const styles = {};
const YoutubeThumb = () => {
  return (
    <React.Fragment>
      <img src="https://img.youtube.com/vi/XldzQogezfA/mqdefault.jpg" />
      <Button
        link="https://www.youtube.com/watch?v=XldzQogezfA"
        name="Click Here"
      />
    </React.Fragment>
  );
};

export default withStyles(styles)(YoutubeThumb);
