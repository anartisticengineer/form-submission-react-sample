import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer>
      <div className="bg-light text-secondary p-3">
        <div className="text-center pb-1">Follow us online!</div>
        <div className="d-flex flex-sm-row justify-content-center">
          <div className="px-1">
            <FontAwesomeIcon icon={faFacebookF} />
          </div>
          <div className="px-1">
            <FontAwesomeIcon icon={faInstagram} />
          </div>
          <div className="px-1">
            <FontAwesomeIcon icon={faWhatsapp} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
