import React, { useEffect, useState } from "react";
import db from "./firebase";
import {
  Avatar,
  Button,
  Container,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import VerifiedIcon from "@mui/icons-material/Verified";
const ShowComments = ({ id, handleComments }) => {
  const [allComments, setAllComments] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .doc(id)
      .collection("comments")
      .onSnapshot((snapshot) =>
        setAllComments(
          snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        )
      );
  });
  return (
    <>
      <Dialog open={true} fullScreen>
        <DialogTitle fontWeight="bold" maxWidth="lg">
          Comments
          <Button
            style={{
              color: "black",
              float: "right",
            }}
            onClick={handleComments}
          >
            <CloseIcon align="right" fontSize="small" />
          </Button>
        </DialogTitle>
        <DialogContent style={{ marginTop: "1rem" }} maxWidth="md">
          <Container>
            {allComments.map((data) => (
              <>
                <Container style={{ border: "1px solid #e6ecf0" }}>
                  <Grid
                    container
                    spacing={2}
                    style={{
                      marginTop: "0.3rem",
                    }}
                  >
                    <Grid item xs={2} sm={1}>
                      <Avatar src={data.avatarr} />
                    </Grid>
                    <Grid item xs={10} sm={11}>
                      <Typography
                        variant="caption"
                        style={{
                          fontSize: "1rem",
                          fontWeight: "bold",
                        }}
                      >
                        {data.displayname}{" "}
                        <VerifiedIcon
                          fontSize="small"
                          style={{ color: "#4FB6EC" }}
                        />
                      </Typography>
                      <Typography
                        variant="caption"
                        style={{
                          fontSize: "0.8rem",
                          marginLeft: "0.5rem",
                          color: "grey",
                        }}
                      >
                        @{data.username}
                      </Typography>
                    </Grid>
                  </Grid>
                  <Container maxWidth="lg">
                    <Typography
                      variant="body1"
                      style={{ margin: "0.8rem 3rem" }}
                    >
                      {data.comment}
                    </Typography>
                  </Container>
                </Container>
              </>
            ))}
          </Container>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ShowComments;
