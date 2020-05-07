import React from "react";
//import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import SubmitForm from "./components/submit-form";
import ConfirmScreen from "./components/confirmation";

function App() {
  return (
    <React.Fragment>
      <SubmitForm />
      <ConfirmScreen firstName={"Justin"} />
    </React.Fragment>
  );
}

export default App;
