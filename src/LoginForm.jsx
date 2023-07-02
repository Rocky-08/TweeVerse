import React from "react";
import { Box, Grid } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Auth from "./Auth";

const LoginForm = () => {
  const handleSubmit = () => {};
  return (
    <>
      <GoogleOAuthProvider clientId="242585001953-esge06c7jkt2ve3gpg1qq301h8luktk1.apps.googleusercontent.com">
        <Auth />
      </GoogleOAuthProvider>
      <Box component="form" onSubmit={handleSubmit} noValidate>
        <Grid container spacing={2}>
          <Grid item md={12} sm={12}>
            <TextField
              style={{
                outline: "none",
                color: "white",
                width: "20rem",
              }}
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
                width: "20rem",
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
            />
          </Grid>
        </Grid>

        <Button
          type="submit"
          variant="contained"
          style={{
            backgroundColor: "green",
            color: "white",
            marginTop: "2rem",
            width: "10rem",
            borderRadius: "2rem",
            width: "20rem",
          }}
        >
          Login
        </Button>
        <Grid container style={{ marginTop: "2rem" }} justifyContent="center">
          <Grid item md={6} sm={6}>
            Forgot password?
          </Grid>

          <Grid item md={6} sm={6}>
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
