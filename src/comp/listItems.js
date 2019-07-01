import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PeopleIcon from "@material-ui/icons/People";
import BarChartIcon from "@material-ui/icons/BarChart";
import LayersIcon from "@material-ui/icons/Layers";
import AssignmentIcon from "@material-ui/icons/Assignment";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import { Show } from "../components/Show";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles({
  bigAvatar: {
    margin: 10,
    width: 60,
    height: 60
  }
});

export const mainListItems = (
  <div>
    <Avatar
      marginLeft="30%"
      alt="Remy Sharp"
      src="http://i67.tinypic.com/200tm3p.jpg"
      className={useStyles.bigAvatar}
    />
    <p className="user">
      Alexander Pierce
      <br /> Online
    </p>
    <Divider />
    <p className="mainnavigation">MAIN NAVIGATION</p>
    <Divider />
    <ListItem button color="#fff">
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <Link to="/dashboard"><ListItemText primary="Dashboard" /></Link>
    </ListItem>
    <ListItem button color="#fff">
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <Link to="/"><ListItemText primary="Agregar dashboard"></ListItemText></Link>
    </ListItem>
    <p style={{ fontSize: '12px', marginLeft: '3%', color: 'white' }}>
     
    </p>
  </div>
);
