import React, { Component } from "react";

import "../../../../styles/prism.css";
import FullScreenModal from "../../../UI/FullScreenModal/FullScreenModal";

import { Typography, Divider } from "@material-ui/core";
import Margin from "../../../UI/Margin/Margin";
import Prism from "prismjs";

export default class DataTypes extends Component {
  componentDidMount = () => {
    Prism.highlightAll();
  };

  render() {
    return (
      <div>
        <Typography component="h3" variant="headline" color="primary">
          Code Samples
        </Typography>
        <Divider />
        <Margin />
        <FullScreenModal
          heading="Code Samples"
          component={<CodeSampleData />}
          buttonName="Click Here"
        />
      </div>
    );
  }
}

export class CodeSampleData extends Component {
  componentDidMount = () => {
    Prism.highlightAll();
    console.log(Prism.languages);
  };
  render() {
    return (
      <div style={{ marginTop: "30px", padding: "10px" }}>
        <Typography component="h3" variant="headline" color="primary">
          Hello World Java
        </Typography>
        <pre style={{ overflowX: "auto", border: "none" }}>
          <code className="language-clike">
            {`        
  /* This is a simple Java program. 
  FileName : "HelloWorld.java". */
  class HelloWorld 
  { 
  // Your program begins with a call to main(). 
  // Prints "Hello, World" to the terminal window. 
  public static void main(String args[]) 
  { 
  System.out.println("Hello, World"); 
  } 
  } 
       `}
          </code>
        </pre>
      </div>
    );
  }
}
