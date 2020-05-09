import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
// eslint-disable-next-line no-unused-vars
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";
import SubmitForm from "./components/submit-form";
import Footer from "./components/footer";

class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <SubmitForm />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
