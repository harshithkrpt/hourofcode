import React from "react";
import { Typography } from "@material-ui/core";
import Margin from "../../../../UI/Margin/Margin";
import Button from "../../../../UI/Button/Button";

export default props => {
  return (
    <div>
      <Typography component="h3" variant="headline">
        For More Theory On AI Visit below Links
      </Typography>
      <Button
        name="Tutorials Point"
        link="https://www.tutorialspoint.com/artificial_intelligence/index.htm"
      />
      <Margin />
    </div>
  );
};
