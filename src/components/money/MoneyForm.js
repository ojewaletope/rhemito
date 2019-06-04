import React from 'react'
import './MoneyForm.css'
import  {FormGroup, InputGroup, FormControl} from 'react-bootstrap'
import {Select, Input} from 'antd';

const Option = Select.Option;
const selectAfter = (
  <Select defaultValue="Select Recipient country" style={{ width: 80 }}>
    <Option value="NGN"><img src="img/ng.png" alt=""/> NGN</Option>
    <Option value="GHC"><img src="img/gh.png" alt=""/> GHC</Option>
    <Option value="SAR"><img src="img/sa.png" alt=""/> SAR</Option>
    <Option value="KES"><img src="img/ke.png" alt=""/> KES</Option>
  </Select>
);
class MoneyForm extends React.Component{
  state = {
    inputValue : ""
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state)
  };
  // signUpToggle = e => {
  //   e.preventDefault();
  //   this.props.toggleSignup(e)
  // };
  loginToggle = e => {
    e.preventDefault();
    this.props.toggleLogin(e)
  };

  handleInput = e => {
    e.preventDefault();
    this.setState({
      inputValue:e.target.value
    })
  };
  render() {
    // const {toggleComparePrices} = this.props;
    const {inputValue} = this.state;
    const rate = 469.5663;
    let outputValue = inputValue * rate;
        // outputValue = this.props;
    return(
      <form className="form" onSubmit={this.handleSubmit}>
        <FormGroup>
          <InputGroup>
            <FormControl type="number" value={inputValue}  placeholder="You send" onChange={this.handleInput}/>
            <InputGroup.Addon><img src="img/gb.png" alt=""/><span className="add__on--text">GBP</span></InputGroup.Addon>
          </InputGroup>
        </FormGroup>
        <div className="form__line--container">
          <div className="form__line">
            <span className="form__dot form__dot--1"/><span className="form__dot form__dot--2"/>
            <span className="form__line--text-1">1.20 GBP transfer fee</span>
            <span className="form__line--text-2"> {rate} <span className="inline__text">Guaranteed rate</span> (24hrs)</span>
          </div>
        </div>
          <Input addonAfter={selectAfter} value={outputValue.toFixed(2)} />
        <div className="form__text">
          should arrive in 6hrs
        </div>
       <div className="form__btns">
         <button className="form__btn" onClick={this.loginToggle}>Send Money</button>
       </div>
      </form>
    )
  }
}
export default MoneyForm