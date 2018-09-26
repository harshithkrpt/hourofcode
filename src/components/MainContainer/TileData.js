import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import BookMarks from "@material-ui/icons/Bookmarks";
import SchoolIcon from "@material-ui/icons/School";
import HomeIcon from "@material-ui/icons/Apps";
import { Link } from "react-router-dom";

export const MailFolderListItems = props => {
  return (
    <div onClick={props.click}>
      <ListItem button component={Link} to="/">
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItem>
    </div>
  );
};
export const OtherMailFolderListItems = props => {
  return (
    <div onClick={props.click}>
      <ListItem button component={Link} to="/courses">
        <ListItemIcon>
          <SchoolIcon />
        </ListItemIcon>
        <ListItemText primary="Courses" />
      </ListItem>
      <ListItem button component={Link} to="/programming_languages/java">
        <ListItemIcon>
          <BookMarks />
        </ListItemIcon>
        <ListItemText primary="Java" />
      </ListItem>
    </div>
  );
};

export const CoursesRouteList = props => {
  return (
    <div onClick={props.click}>
      <ListItem button component={Link} to="/web_development">
        <ListItemIcon>
          <SchoolIcon />
        </ListItemIcon>
        <ListItemText primary="Courses" />
      </ListItem>
      <ListItem button component={Link} to="/android_development">
        <ListItemIcon>
          <SchoolIcon />
        </ListItemIcon>
        <ListItemText primary="Courses" />
      </ListItem>
      <ListItem button component={Link} to="/data_science">
        <ListItemIcon>
          <SchoolIcon />
        </ListItemIcon>
        <ListItemText primary="Courses" />
      </ListItem>
      <ListItem button component={Link} to="/web_development">
        <ListItemIcon>
          <SchoolIcon />
        </ListItemIcon>
        <ListItemText primary="Courses" />
      </ListItem>
      <ListItem button component={Link} to="/web_development">
        <ListItemIcon>
          <SchoolIcon />
        </ListItemIcon>
        <ListItemText primary="Courses" />
      </ListItem>
    </div>
  );
};
