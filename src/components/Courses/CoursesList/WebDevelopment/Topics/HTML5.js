import React from "react";
import YoutubeAvatar from "../../../../UI/YoutubeAvatar/YoutubeAvatar";
import { Typography } from "@material-ui/core";
import Margin from "../../../../UI/Margin/Margin";
export default () => {
  return (
    <div>
      <Typography component="h3" variant="headline">
        Learn HTML and Css
      </Typography>
      <Margin />
      <YoutubeAvatar
        href="https://www.youtube.com/watch?v=UB1O30fR-EE&list=PLillGF-RfqbZTASqIqdvm1R5mLrQq79CU"
        alt="html css course"
        title="Youtube PlayList"
        imglink="https://yt3.ggpht.com/a-/AN66SAy4xcnx6R4BSZN7-NWBLO3LjsVJlSfC_4Rh9w=s88-mo-c-c0xffffffff-rj-k-no"
      />
    </div>
  );
};
