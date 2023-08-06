import "./login.css";
import React from "react";

class Contactui extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      intrest: "",
      warning: false,
      clientNumber: "919392xxxx",
      callDuration: ""
    };
  }
  submit = (event) => {
    let name = this.state.name;
    let intrest = this.state.intrest;
    let callDuration = this.state.callDuration;
    if (name === "" || intrest === "" || callDuration === "") {
      this.setState({ warning: true });
      console.log("Enter details bro");
    } else {
      this.setState({ warning: false });
      console.log(JSON.stringify(this.state));
    }
  };
  fieldClassName = () => {
    if (this.state.warning) {
      return "field warn";
    } else {
      return "field";
    }
  };
  render() {
    return (
      <div className="contactForm">
        <div className="row">
          <div className="col-4 hide"></div>
          <div className="col-4 form">
            <h1>Contact Form</h1>
            <div className="fields">
              <label htmlFor="fcNumber">Client Number</label>
              <input
                type="text"
                id="fcNumber"
                value={this.state.clientNumber}
                className="field block"
                disabled
              />
              <label htmlFor="fname">Name</label>
              <input
                type="text"
                id="fname"
                onChange={(e) => {
                  this.setState({ name: e.target.value });
                }}
                placeholder="Enter name.."
                className={this.fieldClassName()}
              />
              <label htmlFor="fintrest">Intrested in</label>
              <input
                type="text"
                id="fintrest"
                onChange={(e) => {
                  this.setState({ intrest: e.target.value });
                }}
                placeholder="Enter e.g: lands, plots.."
                className={this.fieldClassName()}
              />
              <label htmlFor="fduration">Call Duration</label>
              <input
                type="text"
                id="fduration"
                onChange={(e) => {
                  this.setState({ callDuration: e.target.value });
                }}
                placeholder="Enter name.."
                className={this.fieldClassName()}
              />
              <input
                type="button"
                value="Submit"
                onClick={() => this.submit()}
              />
            </div>
          </div>
          <div className="col-4 hide"></div>
        </div>
      </div>
    );
  }
}

export default Contactui;
