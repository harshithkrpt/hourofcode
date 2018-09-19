import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  input: {
    display: "none"
  }
});

function TextButtons(props) {
  const { classes } = props;
  return (
    <div>
      <Button color="primary" className={classes.button}>
        <a href={props.link} target="_blank" style={{ textDecoration: "none" }}>
          {props.name}
        </a>
      </Button>
    </div>
  );
}

TextButtons.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TextButtons);
