import React from "react";
import { withStyles } from "@material-ui/core/styles";

import FullScreenModal from "../../../../UI/FullScreenModal/FullScreenModal";
import Youtube from "../../../../UI/Youtube/Youtube";
import { Typography, Divider } from "@material-ui/core";

import Button from "../../../../UI/Button/Button";
import Margin from "../../../../UI/Margin/Margin";
import YoutubeMid from "../../../../UI/Youtube/YoutubeMid";
import OutputCard from "../../../../UI/OutPutCard/OutPutCard";
import { CodeData } from "../../../../../Code/CodeData/CodeData";
import {
  Example1,
  Example1Output,
  Example2Output,
  Example2,
  Example3,
  Example3Output
} from "./CodeSamples/BitlAlgorithmsCS";

export const VideoComponent = props => {
  return (
    <div>
      <Typography
        variant="headline"
        style={{ textAlign: "center", marginTop: "20px" }}
        component="h3"
      >
        Bit Algorithms Tutorials
      </Typography>
      <Margin />
      <Typography
        style={{ marginLeft: "30px" }}
        component="h3"
        variant="subheading"
      >
        Equal Sum and XOR
      </Typography>
      <Youtube id="zhu605v9KOI" />

      <Margin />
      <Typography
        style={{ marginLeft: "30px" }}
        component="h3"
        variant="subheading"
      >
        Count set bits in an integer
      </Typography>
      <Youtube id="KJnhAUkxAho" />

      <Margin />
      <Typography
        style={{ marginLeft: "30px" }}
        component="h3"
        variant="subheading"
      >
        Swap all odd and even bits
      </Typography>
      <Youtube id="GWLCF808oVI" />

      <Margin />
      <Typography
        style={{ marginLeft: "30px" }}
        component="h3"
        variant="subheading"
      >
        Find nth Magic Number
      </Typography>
      <Youtube id="Rmjqr6U4k50" />

      <Margin />
      <Typography
        style={{ marginLeft: "30px" }}
        component="h3"
        variant="subheading"
      >
        Find Next Sparse Number
      </Typography>
      <Youtube id="foL8j1EbJYI" />

      <Margin />
      <Typography
        style={{ marginLeft: "30px" }}
        component="h3"
        variant="subheading"
      >
        Binary Representation of a given Number
      </Typography>
      <Youtube id="p0Vyq2_Q_uI" />

      <Margin />
      <Typography
        style={{ marginLeft: "30px" }}
        component="h3"
        variant="subheading"
      >
        Rotate bits of a number
      </Typography>
      <Youtube id="S2yXCBu3NdQ" />

      <Margin />
      <Typography
        style={{ marginLeft: "30px" }}
        component="h3"
        variant="subheading"
      >
        Count number of bits to be flipped to convert A to B
      </Typography>
      <YoutubeMid id="WVgYaucD1S4" />

      <Margin />
      <Typography
        style={{ marginLeft: "30px" }}
        component="h3"
        variant="subheading"
      >
        Sum of bit difference among all pairs
      </Typography>
      <Youtube id="cfizo_K7e0o" />

      <Margin />
      <Typography
        style={{ marginLeft: "30px" }}
        component="h3"
        variant="subheading"
      >
        Compute modulus division by a power-of-2-number
      </Typography>
      <YoutubeMid id="fSjW-wDghTs" />

      <Margin />
      <Typography
        style={{ marginLeft: "30px" }}
        component="h3"
        variant="subheading"
      >
        Reverse string without using any temporary variable
      </Typography>
      <Youtube id="Y-UR3ravjRE" />

      <Margin />
      <Typography
        style={{ marginLeft: "30px" }}
        component="h3"
        variant="subheading"
      >
        Multiply a given Integer with 3.5
      </Typography>
      <Youtube id="oG2_XmdQnVs" />

      <Margin />
      <Typography
        style={{ marginLeft: "30px" }}
        component="h3"
        variant="subheading"
      >
        Add 1 to a given number is even or odd
      </Typography>
      <Youtube id="9j8X3dsBBNA" />
    </div>
  );
};

export const CodeComponent = props => {
  return (
    <div>
      <Typography
        variant="headline"
        style={{ textAlign: "center", marginTop: "20px" }}
        component="h3"
      >
        Bit Algorithms Code
      </Typography>
      <Margin />
      <Typography
        component="h3"
        variant="subheading"
        color="primary"
        style={{ marginLeft: "20px" }}
      >
        Find the element that appears once
      </Typography>
      <CodeData code={Example1} />
      <Typography
        component="h3"
        variant="subheading"
        color="secondary"
        style={{ marginLeft: "20px" }}
      >
        Output
      </Typography>
      <OutputCard data={Example1Output} />
      <Divider />

      <Margin />
      <Typography
        component="h3"
        variant="subheading"
        color="primary"
        style={{ marginLeft: "20px" }}
      >
        Swap bits in a given number
      </Typography>
      <CodeData code={Example2} />
      <Typography
        component="h3"
        variant="subheading"
        color="secondary"
        style={{ marginLeft: "20px" }}
      >
        Output
      </Typography>
      <OutputCard data={Example2Output} />
      <Divider />

      <Margin />
      <Typography
        component="h3"
        variant="subheading"
        color="primary"
        style={{ marginLeft: "20px" }}
      >
        Rotate bits of a number
      </Typography>
      <CodeData code={Example3} />
      <Typography
        component="h3"
        variant="subheading"
        color="secondary"
        style={{ marginLeft: "20px" }}
      >
        Output
      </Typography>
      <OutputCard data={Example3Output} />
      <Divider />
    </div>
  );
};

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  }
});

const BitAlgorithms = props => {
  const { classes } = props;
  return (
    <React.Fragment>
      <div className={classes.root}>
        <Typography component="h3" variant="display1" color="primary">
          Bit Algorithms
        </Typography>
        <Margin />
        <Typography component="p" variant="body2">
          Bit manipulation is the act of algorithmically manipulating bits or
          other pieces of data shorter than a word. Computer programming tasks
          that require bit manipulation include low-level device control, error
          detection and correction algorithms, data compression, encryption
          algorithms, and optimization
        </Typography>
        <Margin />
        <Margin />
        <Youtube id="NLKQEOgBAnw" />

        <div style={{ display: "flex", marginTop: "20px" }}>
          <FullScreenModal
            heading="Bit Algorithms"
            component={<VideoComponent />}
            buttonName="Watch Video Samples"
          />
          <FullScreenModal
            heading="Bit Algorithms"
            component={<CodeComponent />}
            buttonName="Watch Code Samples"
          />
        </div>
        <Button
          name="Click Here For More"
          link="https://www.geeksforgeeks.org/bitwise-algorithms/"
        />
      </div>
    </React.Fragment>
  );
};

export default withStyles(styles)(BitAlgorithms);
