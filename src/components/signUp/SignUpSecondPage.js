import React, { Component } from "react";

class SignUpSecondPage extends Component {
  render() {
    return (
      <div className="signup">
        <div className="signup__wrapper">
          <div className="signup__title-wrapper">
            <span className="signup__title"> Get A Verification Code</span>
          </div>
          <span className="signupSecondPageText">
            synopi will send you a Verification code to {this.props.email}
          </span>
          <div className="signupSecondPageButtonWrapper">
            <button
              className="mdc-button mr-10"
              onClick={() => this.props.changeLoadPage(0)}
            >
              back
            </button>
            <button
              className="mdc-button "
            // onClick={this.handleSubmit}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUpSecondPage;
