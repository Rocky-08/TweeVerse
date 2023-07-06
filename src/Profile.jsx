import { Avatar, Button, Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import VerifiedIcon from "@mui/icons-material/Verified";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import ProfileTweet from "./ProfileTweet";
import db from "./firebase";
import Cookies from "js-cookie";
import "./Profile.css";
import Edit from "./Edit";

const Profile = () => {
  const [profileData, setProfileData] = useState([]);
  const [tweetData, setTweetData] = useState([]);
  const userEmail = Cookies.get("userEmail");
  const [edit, setEdit] = useState(false);
  const [imageUrl, setImageUrl] = useState([]);
  const [totalComment, setTotal] = useState();
  const date = new Date();
  const day = date.getDay();
  const handleEdit = () => {
    setEdit(!edit);
  };

  useEffect(() => {
    db.collection("users").onSnapshot((snapshot) =>
      setProfileData(
        snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      )
    );
    db.collection("posts").onSnapshot((snapshot) =>
      setTweetData(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
    );
  }, []);

  return (
    <>
      {edit && <Edit setEdit={setEdit} handleEdit={handleEdit} />}
      {profileData.map((data) =>
        data.email == userEmail ? (
          <Container
            className="profile"
            style={{
              flex: 1,

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
                {data.name}
                {
                  <VerifiedIcon
                    fontSize="small"
                    style={{ color: "#1d9bf0", marginLeft: "0.5rem" }}
                  />
                }
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
                    src={data.image}
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
                    onClick={handleEdit}
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
                {data.name}
                {
                  <VerifiedIcon
                    fontSize="small"
                    style={{ color: "#1d9bf0", marginLeft: "0.5rem" }}
                  />
                }
              </Typography>
              <Typography variant="body1" style={{ color: "grey" }}>
                @{data.username}
              </Typography>
            </Container>

            {/* // Description */}

            <Container>
              <Typography
                variant="body1"
                paragraph
                style={{ marginTop: "0.5rem", fontWeight: "bold" }}
              >
                {data.bio == "" ? <></> : data.bio}
              </Typography>
            </Container>
            <Container>
              <Typography variant="body1" style={{ color: "grey" }}>
                {<CalendarMonthOutlinedIcon fontSize="small" />}
                <Typography
                  variant="caption"
                  style={{ marginLeft: "0.5rem", fontSize: "0.9rem" }}
                >
                  Joined {data.currmonth} {data.curryear}
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
            {tweetData.map((tweet) =>
              tweet.email == userEmail ? (
                <ProfileTweet
                  displayName={tweet.displayName}
                  username={tweet.userName}
                  text={tweet.text}
                  image={tweet.image}
                  avatar={tweet.avatar}
                  like={tweet.like.length}
                  id={tweet.id}
                />
              ) : (
                <></>
              )
            )}
            {/*             
            <ProfileTweet />
            <ProfileTweet />
            <ProfileTweet />
            <ProfileTweet /> */}
          </Container>
        ) : (
          <></>
        )
      )}
    </>
  );
};

export default Profile;
