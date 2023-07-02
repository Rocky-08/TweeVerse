import { Avatar, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import VerifiedIcon from "@mui/icons-material/Verified";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import ProfileTweet from "./ProfileTweet";
import "./Profile.css";
const Profile = () => {
  return (
    <>
      <Container
        className="profile"
        style={{
          flex: 1,
          minWidth: "fit-content",
          overflow: "scroll",
        }}
      >
        <Container style={{ marginTop: "1rem" }}>
          <ArrowBackIosIcon />
          <Typography
            variant="h6"
            style={{
              marginLeft: "3rem",
              marginBottom: "1rem",
              fontWeight: "bold",
            }}
          >
            Kartik Goyal
            {
              <VerifiedIcon
                fontSize="small"
                style={{ color: "#1d9bf0", marginLeft: "0.5rem" }}
              />
            }{" "}
          </Typography>
        </Container>
        <Container
          style={{
            backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZk7Er2yQBRAqHCXrXt7W_UJ1lm-OKClU0M_kfPoEW&s")`,
            height: "10rem",
          }}
        ></Container>
        <Container>
          <Grid container spacing={2}>
            <Grid item md={6} sm={2} xs={2} align="left">
              <Avatar
                src=""
                style={{
                  width: "7rem",
                  height: "7rem",
                  marginTop: "-3rem",
                  marginLeft: "0.6rem",
                  border: "0.3rem solid black",
                }}
              />
            </Grid>
            <Grid item md={6} sm={10} xs={10} align="right">
              <Button
                variant="outlined"
                style={{
                  borderRadius: "2rem",
                  marginTop: "2rem",
                }}
              >
                Edit
              </Button>
            </Grid>
          </Grid>
        </Container>
        <Container>
          <Typography
            variant="h6"
            style={{ fontWeight: "bold", marginTop: "1rem" }}
          >
            Kartik Goyal
            {
              <VerifiedIcon
                fontSize="small"
                style={{ color: "#1d9bf0", marginLeft: "0.5rem" }}
              />
            }{" "}
          </Typography>
          <Typography variant="body1" style={{ color: "grey" }}>
            @karry
          </Typography>
        </Container>

        {/* // Description */}

        <Container>
          <Typography
            variant="body1"
            paragraph
            style={{ marginTop: "0.5rem", fontWeight: "bold" }}
          >
            Official Account of Kartik Goyal , Professional Artist
          </Typography>
        </Container>
        <Container>
          <Typography variant="body1" style={{ color: "grey" }}>
            {<CalendarMonthOutlinedIcon fontSize="small" />}
            <Typography
              variant="caption"
              style={{ marginLeft: "0.5rem", fontSize: "0.9rem" }}
            >
              Joined July 2023
            </Typography>
          </Typography>
        </Container>
        <Container style={{ paddingTop: "1rem" }}>
          <Typography variant="caption" style={{ fontSize: "1rem" }}>
            2 <span style={{ color: "grey" }}>Following</span>
          </Typography>
          <Typography
            variant="caption"
            style={{ marginLeft: "2rem", fontSize: "1rem" }}
          >
            10 <span style={{ color: "grey" }}>Followers</span>
          </Typography>
        </Container>
        <ProfileTweet />
        <ProfileTweet />
        <ProfileTweet />
        <ProfileTweet />
        <ProfileTweet />
      </Container>
    </>
  );
};

export default Profile;
