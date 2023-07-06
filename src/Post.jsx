import React, { forwardRef, useEffect, useState } from "react";
import "./Post.css";
import db from "./firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { Avatar, Button, Container, Grid, Typography } from "@mui/material";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import VerifiedIcon from "@mui/icons-material/Verified";
import RepeatOutlinedIcon from "@mui/icons-material/RepeatOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import PublishOutlinedIcon from "@mui/icons-material/PublishOutlined";
import Cookies from "js-cookie";
import Comment from "./Comment";
import ShowComments from "./ShowComments";

const Post = forwardRef(
  ({ id, displayName, userName, verified, text, image, avatar }, ref) => {
    const userId = Cookies.get("userId");
    const handleLike = (userId) => {
      db.collection("posts")
        .doc(id)
        .update({
          like: firebase.firestore.FieldValue.arrayUnion(userId),
        });
    };

    const [likes, setLikes] = useState("");
    const [comments, setComment] = useState("");
    useEffect(() => {
      db.collection("posts")
        .doc(id)
        .get()
        .then((doc) => {
          if (doc.exists) {
            setLikes(doc.data().like.length);
          }
        });

      db.collection("posts")
        .doc(id)
        .collection("comments")
        .get()
        .then((snapshot) => {
          setComment(snapshot.size);
        });
    });

    const [replyBox, setReplyBox] = useState(false);
    const [replyMessage, setReplyMessage] = useState("");
    const [showcomments, setShowComment] = useState(false);

    const handleReply = () => {
      setReplyBox(!replyBox);
    };

    const handleComments = () => {
      setShowComment(!showcomments);
    };
    return (
      <>
        {replyBox && (
          <Comment
            setReplyMessage={setReplyMessage}
            setReplyBox={setReplyBox}
            handleReply={handleReply}
            id={id}
            displayName={displayName}
            userName={userName}
            avatar={avatar}
          />
        )}

        {showcomments && (
          <ShowComments id={id} handleComments={handleComments} />
        )}

        <Container style={{ border: "1px solid #e6ecf0" }} ref={ref} id={id}>
          <Container onClick={handleComments}>
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
                  {displayName} <VerifiedIcon style={{ color: "	#4FB6EC" }} />
                </Typography>
                <Typography
                  variant="caption"
                  style={{
                    fontSize: "0.8rem",
                    marginLeft: "0.5rem",
                    color: "grey",
                  }}
                >
                  @{userName}
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
          </Container>
          <Container>
            <Grid container spacing={1}>
              <Grid item xs={4} style={{ textAlign: "center" }}>
                <Button style={{ color: "black" }} onClick={handleReply}>
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
                <Button style={{ color: "black" }}>
                  <RepeatOutlinedIcon fontSize="small" />
                </Button>
              </Grid>
              <Grid item xs={4} style={{ textAlign: "center" }}>
                <Button
                  style={{ color: "black" }}
                  onClick={() => handleLike(userId)}
                >
                  <FavoriteBorderOutlinedIcon
                    style={{ color: "red" }}
                    fontSize="small"
                  />
                </Button>
                <Typography
                  variant="caption"
                  style={{
                    fontSize: "1rem",
                  }}
                >
                  {likes}
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </Container>
      </>
    );
  }
);

export default Post;
