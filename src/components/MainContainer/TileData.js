import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
// import InboxIcon from "@material-ui/icons/MoveToInbox";
// import DraftsIcon from "@material-ui/icons/Drafts";
// import StarIcon from "@material-ui/icons/Star";
// import SendIcon from "@material-ui/icons/Send";
import MailIcon from "@material-ui/icons/Mail";
// import DeleteIcon from "@material-ui/icons/Delete";
// import ReportIcon from "@material-ui/icons/Report";
// import House from "@material-ui/icons/House";
import { Link } from "react-router-dom";

export const mailFolderListItems = (
  <div>
    <ListItem button component={Link} to="/">
      <ListItemText primary="Home" />
    </ListItem>
    {/* <ListItem button>
      <ListItemText primary="Starred" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <SendIcon />
      </ListItemIcon>
      <ListItemText primary="Send mail" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <DraftsIcon />
      </ListItemIcon>
      <ListItemText primary="Drafts" />
    </ListItem> */}
  </div>
);

export const otherMailFolderListItems = (
  <div>
    <ListItem button component={Link} to="/courses">
      <ListItemIcon>
        <MailIcon />
      </ListItemIcon>
      <ListItemText primary="Courses" />
    </ListItem>
    {/* <ListItem button>
      <ListItemIcon>
        <DeleteIcon />
      </ListItemIcon>
      <ListItemText primary="Trash" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ReportIcon />
      </ListItemIcon>
      <ListItemText primary="Spam" />
    </ListItem> */}
  </div>
);

export const coursesRouteList = (
  <div>
    <ListItem button component={Link} to="/web_development">
      <ListItemIcon>
        <MailIcon />
      </ListItemIcon>
      <ListItemText primary="Courses" />
    </ListItem>
    <ListItem button component={Link} to="/android_development">
      <ListItemIcon>
        <MailIcon />
      </ListItemIcon>
      <ListItemText primary="Courses" />
    </ListItem>
    <ListItem button component={Link} to="/data_science">
      <ListItemIcon>
        <MailIcon />
      </ListItemIcon>
      <ListItemText primary="Courses" />
    </ListItem>
    <ListItem button component={Link} to="/web_development">
      <ListItemIcon>
        <MailIcon />
      </ListItemIcon>
      <ListItemText primary="Courses" />
    </ListItem>
    <ListItem button component={Link} to="/web_development">
      <ListItemIcon>
        <MailIcon />
      </ListItemIcon>
      <ListItemText primary="Courses" />
    </ListItem>
  </div>
);
