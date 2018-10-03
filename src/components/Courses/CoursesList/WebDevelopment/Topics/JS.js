import React from "react";
import YoutubeAvatar from "../../../../UI/YoutubeAvatar/YoutubeAvatar";
import { Typography } from "@material-ui/core";
import Margin from "../../../../UI/Margin/Margin";
export default () => {
  return (
    <div>
      <Typography component="h3" variant="headline">
        Learn JavaScript
      </Typography>
      <Margin />
      <YoutubeAvatar
        href="https://www.youtube.com/watch?v=vEROU2XtPR8&list=PLillGF-RfqbbnEGy3ROiLWk7JMCuSyQtX"
        alt="javascript course"
        title="Youtube PlayList"
        imglink="https://yt3.ggpht.com/a-/AN66SAy4xcnx6R4BSZN7-NWBLO3LjsVJlSfC_4Rh9w=s88-mo-c-c0xffffffff-rj-k-no"
      />
    </div>
  );
};
