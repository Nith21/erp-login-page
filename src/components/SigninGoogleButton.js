import React from "react";
import { Button } from "@mui/material";
import { FcGoogle } from "react-icons/fc";

const SigninGoogleButton = () => {
  return (
    <>
      <div className="d-flex justify-content-center mt-3 ">
        <Button
          variant="outlined"
          type="submit"
          className="btn btn-primary SigninGoogleButton"
          startIcon={<FcGoogle />}
        >
          Sign In with Google
        </Button>
      </div>
    </>
  );
};

export default SigninGoogleButton;
