import { Avatar, Container, Grid, Typography, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import db from "./firebase";
import RepeatOutlinedIcon from "@mui/icons-material/RepeatOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import PublishOutlinedIcon from "@mui/icons-material/PublishOutlined";

const ProfileTweet = ({
  displayName,
  username,
  text,
  image,
  avatar,
  like,
  id,
}) => {
  const [comments, setComment] = useState("");

  useEffect(() => {
    db.collection("posts")
      .doc(id)
      .collection("comments")
      .get()
      .then((snapshot) => {
        setComment(snapshot.size);
      });
  }, []);
  return (
    <>
      <Container style={{ border: "1px solid #e6ecf0" }}>
        <Grid container spacing={2} style={{ marginTop: "0.3rem" }}>
          <Grid item xs={2} sm={1}>
            <Avatar src={avatar} />
          </Grid>
          <Grid item xs={10} sm={11}>
            <Typography
              variant="caption"
              style={{
                fontSize: "1rem",
                fontWeight: "bold",
                marginLeft: "1rem",
              }}
            >
              {displayName}
            </Typography>
            <Typography
              variant="caption"
              style={{
                fontSize: "0.8rem",
                marginLeft: "0.5rem",
                color: "grey",
              }}
            >
              @{username}
            </Typography>
          </Grid>
        </Grid>
        <Container maxWidth="sm">
          <Typography variant="body1" style={{ margin: "0.5rem 0" }}>
            {text}
          </Typography>

          {image != "" ? (
            <img
              src={image}
              style={{
                marginBottom: "1rem",
                width: "100%",
                borderRadius: "1rem",
              }}
            />
          ) : (
            <></>
          )}
        </Container>
        <Container>
          <Grid container spacing={1}>
            <Grid item xs={4} style={{ textAlign: "center" }}>
              <Button style={{ color: "black" }}>
                <ChatBubbleOutlineIcon fontSize="small" />
                <Typography
                  variant="caption"
                  style={{
                    fontSize: "1rem",
                    marginLeft: "1rem",
                  }}
                >
                  {comments}
                </Typography>
              </Button>
            </Grid>
            <Grid item xs={4} style={{ textAlign: "center" }}>
              <RepeatOutlinedIcon fontSize="small" />
            </Grid>
            <Grid item xs={4} style={{ textAlign: "center" }}>
              <FavoriteBorderOutlinedIcon
                style={{ color: "red" }}
                fontSize="small"
              />
              <Typography
                variant="caption"
                style={{
                  marginLeft: "0.5rem",
                  fontSize: "1rem",
                }}
              >
                {like}
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Container>
    </>
  );
};

export default ProfileTweet;
