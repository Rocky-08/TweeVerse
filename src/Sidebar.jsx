import React from "react";
import "./Sidebar.css";
import Twitter from "@mui/icons-material/Twitter";
import HomeIcon from "@mui/icons-material/Home";
import SidebarOption from "./SidebarOption";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MessageIcon from "@mui/icons-material/Message";
import VerifiedIcon from "@mui/icons-material/Verified";
import PersonIcon from "@mui/icons-material/Person";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Button, Container, Grid } from "@mui/material";
import { Link } from "react-router-dom";

const Sidebar = ({}) => {
  return (
    <>
      <div className="sidebar">
        <Twitter className="sidebar__twitterIcon" />
        <Link to="/main" style={{ textDecoration: "none" }}>
          <SidebarOption active Icon={HomeIcon} text="Home" />
        </Link>
        <SidebarOption Icon={SearchIcon} text="Explore" />
        <SidebarOption Icon={NotificationsNoneIcon} text="Notifications" />
        <SidebarOption Icon={MessageIcon} text="Message" />
        <Link to="/profile" style={{ textDecoration: "none" }}>
          <SidebarOption Icon={PersonIcon} text="Profile" />
        </Link>
        <SidebarOption Icon={VerifiedIcon} text="Verified" />
        <SidebarOption Icon={MoreHorizIcon} text="More" />
      </div>
    </>
  );
};

export default Sidebar;
