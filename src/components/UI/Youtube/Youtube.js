import React, { Component } from "react";
import { withStyles } from "@material-ui/core";
import Youtube from "react-youtube";
import "./Youtube.css";
import Dimensions from "react-dimensions";
const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  }
});
class YoutubeVideo extends Component {
  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
  render() {
    let opts = {
      height: "390",
      width: "640",
      playerVars: {
        autoplay: 0
      }
    };
    if (this.props.containerWidth < 700) {
      opts.height = "240";
      opts.width = "426";
    }
    if (this.props.containerWidth < 500) {
      opts.height = "170";
      opts.width = "300";
    }
    return (
      <div className="youtube" style={{ marginTop: "30px", width: "100%" }}>
        <Youtube videoId={this.props.id} opts={opts} onReady={this._onReady} />
      </div>
    );
  }
}
export default withStyles(styles)(Dimensions()(YoutubeVideo));
