import React, { useState } from "react";
import { Link } from "react-router-dom";
import { TextField, Typography } from "@mui/material";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "./LoginForm.css"; // Your custom CSS file for styling
import SigninButton from "./SigninButton";
import SigninGoogleButton from "./SigninGoogleButton";

const StudentLogin = () => {
  const [state, setState] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    // console.log(e);
    // Phone Number InputValue
    console.log(state);
  };
  const handleChangeUsername = (e) => {
    const value = e.target.value;
    setState(value);
    // return setState;
  };

  return (
    <div className="form-container mt-5 ms-5">
      <form onSubmit={handleSubmit} className="form w-100">
        <Typography variant="h5" className="Student-Login-Heading">
          Student Login
        </Typography>
        <TextField
          label="Username"
          variant="outlined"
          fullWidth
          margin="normal"
          required
          type="text"
          onChange={handleChangeUsername}
        />
        <TextField
          label="Password"
          variant="outlined"
          fullWidth
          margin="normal"
          type="password"
          required
        />
        <div className="Forgot-Password-Section d-flex">
          <Link to="#" className="Forgot-Password">
            {" "}
            <span> Forgot Password ? </span>{" "}
          </Link>
        </div>
        <div className="d-flex justify-content-center column-gap-2">
          <hr className="horizontal-line" />{" "}
          <span className="OR-span"> OR </span>{" "}
          <hr className="horizontal-line" />
        </div>
        <SigninButton />
        <SigninGoogleButton />
      </form>
    </div>
  );
};

export default StudentLogin;
