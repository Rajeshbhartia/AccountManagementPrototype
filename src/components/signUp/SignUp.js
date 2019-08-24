import React, { Component } from "react";
import SignUpFirstPage from "./SignUpFirstPage";
import SignUpSecondPage from "./SignUpSecondPage";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loadPage: 1
    };
  }

  changeLoadPage = pageNumber => {
    this.setState({
      loadPage: pageNumber
    });
  };

  render() {
    return (
      <React.Fragment>
        {this.state.loadPage === 0 && (
          <SignUpFirstPage changeLoadPage={this.changeLoadPage} />
        )}
        {this.state.loadPage === 1 && (
          <SignUpSecondPage changeLoadPage={this.changeLoadPage} email="aa@gmail.com"/>
        )}
      </React.Fragment>
    );
  }
}

export default SignUp;
