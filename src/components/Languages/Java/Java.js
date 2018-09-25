import React from "react";

import { Typography, Paper, Divider } from "@material-ui/core";
import ExpansionPanel from "../../UI/ExpansionPanel/ExpansionPanel";
import Margin from "../../UI/Margin/Margin";
import Youtube from "../../UI/Youtube/Youtube";
import Card from "../../UI/Card/Card";
import JavaBasics from "./Topics/JavaBasics";

export default () => {
  return (
    <div style={{ marginTop: "100px" }}>
      <Paper elevation={2} style={{ padding: "30px" }}>
        <Typography component="h3" variant="display1" color="primary">
          Java
        </Typography>
        <Divider />
        <Margin />
        <Typography component="p" variant="body2">
          <b>Java</b> is a high-level programming language originally developed
          by Sun Microsystems and released in 1995. Java runs on a variety of
          platforms, such as Windows, Mac OS, and the various versions of UNIX.
          This tutorial gives a complete understanding of Java. This reference
          will take you through simple and practical approaches while learning
          Java Programming language.
        </Typography>
        <Margin />

        <Typography component="h3" variant="subheading" color="primary">
          History of Java ?
        </Typography>
        <Divider />
        <Margin />
        <Typography component="p" variant="body2">
          The history of Java is very interesting. Java was originally designed
          for interactive television, but it was too advanced technology for the
          digital cable television industry at the time. The history of java
          starts with Green Team. Java team members (also known as Green Team),
          initiated this project to develop a language for digital devices such
          as set-top boxes, televisions, etc. However, it was suited for
          internet programming. Later, Java technology was incorporated by
          Netscape.
        </Typography>
        <Margin />
        <Typography component="p" variant="body2">
          The principles for creating Java programming were "Simple, Robust,
          Portable, Platform-independent, Secured, High Performance,
          Multithreaded, Architecture Neutral, Object-Oriented, Interpreted and
          Dynamic".
        </Typography>
        <Margin />
        <Typography component="p" variant="body2">
          Currently, Java is used in internet programming, mobile devices,
          games, e-business solutions, etc. There are given the significant
          points that describe the history of Java.
        </Typography>
        <Margin />

        <Margin />

        <Typography component="h3" variant="subheading" color="primary">
          Who invented Java ?
        </Typography>
        <Divider />
        <Margin />
        <Typography component="p" variant="body2">
          <b>James Gosling</b>, Mike Sheridan, and Patrick Naughton initiated
          the Java language project in June 1991. The small team of sun
          engineers called Green Team.
        </Typography>

        <Margin />

        <Typography component="h3" variant="subheading" color="primary">
          Java Version History ?
        </Typography>
        <Divider />
        <Margin />
        <Typography component="p" variant="body2">
          1. JDK Alpha and Beta (1995)
        </Typography>
        <Typography component="p" variant="body2">
          2. JDK 1.0 (23rd Jan 1996)
        </Typography>
        <Typography component="p" variant="body2">
          3. JDK 1.1 (19th Feb 1997)
        </Typography>
        <Typography component="p" variant="body2">
          4. J2SE 1.2 (8th Dec 1998)
        </Typography>
        <Typography component="p" variant="body2">
          5. J2SE 1.3 (8th May 2000)
        </Typography>
        <Typography component="p" variant="body2">
          6. J2SE 1.4 (6th Feb 2002)
        </Typography>
        <Typography component="p" variant="body2">
          7. J2SE 5.0 (30th Sep 2004)
        </Typography>
        <Typography component="p" variant="body2">
          8. Java SE 6 (11th Dec 2006)
        </Typography>
        <Typography component="p" variant="body2">
          9. Java SE 7 (28th July 2011)
        </Typography>
        <Typography component="p" variant="body2">
          10. Java SE 8 (18th March 2014)
        </Typography>
        <Typography component="p" variant="body2">
          11. Java SE 9 (21st Sep 2017)
        </Typography>
        <Typography component="p" variant="body2">
          12. Java SE 10 (20th March 2018)
        </Typography>
      </Paper>
      <Margin />
      <Margin />
      <Paper style={{ padding: "10px" }} elevation={2}>
        <Typography component="h3" variant="headline" color="primary">
          Learn Java
        </Typography>
        <Margin />
        <ExpansionPanel heading="Java Basics" component={<JavaBasics />} />
      </Paper>
    </div>
  );
};
