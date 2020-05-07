//eslint-disable-next-line
import React, { Component } from "react";

const ConfirmScreen = (props) => {
  return (
    <div className="d-flex justify-content-center">
      <div className="row">
        <div className="card text-white bg-success">
          <div className="card-body">
            <h4 className="card-title">
              <i class="fab fa-check-circle    "></i>Thank you,
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

ConfirmScreen.defaultProps = { firstName: "Johnny" };

export default ConfirmScreen;
