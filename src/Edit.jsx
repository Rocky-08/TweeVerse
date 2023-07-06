import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import db, { storage } from "./firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import Cookies from "js-cookie";
import { update } from "firebase/database";
import { collection, getDocs } from "firebase/firestore";
const Edit = ({ handleEdit, setEdit }) => {
  const userId = Cookies.get("userId");
  const uniqueName = v4();
  const [image, setImage] = useState();
  const [newname, setName] = useState("");
  const [newusername, setUsername] = useState("");
  const [newbio, setBio] = useState("");
  const userEmail = Cookies.get("userEmail");
  const handleImage = (event) => {
    setImage(event.target.files[0]);
    console.log(event.target.files[0]);
  };

  const date = new Date();
  const day = date.getDay();
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(e.target.value);

    if (newname != "") {
      db.collection("users").doc(userId).update({ name: newname });
      const collectionRef = db.collection("posts");
      const query = collectionRef.where("email", "==", userEmail);
      query.get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const documentRef = collectionRef.doc(doc.id);
          documentRef.update({ displayName: newname });
        });
      });
    }

    if (newusername != "") {
      db.collection("users").doc(userId).update({ username: newusername });
      const collectionRef = db.collection("posts");
      const query = collectionRef.where("email", "==", userEmail);
      query.get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const documentRef = collectionRef.doc(doc.id);
          documentRef.update({ userName: newusername });
        });
      });
    }

    if (newbio != "") {
      db.collection("users").doc(userId).update({ bio: newbio });
      const collectionRef = db.collection("posts");
      const query = collectionRef.where("email", "==", userEmail);
      query.get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const documentRef = collectionRef.doc(doc.id);
          documentRef.update({ bio: newbio });
        });
      });
    }

    if (image) {
      const imageRef = ref(storage, `images/${image.name + uniqueName}`);
      uploadBytes(imageRef, image).then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url) => {
          if (url.includes(uniqueName)) {
            db.collection("users").doc(userId).update({ image: url });

            const collectionRef = db.collection("posts");
            const query = collectionRef.where("email", "==", userEmail);
            query.get().then((querySnapshot) => {
              querySnapshot.forEach((doc) => {
                const documentRef = collectionRef.doc(doc.id);
                documentRef.update({ avatar: url });
              });
            });
          }
        });
      });
    }
    setEdit(false);
  };
  return (
    <>
      <Dialog open={true}>
        <DialogTitle fontWeight="bold">
          Edit Your Profile
          <Button
            style={{
              color: "black",
              float: "right",
            }}
          >
            <CloseIcon onClick={handleEdit} align="right" fontSize="small" />
          </Button>
        </DialogTitle>
        <DialogContent style={{ marginTop: "1rem" }}>
          <form onSubmit={handleSubmit}>
            <TextField
              type="file"
              name="image"
              onChange={handleImage}
              fullWidth
              style={{
                width: "100%",
                border: "1px solid #e6ecf0",
                outline: "none",
              }}
            />
            <TextField
              autoFocus
              onChange={(e) => {
                setName(e.target.value);
              }}
              margin="dense"
              id="name"
              label="Name"
              type="name"
              fullWidth
              variant="standard"
            />
            <TextField
              autoFocus
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              margin="dense"
              id="username"
              label="UserName"
              type="username"
              fullWidth
              variant="standard"
            />
            <TextField
              autoFocus
              onChange={(e) => {
                setBio(e.target.value);
              }}
              margin="dense"
              id="bio"
              label="Bio"
              type="bio"
              fullWidth
              variant="standard"
            />
            <DialogActions>
              <Button type="submit">Save</Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Edit;
