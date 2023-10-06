import React from "react";
import SchoolBuiding from "./images/schoolBuilding.png";
import Schoollogo from "./logo/school-logo.jpg";
import CompanyLogo from "./images/nlp-logo-icon.svg";
import LoginFormPage from "./LoginFormPage";
import Footer from "./Footer";
import MessageIcon from "./MessageIcon";

const LoginPage = () => {
  return (
    <>
      {/*--------------------Login Page First Column Start----------------*/}
      <div className="container-fluid">
        <div className="row">
          <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-12 col-sm-12 col-xs-12">
            <div className="school-name-logo d-flex justify-content-center">
              <img src={Schoollogo} alt="Schoollogo" className="school-logo" />
              <span className="school-name-span">
                {" "}
                <strong>
                  {" "}
                  SREE IYAPPA MATRICULATION HIGHER SECONDARY SCHOOL{" "}
                </strong>{" "}
              </span>
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-12 col-sm-12">
            <div
              className="school-building-section d-flex justify-content-center"
              id="school-building-section"
            >
              <img
                src={SchoolBuiding}
                alt="SchoolBuiding"
                className="SchoolBuiding"
              />
            </div>
          </div>
          <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-12 col-sm-12">
            <div className="company-logo-section d-flex justify-content-center">
              <img
                src={CompanyLogo}
                alt="CompanyLogo"
                className="company-logo"
              />
            </div>
            <div className="login-form">
              <LoginFormPage />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <Footer className="Footer-Component" />
          </div>
          <div className="col-6">
            <MessageIcon />
          </div>
        </div>
      </div>

      {/*--------------------Login Page First Column End----------------*/}

      {/*---------------------Login Form Start--------------------------*/}

      {/*---------------------Login Form End--------------------------*/}
    </>
  );
};

export default LoginPage;
