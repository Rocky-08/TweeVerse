import { Container, Grid } from "@mui/material";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MessageIcon from "@mui/icons-material/Message";
import VerifiedIcon from "@mui/icons-material/Verified";
import PersonIcon from "@mui/icons-material/Person";
const Footer = () => {
  return (
    <>
      <Container style={{ position: "absolute" }}>
        <Grid container spacing={1} justifyContent="center">
          <Grid item xs={2}>
            <HomeIcon />
          </Grid>
          <Grid item xs={2}>
            <SearchIcon />
          </Grid>
          <Grid item xs={2}>
            <NotificationsNoneIcon />
          </Grid>
          <Grid item xs={2}>
            <MessageIcon />
          </Grid>
          <Grid item xs={2}>
            <VerifiedIcon />
          </Grid>
          <Grid item xs={2}>
            <PersonIcon />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Footer;
