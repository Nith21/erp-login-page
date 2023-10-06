import React from "react";
import Fab from "@mui/material/Fab";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage } from "@fortawesome/free-regular-svg-icons/faMessage";

const MessageIcon = () => {
  return (
    <>
      <div className="message-icon d-flex flex-row-reverse ">
        <Fab color="primary" aria-label="add" className="Message-Icon d-flex">
          <FontAwesomeIcon icon={faMessage} size="lg" bounce />
        </Fab>
      </div>
    </>
  );
};

export default MessageIcon;
