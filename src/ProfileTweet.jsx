import { Avatar, Container, Grid, Typography } from "@mui/material";
import React from "react";

const ProfileTweet = () => {
  return (
    <>
      <Container style={{ border: "1px solid #e6ecf0" }}>
        <Grid container spacing={2} style={{ padding: "1rem" }}>
          <Grid item xs={2}>
            <Avatar src="https://pbs.twimg.com/media/Fz3p_BLWIAUhq4L?format=jpg&name=large" />
          </Grid>
          <Grid item xs={10}>
            <Typography
              variant="caption"
              style={{ fontSize: "1rem", fontWeight: "bold" }}
            >
              Kartik Goyal
            </Typography>
            <Typography
              variant="caption"
              style={{
                fontSize: "0.8rem",
                marginLeft: "0.5rem",
                color: "grey",
              }}
            >
              @karry
            </Typography>
          </Grid>
        </Grid>
        <Container>
          <Typography variant="body1">Tweet Description</Typography>
          <img src="" />
        </Container>
      </Container>
    </>
  );
};

export default ProfileTweet;
