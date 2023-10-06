import React, { useState } from "react";
import LoginHeader from "./LoginHeader";
import StudentLogin from "./StudentLogin";
import { Route, Router, Routes } from "react-router-dom";
import ParentLogin from "./ParentLogin";
import StaffLogin from "./StaffLogin";

const LoginFormPage = () => {
  return (
    <>
      <div className="d-flex ">
        <LoginHeader />
      </div>
      <Routes>
        <Route path="/student" element={<StudentLogin />} />
        <Route path="/parent" element={<ParentLogin />} />
        <Route path="/staff" element={<StaffLogin />} />
      </Routes>
    </>
  );
};

export default LoginFormPage;
