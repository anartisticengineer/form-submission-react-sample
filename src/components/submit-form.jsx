import React, { Component } from "react";
import ConfirmScreen from "./confirmation";

class SubmitForm extends Component {
  state = {
    submissionComplete: false,
    firstName: "",
    lastName: "",
  };
  componentDidMount() {
    //listens for any changes in the input form
    document.addEventListener("change", this.handleChange);
    document.addEventListener("submit", this.handleSubmit);
  }
  componentWillUnmount() {
    document.removeEventListener("change", this.handleChange);
    document.removeEventListener("submit", this.handleSubmit);
  }

  handleChange = (event) => {
    let changedId = event.target.id;
    switch (changedId) {
      case "yourFirstName":
        this.setState({ firstName: event.target.value });
        break;
      case "yourLastName":
        this.setState({ lastName: event.target.value });
        break;
      default:
        break;
    }
  };
  handleSubmit = (event) => {
    event.preventDefault(); //prevent the browser from refreshing
    console.log(this.state);
    this.setState({ submissionComplete: true });
  };
  render() {
    if (this.state.submissionComplete === false) {
      return (
        <div className="d-flex justify-content-center mt-2">
          <div className="row bg-dark text-light p-5">
            {/* Form will have, first and last name inputs*/}
            <form>
              <h1 className="text-center">Submit your name</h1>
              {/*First Name */}
              <div className="form-group">
                <label htmlFor="yourFirstName">First Name</label>
                <input
                  type="text"
                  className="form-control"
                  name=""
                  id="yourFirstName"
                  placeholder="First Name"
                  autoComplete="off"
                  required
                />
              </div>
              {/*Last Name */}
              <div className="form-group">
                <label htmlFor="yourLastName">Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  name=""
                  id="yourLastName"
                  placeholder="Last Name"
                  autoComplete="off"
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary btn-block">
                Submit
              </button>
            </form>
          </div>
        </div>
      );
    } else {
      return (
        <ConfirmScreen
          firstName={this.state.firstName}
          lastName={this.state.lastName}
        />
      );
    }
  }
}

export default SubmitForm;
