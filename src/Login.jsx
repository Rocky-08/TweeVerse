import React from "react";
import LoginForm from "./LoginForm";
import { Container } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Auth from "./Auth";
const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});
const Login = () => {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Container
          align="center"
          style={{
            marginTop: "3rem",
          }}
          maxWidth="sm"
        >
          <LoginForm />
        </Container>
      </ThemeProvider>
    </>
  );
};

export default Login;
