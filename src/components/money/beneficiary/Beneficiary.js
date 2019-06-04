import React from "react";
import "./Beneficiary.css";
import InlineError from "../../messages/InlineError";
import { Modal } from "antd";
import { Link } from "react-router-dom";
import Validator from "validator";
import { Select } from "antd";
import { buttonStyle } from "../../../App";

const Option = Select.Option;

class Beneficiary extends React.Component {
  submit = data => {
    console.log(data);
  };
  render() {
    const { open, onCancel } = this.props;
    return (
      <Modal visible={open} onCancel={onCancel}>
        <BeneficiaryForm submit={this.submit} />
      </Modal>
    );
  }
}

class BeneficiaryForm extends React.Component {
  state = {
    data: {
      beneficiary_name: "",
      beneficiary_email: "",
      beneficiary_account_name: "",
      beneficiary_phonenumber: "",
      beneficiary_bank: "",
      beneficiary_account: ""
    },
    errors: {}
  };
  handleSelect = value => {
    console.log(value);
  };
  handleChange = e => {
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value }
    });
  };
  handleSubmit = e => {
    const { data } = this.state;
    e.preventDefault();
    // const errors = this.validate(data);
    // this.setState({errors});
    // if (Object.keys(errors).length === 0)
    this.props.submit(data);

    this.setState({
      data: {
        beneficiary_name: "",
        beneficiary_email: "",
        beneficiary_account_name: "",
        beneficiary_phonenumber: "",
        beneficiary_bank: "",
        beneficiary_account: ""
      }
    });
  };
  // validate = data => {
  //   const errors = {}
  //   if(!data.beneficiary_name)
  //     errors.beneficiary_name = "Please select a beneficiary";
  //   if(!data.beneficiary_email)
  //     errors.beneficiary_email = "please enter a valid email address";
  //   if(!data.beneficiary_account_name)
  //     errors.beneficiary_account_name = "Please enter the account name of the beneficiary";
  //   if (!data.beneficiary_phonenumber)
  //     errors.beneficiary_phonenumber = "Please enter the beneficiary phone number";
  //   if (!data.beneficiary_bank)
  //     errors.beneficiary_account = "Please select the beneficiary account";
  //   if (!data.beneficiary_account)
  //     errors.beneficiary_account = "Please enter the beneficiary account number";
  //   return errors;
  // };
  render() {
    const { data, errors } = this.state;
    return (
      <form className="beneficiary__form" onSubmit={this.handleSubmit}>
        <h3 className="beneficiary__form--header">
          Who are you sending money to
        </h3>
        <Select placeholder="Select beneficiary" onChange={this.handleSelect}>
          <Option value="Ope Adeoye">Ope Adeoye</Option>
          <Option value="Tope Ojewale">Tope Ojewale</Option>
          <Option value="Collins">Collins</Option>
        </Select>
        {errors.beneficiary_bank && (
          <InlineError text={errors.beneficiary_bank} />
        )}
        <h4 className="beneficiary__header--text-2">Recipient Details</h4>
        <input
          type="text"
          name="beneficiary_email"
          id="beneficiary_email"
          className="beneficiary__input"
          placeholder="Recipient's email address"
          value={data.beneficiary_email}
          onChange={this.handleChange}
        />
        {errors.beneficiary_email && (
          <InlineError text={errors.beneficiary_email} />
        )}
        <input
          type="text"
          name="beneficiary_account_name"
          id="beneficiary_account"
          className="beneficiary__input"
          placeholder="Full name of the account holder"
          value={data.beneficiary_account_name}
          onChange={this.handleChange}
        />
        {errors.beneficiary_account_name && (
          <InlineError text={errors.beneficiary_account_name} />
        )}
        <input
          type="text"
          name="beneficiary_phonenumber"
          id="beneficiary_phone"
          className="beneficiary__input"
          placeholder="Phone Number of the recipient"
          value={data.beneficiary_phonenumber}
          onChange={this.handleChange}
        />
        {errors.beneficiary_phonenumber && (
          <InlineError text={errors.beneficiary_phonenumber} />
        )}
        <h4 className="beneficiary__header--text-3">Bank details</h4>
        <Select
          placeholder="Select Airtime Operator"
          onChange={this.handleSelect}
        >
          <Option value="GTB">Guaranty Trust Bank</Option>
          <Option value="Access">Access Bank</Option>
          <Option value="First Bank">First Bank</Option>
        </Select>
        {errors.beneficiary_bank && (
          <InlineError text={errors.beneficiary_bank} />
        )}
        <input
          type="text"
          name="beneficiary_account"
          className="beneficiary__input"
          placeholder="Account Number"
          value={data.beneficiary_account}
          onChange={this.handleChange}
        />
        {errors.beneficiary_account && (
          <InlineError text={errors.beneficiary_account} />
        )}
        <Link
          to="/beneficiarydetails"
          className=" btn btn-block text-center"
        >
          <button style={buttonStyle}> Confirm</button>
        </Link>
      </form>
    );
  }
}
export default Beneficiary;
