import React, { Component } from "react";
import { MDCTextField } from "@material/textfield";
import { MDCFloatingLabel } from "@material/floating-label";

class SignUpFirstPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      secret: "",
      confirmSecret: ""
    };
    this.emailList = [
      "a@gmail.com",
      "b@gmail.com",
      "c@gmail.com",
      "d@gmail.com"
    ];
  }
  componentDidMount() {
    const text = [].map.call(
      document.querySelectorAll(".mdc-text-field"),
      function(el) {
        return new MDCTextField(el);
      }
    );
    [].map.call(document.querySelectorAll(".mdc-floating-label"), function(el) {
      return new MDCFloatingLabel(el);
    });
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    let findEmail = this.emailList.find(email => {
      return email === this.state.email;
    });
    if (findEmail) {
      alert("This Email is already exists");
      console.log(findEmail);
    } else if (this.state.secret !== this.state.confirmSecret) {
      alert("Email and Confirm does not match");
    } else {
      this.props.changeLoadPage(1);
    }
  };

  render() {
    return (
      <React.Fragment>
        <div className="signup">
          <div className="signup__wrapper">
            <div className="signup__title-wrapper">
              <span className="signup__title"> SignUp Form</span>
            </div>
            <form className="login-input" onSubmit={this.handleSubmit}>
              <div className="mdc-text-field signup__input">
                <input
                  type="text"
                  id="username1"
                  className="mdc-text-field__input"
                  onChange={this.handleChange}
                  name="firstName"
                  required
                />
                <label htmlFor="username1" className="mdc-floating-label">
                  First Name
                </label>
                <div className="mdc-line-ripple" />
              </div>
              <div className="mdc-text-field signup__input">
                <input
                  type="text"
                  id="username1"
                  className="mdc-text-field__input"
                  onChange={this.handleChange}
                  name="lastName"
                  required
                />
                <label htmlFor="username1" className="mdc-floating-label">
                  Last Name
                </label>
                <div className="mdc-line-ripple" />
              </div>

              <div className="mdc-text-field signup__input">
                <input
                  type="email"
                  id="username1"
                  className="mdc-text-field__input"
                  onChange={this.handleChange}
                  name="email"
                  required
                />
                <label htmlFor="username1" className="mdc-floating-label">
                  Email
                </label>
                <div className="mdc-line-ripple" />
              </div>

              <div className="mdc-text-field signup__input">
                <input
                  type="password"
                  id="username1"
                  className="mdc-text-field__input"
                  onChange={this.handleChange}
                  name="secret"
                  required
                />
                <label htmlFor="username1" className="mdc-floating-label">
                  Password
                </label>
                <div className="mdc-line-ripple" />
              </div>
              <div className="mdc-text-field signup__input">
                <input
                  type="password"
                  id="username1"
                  className="mdc-text-field__input"
                  onChange={this.handleChange}
                  name="confirmSecret"
                  required
                />
                <label htmlFor="username1" className="mdc-floating-label">
                  Confirm Password
                </label>
                <div className="mdc-line-ripple" />
              </div>

              <button
                className="mdc-button mdc-button--raised width-100"
                // onClick={this.handleSubmit}
              >
                Next
              </button>
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default SignUpFirstPage;
