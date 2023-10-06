import React, { useState } from "react";
import { TextField, Typography } from "@mui/material";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "./LoginForm.css"; // Your custom CSS file for styling
import SigninButton from "./SigninButton";
import SigninGoogleButton from "./SigninGoogleButton";
import { Link } from "react-router-dom";

const StaffLogin = () => {
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
        <Typography variant="h5" className="Staff-Login-Heading">
          Staff Login
        </Typography>
        <TextField
          label="Phone No"
          variant="outlined"
          fullWidth
          margin="normal"
          required
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

export default StaffLogin;
