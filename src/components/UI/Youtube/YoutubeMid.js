import React from "react";
import { withStyles } from "@material-ui/core";

import youtubeLogo from "../../../assets/svg/youtubelogo.svg";
import "./Youtube.css";
import ReactSVG from "react-svg";

const styles = theme => ({});
const YoutubeMid = props => {
  return (
    <div className="youtube-video">
      <a
        href={`https://www.youtube.com/watch?v=${props.id}`}
        target="_blank"
        rel="noopener"
      >
        <img
          alt={props.id}
          src={`https://img.youtube.com/vi/${props.id}/0.jpg`}
        />
        <ReactSVG src={youtubeLogo} className="svgholder" />
      </a>
    </div>
  );
};

export default withStyles(styles)(YoutubeMid);
