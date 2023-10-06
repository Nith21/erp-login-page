import React from "react";
import GooglePlayStore from "./images/play-store-desktop.png";
import AppStore from "./images/app-store-desktop.png";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="Footer">
        <div className="d-flex">
          <img
            src={GooglePlayStore}
            alt="GooglePlayStore"
            className="Google-Play-Store-Image"
          />
          <img src={AppStore} alt="AppStore" className="App-Store-Image" />
        </div>
      </div>
    </>
  );
};

export default Footer;
