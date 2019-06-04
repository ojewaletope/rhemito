import React from 'react'
import {Modal} from 'antd'
import './Login.css'
import InlineError from "../../messages/InlineError";
import {Link} from 'react-router-dom'
import { buttonStyle } from "../../../App";

class Login extends React.Component {

  submit = data => {
    console.log(data)
  }
  render() {
    const { open, onCancel, toggleSignUp, tabIndex } = this.props;
    return(
     <Modal visible={open} onCancel={onCancel} >
       <LoginForm
         submit={this.submit}
         onCancel={onCancel}
         toggleSignUp={toggleSignUp}
         tabIndex={tabIndex}
       />
     </Modal>
    )
  }
}

class LoginForm extends React.Component{
  state = {
    data: {
      email: "",
      password: ""
    },
    errors: {},
    loading: false,
  };
  handleChange = e => {
    this.setState({data:{...this.state.data,[e.target.name]:e.target.value}})
  };
  handleSubmit = e => {
    e.preventDefault();
    // const errors = this.validate(this.state.data);
    // this.setState({errors});
    // if (Object.keys(errors).length === 0) {
    //   this.props.submit(this.state.data);
    // }
    this.props.submit(this.state.data);
    this.setState({
      data: {
        email: "",
        password: ""
      }
    })

  };
  // validate = (data) => {
  //   const  errors = {};
  //   if (!data.email)
  //     errors.email = "Please enter your email address";
  //   if (!data.password)
  //     errors.password = "Please enter your password";
  //   return errors;
  // };

  handleClick = (e, tabIndex) => {
    e.preventDefault();
    console.log(tabIndex);
  };
  render() {
    const {onCancel, tabIndex, toggleSignUp} = this.props;
    const {data, errors} = this.state;
    return(
      <form className="login__form" >
        <h3 className="login__form--header">You are sending 253,569.78 NGN to Femi Ope Adeoye</h3>
        <p className="login__form--text">Please log in to yor account here</p>
        <div>
          <input type="email"
                 name="email"
                 id="login__email"
                 placeholder="Your email address"
                 className="login__form--input"
                 value={data.email}
                 onChange={this.handleChange}/>
          {errors.email ? <InlineError text={errors.email}/>: null}
        </div>
        <div>
          <input type="password"
                 name="password"
                 id="login__password"
                 placeholder="password"
                 className="login__form--input"
                 value={data.password}
                 onChange={this.handleChange}/>
          {errors.password ? <InlineError text={errors.password}/>: null}
        </div>
        <div>
          <Link to="/sendmoney">
            <button className="login__form--btn btn btn-block text-center">Log In</button>
          </Link>
        </div>
        <div>
          <p className="login__link-text">Don't have an account?
            <a href="#" className="login__link" onClick={toggleSignUp}> Sign Up</a>
          </p>
        </div>
      </form>
    )
  }

}
export default Login