import React from "react";
import PropTypes from "prop-types";
import { Switch, Route, Link } from "react-router-dom";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import { withRouter } from "react-router";
import Typography from "@material-ui/core/Typography";

import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import {
  MailFolderListItems,
  OtherMailFolderListItems,
  CoursesRouteList
} from "./TileData";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

// all components
import HomePage from "../HomePage/HomePage";
import Courses from "../Courses/Courses";
import WebDevelopment from "../Courses/CoursesList/WebDevelopment/WebDevelopment";
import AndroidDevelopment from "../Courses/CoursesList/AndroidDevelopment/AndroidDevelopment";
import DataScience from "../Courses/CoursesList/DataScience/DataScience";
import BlockChain from "../Courses/CoursesList/BlockChain/BlockChain";
import Algorithms from "../Courses/CoursesList/Algorithms/Algorithms";
import ProgrammingLanguages from "../Courses/CoursesList/ProgrammingLanguages/ProgrammingLanguages";
import DataStructures from "../Courses/CoursesList/DataStructures/DataStructures";
import ArtificialIntelligance from "../Courses/CoursesList/ArtificialIntelligance/ArtificialIntelligance";

import Java from "../Languages/Java/Java";
import Python from "../Languages/Python/Python";
import C from "../Languages/C/C";
import Cpp from "../Languages/Cpp/Cpp";
import JavaScript from "../Languages/JavaScript/JavaScript";

const drawerWidth = 240;

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  appFrame: {
    zIndex: 1,
    position: "relative",
    display: "flex",
    width: "100%"
  },
  appBar: {
    position: "absolute",
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  "appBarShift-left": {
    marginLeft: drawerWidth
  },
  "appBarShift-right": {
    marginRight: drawerWidth
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20
  },
  hide: {
    display: "none"
  },
  drawerPaper: {
    position: "relative",
    width: drawerWidth
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding:
      window.innerWidth < 500 ? theme.spacing.unit * 1 : theme.spacing.unit * 3,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  "content-left": {
    marginLeft: -drawerWidth
  },
  "content-right": {
    marginRight: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  "contentShift-left": {
    marginLeft: 0
  },
  "contentShift-right": {
    marginRight: 0
  }
});

class MainContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      open: false,
      anchor: "left",
      value: 0,
      isHome: true
    };
  }

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  handleChangeAnchor = event => {
    this.setState({
      anchor: event.target.value
    });
  };

  render() {
    const { classes, theme } = this.props;
    const { anchor, open } = this.state;

    const drawer = (
      <Drawer
        variant="persistent"
        anchor={anchor}
        open={open}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={this.handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        {this.state.isHome ? (
          <React.Fragment>
            <List>
              <MailFolderListItems click={this.handleDrawerClose} />
            </List>
            <Divider />
            <List>
              <OtherMailFolderListItems click={this.handleDrawerClose} />
            </List>
          </React.Fragment>
        ) : (
          <List>
            <CoursesRouteList click={this.handleDrawerClose} />
          </List>
        )}
      </Drawer>
    );

    let before = null;

    if (anchor === "left") {
      before = drawer;
    }
    return (
      <div className={classes.root}>
        <div className={classes.appFrame}>
          <AppBar
            className={classNames(classes.appBar, {
              [classes.appBarShift]: open,
              [classes[`appBarShift-${anchor}`]]: open
            })}
          >
            <Toolbar disableGutters={!open}>
              <IconButton
                color="inherit"
                aria-label="Open drawer"
                onClick={this.handleDrawerOpen}
                className={classNames(classes.menuButton, open && classes.hide)}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="title" color="inherit" noWrap>
                Hour Of Code
              </Typography>
              <div style={{ position: "absolute", right: "5px" }}>
                <Tabs
                  value={this.state.value}
                  indicatorColor="primary"
                  textColor="primary"
                  style={
                    this.state.open ? { display: "none" } : { display: "block" }
                  }
                >
                  <Tab
                    label="Courses"
                    className={classes.tabLink}
                    to="/courses"
                    component={Link}
                    style={{ color: "#fff" }}
                  />
                </Tabs>
              </div>
            </Toolbar>
          </AppBar>
          {before}
          <main
            className={classNames(
              classes.content,
              classes[`content-${anchor}`],
              {
                [classes.contentShift]: open,
                [classes[`contentShift-${anchor}`]]: open
              }
            )}
          >
            <Switch>
              <Route exact path="/" component={HomePage} />

              <Route exact path="/courses" component={Courses} />
              <Route exact path="/web_development" component={WebDevelopment} />
              <Route
                exact
                path="/android_development"
                component={AndroidDevelopment}
              />
              <Route exact path="/data_science" component={DataScience} />
              <Route
                exact
                path="/artificial_intelligence"
                component={ArtificialIntelligance}
              />
              <Route exact path="/algorithms" component={Algorithms} />
              <Route exact path="/data_structures" component={DataStructures} />

              <Route exact path="/block_chain" component={BlockChain} />
              <Route
                exact
                path="/programming_languages"
                component={ProgrammingLanguages}
              />
              <Route path="/programming_languages/c" component={C} />
              <Route path="/programming_languages/c++" component={Cpp} />
              <Route path="/programming_languages/java" component={Java} />
              <Route
                path="/programming_languages/javascript"
                component={JavaScript}
              />
              <Route path="/programming_languages/python" component={Python} />
            </Switch>
          </main>
        </div>
      </div>
    );
  }
}

MainContainer.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(
  withRouter(MainContainer)
);
