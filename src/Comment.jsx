import {
  Alert,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import Cookies from "js-cookie";
import db from "./firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const Comment = ({
  setReplyBox,
  setReplyMessage,
  handleReply,
  id,
  //   displayName,
  //   userName,
  //   avatar,
}) => {
  const [error, setError] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    const userId = Cookies.get("userId");
    const data = new FormData(e.currentTarget);
    console.log(data.get("reply"));

    db.collection("users")
      .doc(userId)
      .get()
      .then((doc) => {
        if (data.get("reply") != "") {
          const comment = {
            userid: userId,
            comment: data.get("reply"),
            displayname: doc.data().name,
            username: doc.data().username,
            avatarr: doc.data().image,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
          };

          db.collection("posts").doc(id).collection("comments").add(comment);
          setReplyBox(false);
        } else {
          setError(true);
          setTimeout(() => {
            setError(false);
          }, 1200);
        }
      });
  };
  return (
    <>
      <Dialog open={true}>
        {error && <Alert severity="error">Enter a Valid Reply</Alert>}
        <DialogTitle fontWeight="bold" maxWidth="md">
          Tweet Reply
          <Button
            style={{
              color: "black",
              float: "right",
            }}
            onClick={handleReply}
          >
            <CloseIcon align="right" fontSize="small" />
          </Button>
        </DialogTitle>
        <DialogContent style={{ marginTop: "1rem", width: "20rem" }}>
          <form onSubmit={handleSubmit}>
            <TextField
              style={{ width: "100%" }}
              autoFocus
              onChange={(e) => {
                setReplyMessage(e.target.value);
              }}
              margin="dense"
              id="name"
              label="Tweet Your Reply"
              type="text"
              name="reply"
              fullWidth
              variant="standard"
            />

            <DialogActions>
              <Button type="submit">Reply</Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};
export default Comment;
