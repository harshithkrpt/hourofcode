import React from "react";
import { Typography } from "@material-ui/core";
import Margin from "../../../../UI/Margin/Margin";
import Youtube from "../../../../UI/Youtube/Youtube";

export default props => {
  return (
    <div>
      <Typography component="h3" variant="headline">
        Getting Started With AI (Important)
      </Typography>
      <Margin />
      <Typography component="p" variant="subheading">
        This Section is very Important , do follow the steps mentioned below so
        that you can feel comfortable in learning Artificial Intelligance
      </Typography>
      <Margin />
      <Margin />

      <Typography component="h3" variant="headline">
        Steps
      </Typography>
    </div>
  );
};
