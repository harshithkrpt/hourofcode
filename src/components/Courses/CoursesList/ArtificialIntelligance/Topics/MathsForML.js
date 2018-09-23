import React from "react";
import { Typography } from "@material-ui/core";
import Margin from "../../../../UI/Margin/Margin";
import YoutubeMid from "../../../../UI/Youtube/YoutubeMid";
import Youtube from "../../../../UI/Youtube/Youtube";
import Button from "../../../../UI/Button/Button";

export default props => {
  return (
    <div>
      <Typography component="h3" variant="headline">
        Mathematics For AI and ML
      </Typography>

      <Typography component="p" variant="body2">
        Watch Below Video which is Important
      </Typography>

      <YoutubeMid id="8onB7rPG4Pk" />
      <Margin />
      <Margin />
      <Margin />
      <Margin />
      <Typography component="h1" variant="subheading" color="primary">
        Linear Algebra
      </Typography>

      <Typography component="p" variant="body2">
        Linear algebra is a sub-field of mathematics concerned with vectors,
        matrices, and linear transforms.
      </Typography>

      <Typography component="p" variant="body2">
        It is a key foundation to the field of machine learning, from notations
        used to describe the operation of algorithms to the implementation of
        algorithms in code.
      </Typography>
      <Margin />
      <Margin />
      <Margin />

      <Youtube id="fNk_zzaMoSs" />

      <Button
        name="Linear Algebra Link Youtube"
        link="https://www.youtube.com/watch?v=kjBOesZCoqc&index=1&list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab"
      />

      <Button
        name="Linear Algebra Link MIT"
        link="https://ocw.mit.edu/courses/mathematics/18-06-linear-algebra-spring-2010/"
      />
      <Margin />
      <Typography component="p" variant="body2">
        Linear Algebra is Useful for the follwing in Machine Learning :
      </Typography>

      <Typography component="p" variant="body2">
        1. Dataset and Data Files
      </Typography>

      <Typography component="p" variant="body2">
        2. Images and Photographs
      </Typography>

      <Typography component="p" variant="body2">
        3. One-Hot Encoding
      </Typography>

      <Typography component="p" variant="body2">
        4. Linear Regression
      </Typography>

      <Typography component="p" variant="body2">
        5. Regularization
      </Typography>

      <Typography component="p" variant="body2">
        6. Dataset and Data Files
      </Typography>

      <Typography component="p" variant="body2">
        7. Principal Component Analysis
      </Typography>

      <Typography component="p" variant="body2">
        8. Singular-Value Decomposition
      </Typography>

      <Margin />
      <Margin />
      <Margin />
      <Typography component="h1" variant="subheading" color="primary">
        Calculus
      </Typography>

      <Typography component="p" variant="body2">
        Calculus (from Latin calculus, literally 'small pebble', used for
        counting and calculations, as on an abacus) is the mathematical study of
        continuous change, in the same way that geometry is the study of shape
        and algebra is the study of generalizations of arithmetic operations.
      </Typography>

      <Margin />
      <Youtube id="WUvTyaaNkzM" />
      <Button
        name="Learn Calculus Link Youtube"
        link="https://www.youtube.com/playlist?list=PLZHQObOWTQDMsr9K-rj53DwVRMYO3t5Yr"
      />

      <Margin />
      <Margin />
      <Margin />
      <Typography component="h1" variant="subheading" color="primary">
        Probability
      </Typography>

      <Typography component="p" variant="body2">
        Probability plays an important role in Machine Learning and Artificial
        Intelligance
      </Typography>

      <Margin />
      <Youtube id="OyddY7DlV58" />
      <Button
        name="Edx Course Link Probability"
        link="https://www.edx.org/course/introduction-probability-science-mitx-6-041x-2"
      />
    </div>
  );
};
