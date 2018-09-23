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
        name="Tutorials Point on AI"
        link="https://www.tutorialspoint.com/artificial_intelligence/index.htm"
      />
      <Button
        link="https://www.tutorialspoint.com/machine_learning_with_python/machine_learning_with_python_concepts.htm"
        name="Tutorials Point on ML"
      />
      <Margin />
    </div>
  );
};
