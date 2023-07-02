import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Box, Container, CssBaseline, Grid, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import db from "./firebase";
const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});
const SignUp = ({ setOAuth }) => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);

    // console.log({
    //   email: data.get("email"),
    //   password: data.get("password"),
    // });

    db.collection("users").add({
      email: data.get("email"),
      password: data.get("password"),
      username: data.get("username"),
      name: data.get("name"),
    });
    navigate("/main");
  };
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Container align="center" style={{ marginTop: "3rem" }}>
          <Typography variant="h6" align="center">
            {" "}
            Create An Account
          </Typography>
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
                    width: "20rem",
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
                    width: "20rem",
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
                />
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
                width: "20rem",
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
