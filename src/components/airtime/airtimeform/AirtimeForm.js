import React from 'react'
import './AirtimeForm.css'
import {buttonStyle} from "../../../App";
import { Select } from 'antd';

const Option = Select.Option;

class AirtimeForm extends  React.Component{
  handleChange = value => {
    console.log(`selected ${value.toUpperCase()}`);
  }

  render() {
    const {toggleAirtimeLogin} =this.props;
    return (
      <form action="" className="airtime__form">
        <div className="airtime__form--destination">
          <p>Send</p>
          <div><span><img src="img/ng.png" alt=""/> NGN</span></div>
        </div>
        <Select defaultValue="Nigeria" style={{ width: '100%' }} onChange={this.handleChange}>
          <Option value="nigeria">Nigeria</Option>
          <Option value="ghana">Ghana</Option>
        </Select>
        <Select defaultValue="MTN" style={{ width: '100%' }} onChange={this.handleChange}>
          <Option value="mtn">MTN</Option>
          <Option value="glo">GLO</Option>
          <Option value="airtel">AIRTEL</Option>
          <Option value="etisalat">ETISALAT</Option>
        </Select>
        <p className="airtime__form--text">You will be charged 1.20GBP for this transaction</p>
        <button className="airtime__btn" style={buttonStyle} onClick={toggleAirtimeLogin}>Continue</button>
      </form>
    )
  }
}
export default AirtimeForm