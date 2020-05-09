//eslint-disable-next-line
import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const ConfirmScreen = (props) => {
  return (
    <div className="d-flex justify-content-center mt-2">
      <div className="row">
        <div className="card text-white text-center bg-success p-5">
          <div className="card-body">
            <FontAwesomeIcon icon={faCheckCircle} />
            <h4 className="card-title">
              Thank you,
              {" " + props.firstName + " " + props.lastName}!
            </h4>
            <p className="card-text">
              Your submission was successfully recieved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

ConfirmScreen.defaultProps = { firstName: "Johnny", lastName: "Twobyfour" };

export default ConfirmScreen;
