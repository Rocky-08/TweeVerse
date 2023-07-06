import React, { useState } from "react";
import { Box, Grid } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Auth from "./Auth";
import db, { auth, provider } from "./firebase";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import "./auth.css";
import GoogleIcon from "@mui/icons-material/Google";
const LoginForm = () => {
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const [mail, setMail] = useState();
  const [pass, setPassword] = useState();
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
  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);

    signInWithEmailAndPassword(auth, mail, pass)
      .then((userCredential) => {
        console.log(userCredential.user.email);
        Cookies.set("userEmail", userCredential.user.email, { expires: 30 });
        Cookies.set("userId", userCredential.user.uid, { expires: 30 });
        navigate("/main");
      })
      .catch((error) => {
        setError(true);
      });
  };

  // const handleLogin = () => {
  //   const date = new Date();
  //   let month = Month[date.getMonth()];
  //   let year = date.getFullYear();
  //   signInWithPopup(auth, provider)
  //     .then((data) => {
  //       console.log(data.user);
  //       navigate("/main");
  //       db.collection("users").doc(data.user.uid).add({
  //         email: data.user.email,
  //         name: data.user.displayName,
  //       });
  //       Cookies.set("userEmail", data.user.email, { expires: 30 });
  //       Cookies.set("userId", data.user.uid, { expires: 30 });
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };
  return (
    <>
      <Box component="form" onSubmit={handleSubmit} noValidate>
        <Grid container spacing={1} justifyContent="center">
          {/* <Grid item md={12} sm={12}>
            <Button
              onClick={handleLogin}
              style={{
                padding: "0.7rem",
                background: "white",
                color: "black",
                borderRadius: "2rem",
              }}
            >
              <GoogleIcon
                style={{ marginRight: "1rem" }}
                className="Auth-logo"
              />
              Continue with Google
            </Button>
          </Grid> */}
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
              value={mail}
              onChange={(e) => setMail(e.target.value)}
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
              autoComplete="current-password"
              autoFocus
              value={pass}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Grid>
          <Grid item md={12} sm={12}>
            <Button
              type="submit"
              variant="contained"
              style={{
                backgroundColor: "green",
                color: "white",
                marginTop: "2rem",
                width: "10rem",
                borderRadius: "2rem",
                width: "16rem",
              }}
            >
              Login
            </Button>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={2}
          style={{ marginTop: "2rem" }}
          justifyContent="center"
        >
          <Grid item md={6} sm={12} xs={12}>
            Forgot password?
          </Grid>

          <Grid item md={6} sm={12} xs={12}>
            <Link
              to="/signup"
              style={{ color: "white", textDecoration: "none" }}
            >
              Don't have an account? Sign Up
            </Link>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default LoginForm;
