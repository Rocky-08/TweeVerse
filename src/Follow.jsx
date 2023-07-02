import { Avatar, Container, Grid, Typography } from "@mui/material";
import React from "react";

const Follow = ({ avatar, displayName, userName }) => {
  return (
    <>
      <Container style={{ marginTop: "1rem" }}>
        <Grid container spacing={6}>
          <Grid item md={3} sm={3}>
            <Avatar src={avatar} />
          </Grid>
          <Grid item md={9} sm={9}>
            <Typography variant="body1" style={{ fontWeight: "bold" }}>
              {displayName}
            </Typography>
            <Typography variant="caption">@{userName}</Typography>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Follow;
