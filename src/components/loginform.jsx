import "./login.css";
import React from "react";

class loginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: "", pwd: "", warning: false };
  }
  submit = (event) => {
    let mail = this.state.email;
    let pwd = this.state.pwd;
    if (mail === "" || pwd === "") {
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
      <div className="loginForm">
        <div className="row">
          <div className="col-4 hide"></div>
          <div className="col-4 form">
            <h1>Login Form</h1>
            <div className="fields">
              <label htmlFor="femail">Email</label>
              <input
                type="email"
                id="femail"
                onChange={(e) => {
                  this.setState({ email: e.target.value });
                }}
                placeholder="Enter your mail.."
                className={this.fieldClassName()}
              />
              <label htmlFor="fpassword">Password</label>
              <input
                type="password"
                id="fpassword"
                onChange={(e) => {
                  this.setState({ pwd: e.target.value });
                }}
                placeholder="Enter your password.."
                className={this.fieldClassName()}
              />
              <p>
                <span>*</span>Forgot your password{" "}
                <a href="www.google.com">click Here..</a>
              </p>
              <input
                type="button"
                value="Login"
                onClick={() => this.submit()}
              />
              <p>
                Don't have an account <a href="register">click Here</a>
              </p>
            </div>
          </div>
          <div className="col-4 hide"></div>
        </div>
      </div>
    );
  }
}

export default loginForm;
