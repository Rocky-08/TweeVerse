import React from "react";
import "./SidebarOption.css";
import { Grid, useMediaQuery, useTheme } from "@mui/material";
const SidebarOption = ({ active, text, Icon, handleProfile }) => {
  const theme = useTheme();

  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      <div className={`sidebarOptions ${active && "sidebarOptions--active"}`}>
        <Icon />
        {!isMatch && <h2>{text}</h2>}
      </div>

    </>
  );
};

export default SidebarOption;
