import React, { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import {
  Alert,
  Box,
  Container,
  CssBaseline,
  Grid,
  Typography,
  useScrollTrigger,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import db from "./firebase";
import Cookies from "js-cookie";
import { auth } from "./firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});
const SignUp = ({ setOAuth }) => {
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const strengthbar = document.getElementById("meter");
  const [bar, setBar] = useState(0);
  const Month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const checkPassword = (password) => {
    var strength = 0;
    if (password.match(/[a-z]+/)) {
      strength += 1;
    }
    if (password.match(/[A-Z]+/)) {
      strength += 1;
    }
    if (password.match(/[0-9]+/)) {
      strength += 1;
    }
    if (password.match(/[$@#&!]+/)) {
      strength += 1;
    }

    switch (strength) {
      case 0:
        setBar(0);
        break;

      case 1:
        setBar(25);
        break;

      case 2:
        setBar(50);
        break;

      case 3:
        setBar(75);
        break;

      case 4:
        setBar(100);
        break;
    }
  };
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);
    const date = new Date();
    let month = Month[date.getMonth()];
    let year = date.getFullYear();

    let documentId;
    createUserWithEmailAndPassword(
      auth,
      data.get("email"),
      data.get("password")
    )
      .then((userCredential) => {
        documentId = userCredential.user.uid;

        Cookies.set("userEmail", data.get("email"), { expires: 30 });
        Cookies.set("userId", documentId, { expires: 30 });
        db.collection("users")
          .doc(userCredential.user.uid)
          .set({
            email: data.get("email"),
            password: data.get("password"),
            username: data.get("username"),
            name: data.get("name"),
            bio: "",
            currmonth: month,
            curryear: year,
            image: "",
          });
        navigate("/main");
      })
      .catch((error) => {
        if (error.message == "Firebase: Error (auth/invalid-email).") {
          setError(true);
          setErrorMessage("Enter Valid Email");
          setTimeout(() => {
            setError(false);
          }, 1200);
        } else if (
          error.message == "Firebase: Error (auth/email-already-in-use)."
        ) {
          setErrorMessage("Already Registed Email Id");
          setError(true);
          setTimeout(() => {
            setError(false);
          }, 1200);
        }
      });
  };
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Container align="center" style={{ marginTop: "3rem" }}>
          {error && <Alert severity="error">{errorMessage}</Alert>}
          <Typography variant="h6" align="center">
            {" "}
            Create An Account
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate>
            <Grid container spacing={1} justifyContent="center">
              <Grid item md={12} sm={12}>
                <TextField
                  style={{
                    outline: "none",
                    color: "white",
                    width: "16rem",
                  }}
                  type="email"
                  margin="normal"
                  required
                  variant="outlined"
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                />
              </Grid>
              <Grid item md={12} sm={12}>
                <TextField
                  style={{
                    outline: "none",
                    width: "16rem",
                  }}
                  margin="normal"
                  required
                  variant="outlined"
                  id="name"
                  label="Name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  autoFocus
                />
              </Grid>
              <Grid item md={12} sm={12}>
                <TextField
                  style={{
                    outline: "none",
                    width: "16rem",
                  }}
                  margin="normal"
                  required
                  variant="outlined"
                  id="username"
                  label="Username"
                  name="username"
                  type="username"
                  autoComplete="username"
                  autoFocus
                />
              </Grid>
              <Grid item md={12} sm={12}>
                <TextField
                  style={{
                    outline: "none",
                    width: "16rem",
                  }}
                  margin="normal"
                  required
                  variant="outlined"
                  id="password"
                  label="Password"
                  name="password"
                  type="password"
                  autoComplete="password"
                  autoFocus
                  onKeyUp={(e) => {
                    checkPassword(e.target.value);
                  }}
                />
              </Grid>
              <Grid item md={12} sm={12}>
                <progress id="meter" value={bar} max="100"></progress>
              </Grid>
            </Grid>

            <Button
              type="submit"
              variant="contained"
              style={{
                backgroundColor: "white",
                color: "black",
                marginTop: "2rem",
                width: "10rem",
                borderRadius: "2rem",
                width: "16rem",
                fontWeight: "bold",
              }}
            >
              Register
            </Button>
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
};

export default SignUp;
