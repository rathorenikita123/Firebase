import React from "react";
import { Routes, Route } from 'react-router-dom';
import Home from "./components/Home/Home";
import Dashboard from "./components/Dashboard/Dashboard";
import LogIn from "./components/Login/LogIn";
import SignUp from "./components/SignUp/SignUp";
import Edit from "./components/Edit/Edit";

const App = () => {
  return (
      <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/dashboard" element={<Dashboard/>} />
          <Route exact path="/login" element={<LogIn/>} />
          <Route exact path="/signup" element={<SignUp/>} />
          <Route exact path="/edit" element={<Edit/>} />
      </Routes>
  );
};

export default App;