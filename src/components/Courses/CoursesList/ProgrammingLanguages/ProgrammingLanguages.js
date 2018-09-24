import React, { Component } from "react";
import Card from "../../../UI/Card/Card";
import "./ProgrammingLanguages.css";
import { withStyles } from "@material-ui/core";
import { Typography } from "@material-ui/core";

import jsimg from "../../../../assets/images/javascript.png";

import pythonimg from "../../../../assets/images/python.png";

import cimg from "../../../../assets/images/c.png";

import cppimg from "../../../../assets/images/cpp.png";

import javaimg from "../../../../assets/images/java.png";

let styles = {};
class ProgrammingLanguages extends Component {
  state = {
    data: [
      {
        name: "Java",
        para:
          "Java is a general-purpose computer-programming language that is concurrent, class-based, object-oriented, and specifically designed to have as few implementation dependencies as possible.",
        image: javaimg,
        link: "/programming_languages/java"
      },
      {
        name: "Python",
        para:
          "Python is an interpreted high-level programming language for general-purpose programming. Created by Guido van Rossum and first released in 1991, Python has a design philosophy that emphasizes code readability, notably using significant whitespace",
        image: pythonimg,
        link: "/programming_languages/python"
      },
      {
        name: "C",
        para:
          "C is a general-purpose, imperative computer programming language, supporting structured programming, lexical variable scope and recursion, while a static type system prevents many unintended operations.",
        image: cimg,
        link: "/programming_languages/c"
      },
      {
        name: "C++",
        para:
          "C++ is a general-purpose programming language. It has imperative, object-oriented and generic programming features, while also providing facilities for low-level memory manipulation.",
        image: cppimg,
        link: "/programming_languages/c++"
      },
      {
        name: "JavaScript",
        para:
          "JavaScript, often abbreviated as JS, is a high-level, interpreted programming language. It is a language which is also characterized as dynamic, weakly typed, prototype-based and multi-paradigm. Alongside HTML and CSS, JavaScript is one of the three core technologies of the World Wide Web.",
        image: jsimg,
        link: "/programming_languages/javascript"
      }
    ]
  };
  render() {
    let data = this.state.data.map(dat => (
      <Card
        name={dat.name}
        para={dat.para}
        image={dat.image}
        key={dat.name}
        link={dat.link}
      />
    ));
    return (
      <React.Fragment>
        <Typography
          component="h3"
          variant="display1"
          color="primary"
          style={{ marginTop: "100px" }}
        >
          Programming Languages
        </Typography>
        <div className="courses" style={{ marginTop: "30px" }}>
          {data}
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(ProgrammingLanguages);
