import React from "react";
import "./AirtimeDetails.css";
import { FormGroup, InputGroup, FormControl } from "react-bootstrap";
import { buttonStyle } from "../../../App";
import Header from "../../header/Header";
import { MainFooter } from "../../main/Main";
import Footer from "../../footer/Footer";
import AirtimeBeneficiary from "../airtimebeneficiary/AirtimeBeneficiary";

class AirtimeDetails extends React.Component {
  state = {
    airtimeBeneficiaryModal: false
  };
  toggleAirtimeBeneficiary = e => {
    e.preventDefault();
    this.setState(prevState => ({
      airtimeBeneficiaryModal: !prevState.airtimeBeneficiaryModal
    }));
  };
  render() {
    const { airtimeBeneficiaryModal } = this.state;
    return (
      <React.Fragment>
        <AirtimeDetailsForm toggleModal={this.toggleAirtimeBeneficiary} />
        <MainFooter />
        <AirtimeBeneficiary
          open={airtimeBeneficiaryModal}
          onCancel={this.toggleAirtimeBeneficiary}
        />
        <Footer />
      </React.Fragment>
    );
  }
}
class AirtimeDetailsForm extends React.Component {
  render() {
    const { toggleModal } = this.props;
    return (
      <div className="airtime__details--wrapper">
        <Header />
        <form action="" className="airtime__details">
          <h3>Enter Airtime details</h3>
          <FormGroup>
            <InputGroup>
              <FormControl type="text" placeholder="Airtime" />
              <InputGroup.Addon>
                <i className="fa fa-caret-down" />
              </InputGroup.Addon>
            </InputGroup>
          </FormGroup>
          <FormGroup>
            <InputGroup>
              <InputGroup.Addon>+234</InputGroup.Addon>
              <FormControl type="text" placeholder="Send Recharge to" />
            </InputGroup>
          </FormGroup>
          <FormGroup>
            <InputGroup>
              <InputGroup.Addon>+234</InputGroup.Addon>
              <FormControl type="text" placeholder="Confirm Number" />
            </InputGroup>
          </FormGroup>
          <FormGroup>
            <InputGroup>
              <FormControl type="text" placeholder="Top-Up Amount" />
              <InputGroup.Addon>
                <i className="fa fa-caret-down" />
              </InputGroup.Addon>
            </InputGroup>
          </FormGroup>
          <FormGroup>
            <InputGroup>
              <FormControl type="text" placeholder="Mobile Operator" />
              <InputGroup.Addon>
                <i className="fa fa-caret-down" />
              </InputGroup.Addon>
            </InputGroup>
          </FormGroup>
          <div className="output__result">
            <div className="output__result--container">
              <div className="airtime__total">
                <p>Your pay in total</p>
                <p>GBP 1.04</p>
              </div>
              <div className="recipient__total">
                <p>Your recipient get</p>
                <p>NGN 500</p>
              </div>
            </div>
          </div>
          <button
            className="airtime__details--btn"
            style={buttonStyle}
            onClick={toggleModal}
          >
            Send
          </button>
        </form>
      </div>
    );
  }
}
export default AirtimeDetails;
