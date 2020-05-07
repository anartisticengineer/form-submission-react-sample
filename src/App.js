import React, { Component } from "react";
//import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import SubmitForm from "./components/submit-form";

class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <SubmitForm />
      </React.Fragment>
    );
  }
}

export default App;
