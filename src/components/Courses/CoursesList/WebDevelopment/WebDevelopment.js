import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Youtube from "../../../UI/Youtube/Youtube";
import Margin from "../../../UI/Margin/Margin";
import HtmlElement from "./Topics/HTML5.js";
import JavaScript from "./Topics/JS";

import ExpansionPanel from "../../../UI/ExpansionPanel/ExpansionPanel";
import ScrollToTop from "../../../UI/ScrollToTop/ScrollToTop";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  }
});

class DataStructures extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div style={{ marginTop: "100px", width: "95vw" }}>
        <ScrollToTop />
        <Paper className={classes.root} elevation={0}>
          <Typography variant="display1" component="h3" color="primary">
            Web Development
          </Typography>
          <Margin />
          <Margin />
          <Typography variant="body2" component="p">
            <b>Web development</b> is the work involved in developing a web site
            for the Internet (World Wide Web) or an intranet (a private
            network). Web development can range from developing a simple single
            static page of plain text to complex web-based internet applications
            (web apps) electronic businesses, and social network services. A
            more comprehensive list of tasks to which web development commonly
            refers, may include web engineering, web design, web content
            development, client liaison, client-side/server-side scripting, web
            server and network security configuration, and e-commerce
            development. Among web professionals, "web development" usually
            refers to the main non-design aspects of building web sites: writing
            markup and coding. Most recently Web development has come to mean
            the creation of content management systems (CMS). These CMS can be
            made from scratch, proprietary or open source. In broad terms the
            CMS acts as middleware between the database and the user through the
            browser. A principle benefit of a CMS is that it allows
            non-technical people to make changes to their web site without
            having technical knowledge.
          </Typography>
          <Margin />

          <Margin />
          <Margin />

          <Margin />
          <Youtube id="Zftx68K-1D4" />
          <Margin />

          <Typography variant="headline" component="h3" color="primary">
            what is HTML ?
          </Typography>
          <Margin />
          <Typography component="p" variant="body2">
            HTML is the standard markup language for creating Web pages.
          </Typography>
          <Margin />
          <ul>
            <li>
              <Typography component="p" variant="body2">
                HTML stands for Hyper Text Markup Language
              </Typography>
            </li>
            <li>
              <Typography component="p" variant="body2">
                HTML describes the structure of Web pages using markup
              </Typography>
            </li>
            <li>
              <Typography component="p" variant="body2">
                HTML elements are the building blocks of HTML pages
              </Typography>
            </li>
            <li>
              <Typography component="p" variant="body2">
                HTML elements are represented by tags
              </Typography>
            </li>
            <li>
              <Typography component="p" variant="body2">
                HTML tags label pieces of content such as "heading",
                "paragraph", "table", and so on
              </Typography>
            </li>
            <li>
              <Typography component="p" variant="body2">
                Browsers do not display the HTML tags, but use them to render
                the content of the page
              </Typography>
            </li>
          </ul>

          <Youtube id="UB1O30fR-EE" />
          <Margin />
          <Margin />
          <Typography variant="headline" component="h3" color="primary">
            what is CSS ?
          </Typography>
          <Margin />
          <Typography component="p" variant="body2">
            CSS is a language that describes the style of an HTML document.CSS
            describes how HTML elements should be displayed.
          </Typography>
          <Margin />
          <ul>
            <li>
              <Typography component="p" variant="body2">
                CSS stands for Cascading Style Sheets
              </Typography>
            </li>
            <li>
              <Typography component="p" variant="body2">
                CSS describes how HTML elements are to be displayed on screen,
                paper, or in other media
              </Typography>
            </li>
            <li>
              <Typography component="p" variant="body2">
                CSS saves a lot of work. It can control the layout of multiple
                web pages all at once
              </Typography>
            </li>
            <li>
              <Typography component="p" variant="body2">
                External stylesheets are stored in CSS files
              </Typography>
            </li>
          </ul>
          <Youtube id="yfoY53QXEnI" />
          <Margin />
          <Typography variant="headline" component="h3" color="primary">
            what is JavaScript ?
          </Typography>
          <Margin />
          <Typography component="p" variant="body2">
            JavaScript is the programming language of HTML and the
            Web.JavaScript to program the behavior of web pages adding
            functionality to a website .
          </Typography>
          <Youtube id="vEROU2XtPR8" />
          <Margin />
          <Margin />
          <div style={{ marginTop: "30px" }}>
            <ExpansionPanel
              heading={"Learn Html and Css"}
              component={<HtmlElement />}
            />
            <ExpansionPanel
              heading={"Learn Java Script"}
              component={<JavaScript />}
            />
          </div>
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(DataStructures);
