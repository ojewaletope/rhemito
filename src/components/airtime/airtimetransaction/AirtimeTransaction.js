import React from 'react'
import Header from "../../header/Header";
import { Link } from 'react-router-dom'
import Footer from '../../../components/footer/Footer'
import { MainFooter } from "../../main/Main";
import Confirmation from '../../money/confirmation/Confirmation'
import ProgressBar from '../../progressbar/ProgressBar'
import './AirtimeTransaction.css'

class AirtimeTransactionDetails extends React.Component {
  state = {
    confirmationModal: false
  };
  toggleConfirmationModal = e => {
    console.log(this.state);
    e.preventDefault();
    this.setState(previousState => ({
      confirmationModal: !previousState.confirmationModal
    }))
  };
  render() {
    const { confirmationModal } = this.state;
    return (
      <div>
        <div className="main__bg--container">
          <Header />
          <AirtimeTransaction toggleConfirmation={this.toggleConfirmationModal}
          />
        </div>
        <MainFooter />
        <Confirmation open={confirmationModal}
          onCancel={this.toggleConfirmationModal}
        />
        <Footer />
      </div>
    )
  }
}

const AirtimeTransaction = ({ toggleConfirmation }) => {
  return (
    <div className="transaction">
      <ProgressBar />
      <h4 className="transaction__header">review details of your transfer</h4>
      <ul className="transaction__list transaction__list--one">
        <li className="transaction__list--flex">
          <span className="transaction__label label__header">Transaction Details</span>
          <Link to="/"><span className="transaction__value transaction__link">Edit</span></Link>
        </li>
        <li className="transaction__list--flex">
          <span className="transaction__label">You send</span>
          <span className="transaction__value--bold">50 GBP</span>
        </li>
        <li className="transaction__list--flex">
          <span className="transaction__label">Total fees</span>
          <span className="transaction__value">-1.20 GBP</span>
        </li>
        <li className="transaction__list--flex">
          <span className="transaction__label">Amount we'll convert</span>
          <span className="transaction__value">48.80 GBP</span>
        </li>
        <li className="transaction__list--flex">
          <span className="transaction__label">Guaranteed rate(24hrs)</span>
          <span className="transaction__value">472.30890</span>
        </li>
        <li className="transaction__list--flex">
          <span className="transaction__label">Recipient get</span>
          <span className="transaction__value--bold">23,048.72 NGN</span>
        </li>
        <li className="transaction__list--flex">
          <span className="transaction__label">Should arrive</span>
          <span className="transaction__value">by May 30</span>
        </li>
      </ul>
      <ul className="transaction__list">
        <li className="transaction__list--flex">
          <span className="transaction__label label__header">Recipient Details</span>
          <Link to="/beneficiarydetails"><span className="transaction__value transaction__link">Change</span></Link>
        </li>
        <li className="transaction__list--flex">
          <span className="transaction__label">Name</span>
          <span className="transaction__value">Femi Williams</span>
        </li>
        <li className="transaction__list--flex">
          <span className="transaction__label">Email</span>
          <span className="transaction__value">fw@gmail.com</span>
        </li>
        <li className="transaction__list--flex">
          <span className="transaction__label">Beneficiary Network</span>
          <span className="transaction__value">MTN</span>
        </li>
        <li className="transaction__list--flex">
          <span className="transaction__label">Phone Number</span>
          <span className="transaction__value">08062166145</span>
        </li>
      </ul>
      <h5 className="transaction__label label__header">Reference</h5>
      <form action="">
        <input type="text"
          name="reference"
          id="reference"
          className="transaction__input"
          placeholder="Type a reference for recipient" />
        <button className="transaction__btn btn btn-block text-center" onClick={toggleConfirmation}>Confirm and Continue</button>
      </form>
    </div>
  )
}
export default AirtimeTransactionDetails