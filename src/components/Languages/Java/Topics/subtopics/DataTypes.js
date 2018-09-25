import React, { Component } from "react";

import "../../../../../styles/prism.css";

import { Typography, Paper, Divider } from "@material-ui/core";
import Margin from "../../../../UI/Margin/Margin";
import Youtube from "../../../../UI/Youtube/Youtube";
import Prism from "prismjs";

export default class DataTypes extends Component {
  componentDidMount = () => {
    Prism.highlightAll();
  };

  render() {
    return (
      <div>
        <Paper
          style={{
            marginTop: "5px",
            padding: "10px",
            width: "90vw",
            marginLeft: "auto",
            marginRight: "auto"
          }}
          elevation={2}
        >
          <Typography component="h3" variant="headline" color="primary">
            Data Types
          </Typography>
          <Divider />
          <Margin />
          <pre style={{ overflowX: "auto", border: "none" }}>
            <code className="language-python">
              {`
              // hello
              class Main {
                  public static void main(String args[])
                  {
                      System.out.println("Hello World");
                  }
              }
             `}
            </code>
          </pre>
        </Paper>
      </div>
    );
  }
}
