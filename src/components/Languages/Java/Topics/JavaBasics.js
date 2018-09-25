import React from "react";

import { Typography } from "@material-ui/core";

import FullScreenModal from "../../../UI/FullScreenModal/FullScreenModal";
import Margin from "../../../UI/Margin/Margin";
import { OopsParadigm } from "./subtopics/OopsParadigm";
import DataTypes from "./subtopics/DataTypes";
const JavaBasics = () => {
  return (
    <div>
      <Margin />
      <Typography component="h3" variant="subheading">
        1. Oops Paradigm
      </Typography>
      <FullScreenModal
        heading="Oops Paradigm"
        component={<OopsParadigm />}
        buttonName="Click Here"
      />
      <Margin />
      <Typography component="h3" variant="subheading">
        2. Data Types
      </Typography>
      <FullScreenModal
        heading="Data Types"
        component={<DataTypes />}
        buttonName="Click Here"
      />
    </div>
  );
};

export default JavaBasics;
