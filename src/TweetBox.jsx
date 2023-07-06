import { Avatar, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./TweetBox.css";
import db from "./firebase";
import Cookies from "js-cookie";

const TweetBox = () => {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");
  const [userdata, setUserdata] = useState([]);
  const userEmail = Cookies.get("userEmail");
  const userId = Cookies.get("userId");
  const [url, setUrl] = useState("");
  useEffect(() => {
    db.collection("users").onSnapshot((snapshot) =>
      setUserdata(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
    );

    db.collection("users")
      .get()
      .then((snapshot) => {
        snapshot.docs.map((doc) => {
          if (doc.id == userId) {
            setUrl(doc.data().image);
          }
        });
      });
  }, []);

  const sendTweet = (e) => {
    e.preventDefault();

    if (tweetMessage != "") {
      userdata.map((data) => {
        if (data.email == userEmail) {
          db.collection("posts").add({
            displayName: data.name,
            userName: data.username,
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            email: userEmail,
            avatar: url,
            like: [],
          });
        }
      });
    }

    setTweetImage("");
    setTweetMessage("");
  };
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src={url} />
          <input
            value={tweetMessage}
            onChange={(e) => setTweetMessage(e.target.value)}
            type="text"
            placeholder="What's happening ???"
            required
          />
        </div>
        <input
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          type="text"
          className="tweetBox__imageInput"
          placeholder="Optional: Enter Image Url"
        />
        <Button
          type="submit"
          onClick={sendTweet}
          className="tweetBox__tweetButton"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
};

export default TweetBox;
