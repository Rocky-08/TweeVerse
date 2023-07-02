import React, { useState } from "react";
import "./App.css";
import Sidebar from "./Sidebar";

import Widgets from "./Widgets";
import { useMediaQuery, useTheme } from "@mui/material";
import Profile from "./Profile";

const ProfileUser = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  //   const [profile, setProfile] = useState(false);
  //   const handleProfile = () => {
  //     setProfile(true);
  //   };
  return (
    <>
      <div className="app">
        <Sidebar />

        <Profile />

        {!isMatch && <Widgets />}
      </div>
    </>
  );
};

export default ProfileUser;
