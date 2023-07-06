import React from "react";
import "./Widgets.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from "@mui/icons-material/Search";
import Follow from "./Follow";

const Widgets = () => {
  return (
    <>
      <div className="widgets">
        <div className="widgets__input">
          <SearchIcon className="widgets__searchIcon" />
          <input type="text" placeholder="Search Twitter" />
        </div>

        <div className="widgets__widgetContainer">
          <h2>What to Follow</h2>
          {/* <TwitterTweetEmbed tweetId={"858551177860055040"} />
          <TwitterTimelineEmbed
            sourceType="profile"
            screenName="cleverqazi"
            options={{ height: 400 }}
          />
          <TwitterShareButton
            url={"https://facebook.com/cleverprogrammer"}
            options={{ text: "#reactjs is awesome", via: "cleverqazi" }}
          /> */}

          <Follow
            avatar="https://pbs.twimg.com/profile_images/1562753500726976514/EPSUNyR3_400x400.jpg"
            displayName="Virat Kohli"
            userName="imVkohli"
          />
          <Follow
            avatar="https://pbs.twimg.com/profile_images/994592419705274369/RLplF55e_400x400.jpg"
            displayName="Mr Beast"
            userName="MrBeast"
          />
          <Follow
            avatar="https://pbs.twimg.com/media/Fz3p_BLWIAUhq4L?format=jpg&name=small"
            displayName="Shubman Gill"
            userName="ShubmanGill"
          />
          <Follow
            avatar="https://pbs.twimg.com/profile_images/1486761402853380113/3ifAqala_400x400.jpg"
            displayName="Fabrizio Romano"
            userName="FabrizioRomano"
          />
        </div>
      </div>
    </>
  );
};

export default Widgets;
