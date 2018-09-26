import React from "react";

import ScrollToTop from "../../UI/ScrollToTop/ScrollToTop";
import { Typography } from "@material-ui/core";
export default () => {
  return (
    <div style={{ marginTop: "300px", textAlign: "center" }}>
      <ScrollToTop />
      <Typography component="h3" color="primary" variant="display2">
        Comming Soon
      </Typography>
    </div>
  );
};
