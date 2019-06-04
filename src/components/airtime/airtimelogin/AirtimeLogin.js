import React from 'react';
import { Input, Modal } from 'antd';
import {Link} from 'react-router-dom'
import { buttonStyle } from "../../../App";

class AirtimeLogin extends React.Component {

  render() {
    const {open, onCancel, toggleSignUp} = this.props;
    return(
     <Modal visible={open} onCancel={onCancel}>
        <AirtimeLoginForm toggleSignUp={toggleSignUp}/>
     </Modal>
    )
  }
}

class AirtimeLoginForm extends React.Component{
  state = {
    email: "",
    password: "",
    error: {}
  };
  render() {
    const {toggleSignUp} = this.props
    const {email, password} = this.state;
    return(
      <form action="" className="">
        <h3 className="login__form--header">Welcome back Ope Adeoye</h3>
        <Input placeholder="Email Address" value={email} type="email"/><br/>
        <Input placeholder="Enter your password" value={password} type="password"/>
        <Link to="/airtimedetails"><button style={buttonStyle}>Log In</button></Link>
        <p className="login__link-text">Don't have an account?
          <a href="#" className="login__link" onClick={toggleSignUp}> Sign Up</a>
        </p>
      </form>
    )
  }
}
export default AirtimeLogin