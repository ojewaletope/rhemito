import React from "react";
import "./BillDetails.css";
import { buttonStyle } from "../../../App";
import { MainFooter } from "../../main/Main";
import Footer from "../../footer/Footer";
import Header from "../../header/Header";
import BillsBeneficiary from "../billsbeneficiary/BillsBeneficiary";

class BillDetails extends React.Component {
  state = {
    billsbeneficiaryModal: false
  };
  toggleBillsBeneficiary = e => {
    e.preventDefault()
    this.setState(previousState => ({
      billsbeneficiaryModal: !previousState.billsbeneficiaryModal
    }))
  }
  render() {
    const {billsbeneficiaryModal} = this.state;
    return (
      <div>
        <BillDetailsForm toggleModal={this.toggleBillsBeneficiary}/>
        <BillsBeneficiary open={billsbeneficiaryModal} onCancel={this.toggleBillsBeneficiary}/>
        <MainFooter />
        <Footer />
      </div>
    );
  }
}

class BillDetailsForm extends React.Component {
  state = {
    customerID: "",
    email: "",
    phoneNumber: "",
    amount: "",
    error: {}
  };
  onChange = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    this.setState({
      customerID: "",
      email: "",
      phoneNumber: "",
      amount: "",
      error: {}
    });
  };
  render() {
    const { customerID, email, phoneNumber, amount, error } = this.state;
    const {toggleModal} = this.props
    return (
      <div className="billsdetails__wrapper">
        <Header />
        <form
          action=""
          className="billform__wrapper"
          onSubmit={this.handleSubmit}
        >
          <div className="input__group">
            <input
              type="text"
              name="customerID"
              className="billdetails__input"
              placeholder="Enter your customer ID"
              value={customerID}
              onChange={this.onChange}
            />
            <input
              type="email"
              name="email"
              id=""
              className="billdetails__input"
              placeholder="Enter your email"
              value={email}
              onChange={this.onChange}
            />
            <input
              type="number"
              name="phoneNumber"
              id=""
              className="billdetails__input"
              placeholder="Enter your mobile Number"
              value={phoneNumber}
              onChange={this.onChange}
            />
            <input
              type="number"
              name="amount"
              id=""
              className="billdetails__input"
              placeholder="Enter amount in NGN"
              value={amount}
              onChange={this.onChange}
            />
          </div>
          <p className="billdetails__text">
            You'll be charged 3.00 GBP for this transaction
          </p>
          <button style={buttonStyle} onClick={toggleModal}>Continue</button>
        </form>
      </div>
    );
  }
}
export default BillDetails;
