import React from "react";
import { Paper, Typography } from "@material-ui/core";
import Avatar from "../Avatar/Avatar";

export default props => {
  return (
    <Paper
      elevation={2}
      style={{
        padding: "15px",
        marginBottom: "10px",
        textAlign: "center"
      }}
    >
      <a href={props.href} target="_blank" rel="noopener noreferrer">
        <Avatar src={props.imglink} alt={props.alt} />
      </a>
      <Typography variant="headline" component="h3">
        {props.title}
      </Typography>
    </Paper>
  );
};
