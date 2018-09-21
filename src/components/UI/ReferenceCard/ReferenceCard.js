import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "../Button/Button";
import Typography from "@material-ui/core/Typography";

const styles = {
  card: {
    minWidth: 100
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    marginBottom: 16,
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
};

function SimpleCard(props) {
  const { classes } = props;

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography
          className={classes.title}
          color="primary"
          component="h4"
          variant="subheading"
        >
          {props.title}
        </Typography>
        {props.children}
      </CardContent>
      <CardActions>
        <Button link={props.link} name="Click Here" />
      </CardActions>
    </Card>
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleCard);
