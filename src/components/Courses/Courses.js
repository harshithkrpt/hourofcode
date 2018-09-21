import React, { Component } from "react";
import Card from "../UI/Card/Card";
import "./Courses.css";
import { withStyles } from "@material-ui/core";
import webimg from "../../assets/images/webdevelopment.png";
import datascienceimg from "../../assets/images/data_science.jpeg";
import algoimg from "../../assets/images/algorithms.png";
import androiddevimg from "../../assets/images/androiddevelopment.jpeg";
import artfimg from "../../assets/images/artificialinteligance.jpg";
import cmporgimg from "../../assets/images/computerorgainzation.jpeg";
import matheimg from "../../assets/images/mathematics.jpeg";
import prolanimg from "../../assets/images/programminglanguages.png";
import datastrimg from "../../assets/images/data_str_img.jpeg";
import Typography from "@material-ui/core/Typography";

let styles = {};
class Courses extends Component {
  state = {
    data: [
      {
        name: "Algorithms",
        para:
          "In mathematics and computer science, an algorithm is an unambiguous specification of how to solve a class of problems. Algorithms can perform calculation, data processing and automated reasoning tasks",
        image: algoimg,
        link: "/algorithms"
      },
      {
        name: "Android Development",
        para:
          'Android software development is the process by which new applications are created for devices running the Android operating system. Google states that, "Android apps can be written using Kotlin, Java',
        image: androiddevimg,
        link: "/android_development"
      },
      {
        name: "Artificial Intelligence",
        para:
          "Artificial Intelligence is a way of making a computer, a computer-controlled robot, or a software think intelligently, in the similar manner the intelligent humans think.Meachine Learning comes under AI",
        image: artfimg,
        link: "/artificial_intelligence"
      },
      {
        name: "Computer Orgsanization",
        para:
          "Computer Organization refers to the level of abstraction above the digital logic level, but below the operating system level.Oct 23, 2000.The Operating System of a computer is the core of its system software",
        image: cmporgimg,
        link: "/computer_organization"
      },
      {
        name: "Data Science",
        para:
          "Data science is an interdisciplinary field that uses scientific methods, processes, algorithms and systems to extract knowledge and insights from data in various forms, both structured and unstructured, similar to data mining.",
        image: datascienceimg,
        link: "/data_science"
      },
      {
        name: "Data Structures",
        para:
          "In computer science, a data structure is a data organization, management and storage format that enables efficient access and modification. More precisely, a data structure is a collection of data values.",
        image: datastrimg,
        link: "/data_structures"
      },
      {
        name: "Mathematics",
        para:
          "Discrete math is sometimes referred to as the math for computer science. Topics in discrete math that are used in computer science include graphs, recursive formulas, counting, logic, probability and matrices.",
        image: matheimg,
        link: "/mathematics"
      },
      {
        name: "Programming Languages",
        para:
          "A programming language is a formal language which comprises a set of instructions used to produce various kinds of output. Programming languages are used to create programs that implement specific algorithms.",
        image: prolanimg,
        link: "/programming_languages"
      },
      {
        name: "Web Development",
        para:
          "Web development is a broad term for the work involved in developing a web site for the Internet or an intranet. Web development can range from developing the simplest static single page of plain text to the most complex web-based internet applications.",
        image: webimg,
        link: "/web_development"
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
          Courses For You
        </Typography>
        <div className="courses" style={{ marginTop: "30px" }}>
          {data}
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Courses);
