import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
const styles = {
  card: {
    maxWidth: window.innerWidth < 320 ? 250 : 345
  },
  media: {
    height: 140
  }
};

function MediaCard(props) {
  const { classes } = props;
  return (
    <Link to={props.link} style={{ textDecoration: "none" }}>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={props.image}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="headline" component="h2">
              {props.name}
            </Typography>
            <Typography component="p">{props.para}</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MediaCard);
