import { useState } from "react";
import "./App.css";
import Feed from "./Feed";
import Login from "./Login";
import Sidebar from "./Sidebar";
import Widgets from "./Widgets.jsx";
import { useMediaQuery, useTheme } from "@mui/material";
import { Routes, Route, useLocation } from "react-router-dom";

import SignUp from "./SignUp";
import MainPage from "./MainPage";
import ProfileUser from "./ProfileUser";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/profile" element={<ProfileUser />} />
      </Routes>
    </>
  );
}

export default App;
