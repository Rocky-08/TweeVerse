import React, { forwardRef } from "react";
import "./Post.css";
import { Avatar } from "@mui/material";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import VerifiedIcon from "@mui/icons-material/Verified";
import RepeatOutlinedIcon from "@mui/icons-material/RepeatOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import PublishOutlinedIcon from "@mui/icons-material/PublishOutlined";

const Post = forwardRef(
  ({ displayName, userName, verified, text, image, avatar }, ref) => {
    return (
      <div className="post" ref={ref}>
        <div className="post__avatar">
          <Avatar src={avatar} />
        </div>
        <div className="post__body">
          <div className="post__header">
            <div className="post__headerText">
              <h3>
                {displayName}
                <span className="post__headerSpecial">
                  {verified && (
                    <VerifiedIcon className="post__badge" fontSize="small" />
                  )}
                  @{userName}
                </span>
              </h3>
            </div>
            <div className="post__headerDescription">
              <p>{text}</p>
            </div>
          </div>
          <img src={image} />
          <div className="post__footer">
            <ChatBubbleOutlineIcon fontSize="small" />
            <RepeatOutlinedIcon fontSize="small" />
            <FavoriteBorderOutlinedIcon fontSize="small" />
            <PublishOutlinedIcon fontSize="small" />
          </div>
        </div>
      </div>
    );
  }
);

export default Post;
