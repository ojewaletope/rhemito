import React from "react";
import { Modal } from "antd";
import "./SignUp.css";
import Validator from "validator";
import InlineError from "../../messages/InlineError";
import { Link } from "react-router-dom";
import { buttonStyle } from "../../../App";

class SignUp extends React.Component {
  submit = data => {
    console.log(data);
  };
  render() {
    const { open, onCancel, toggleLogin } = this.props;

    return (
      <Modal visible={open} onCancel={onCancel}>
        <SignForm submit={this.submit} toggleLogin={toggleLogin} />
      </Modal>
    );
  }
}

class SignForm extends React.Component {
  state = {
    data: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      password: ""
    },
    loading: false,
    errors: {},
    modalVisibility: false
  };
  handleChange = e => {
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value }
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    const errors = this.validate(this.state.data);
    this.setState({ errors });
    if (Object.keys(errors).length === 0) {
      this.props.submit(this.state.data);
      this.setState({
        data: {
          firstName: "",
          lastName: "",
          email: "",
          phoneNumber: "",
          password: ""
        }
      });
    }
  };

  loginForm = e => {
    e.preventDefault();
    this.props.toggleLogin(e);
  };
  validate = data => {
    const errors = {};
    if (!data.firstName) errors.firstName = "Please enter your first name";
    if (!data.lastName) errors.lastName = "Please enter your last name";
    if (!Validator.isEmail(data.email)) errors.email = "Invalid Email Address";
    if (!data.phoneNumber)
      errors.phoneNumber = "Please enter your phone number";
    if (!data.password) errors.password = "Please enter a secure password";
    return errors;
  };
  render() {
    const { data, errors } = this.state;
    // const { toggleLogin } = this.props;
    return (
      <div className="sign__up--form-container">
        <form className="sign__up--form" onSubmit={this.handleSubmit}>
          <h3 className="sign__up--form-header">Welcome to Rhemito</h3>
          <p className="sign__up--text">
            Already Sign up?
            <a href="" className="sign__up--link" onClick={this.loginForm}>
              log in
            </a>
          </p>
          <div className="input__group">
            {errors.firstName ? <InlineError text={errors.firstName} /> : null}
            <input
              type="text"
              name="firstName"
              className="sign__up--input"
              placeholder="First Name"
              value={data.firstName}
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="lastName"
              className="sign__up--input"
              placeholder="Last Name"
              value={data.lastName}
              onChange={this.handleChange}
            />
            {errors.lastName ? <InlineError text={errors.lastName} /> : null}
          </div>

          <div>
            <input
              type="email"
              name="email"
              id="input__email"
              className="sign__up--input"
              placeholder="Your email address"
              value={data.email}
              onChange={this.handleChange}
            />
            {errors.email ? <InlineError text={errors.email} /> : null}
          </div>
          <div>
            <input
              type="text"
              name="phoneNumber"
              className="sign__up--input"
              placeholder="Phone Number"
              value={data.phoneNumber}
              onChange={this.handleChange}
            />
            {errors.phoneNumber ? (
              <InlineError text={errors.phoneNumber} />
            ) : null}
          </div>
          <div>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Create password"
              className="sign__up--input"
              value={data.password}
              onChange={this.handleChange}
            />
            {errors.password ? <InlineError text={errors.password} /> : null}
          </div>
          <div>
            <button className="sign__up--btn" style={buttonStyle}>Sign Up</button>
          </div>
          <p className="sign__up--text-2">
            By Clicking Sign Up you accept our{" "}
            <Link to="/termsofuse" href="" className="sign__up--link">
              terms of use
            </Link>
          </p>
        </form>
      </div>
    );
  }
}

export default SignUp;
