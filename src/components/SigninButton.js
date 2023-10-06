import React from "react";
import { Button } from "@mui/material";

const SigninButton = () => {
  return (
    <>
      <div className="d-flex justify-content-center mt-3 ">
        <Button
          variant="contained"
          color="primary"
          type="submit"
          className="btn btn-primary"
        >
          Sign In
        </Button>
      </div>
    </>
  );
};

export default SigninButton;
