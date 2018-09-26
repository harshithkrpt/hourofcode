import React, { Component } from "react";
import Prism from "prismjs";
import "../../styles/prism.css";

export class CodeData extends Component {
  componentDidMount = () => {
    Prism.highlightAll();
  };
  render() {
    return (
      <div style={{ padding: "10px" }}>
        <pre style={{ overflowX: "auto", border: "none" }}>
          <code className="language-clike">{`${this.props.code}`}</code>
        </pre>
      </div>
    );
  }
}
