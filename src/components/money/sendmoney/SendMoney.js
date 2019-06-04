import React from 'react';
import './SendMoney.css'
import Footer from '../../../components/footer/Footer'
import {MainFooter} from "../../main/Main";
import  {FormGroup, InputGroup, FormControl} from 'react-bootstrap'
import Header from "../../header/Header";
import Beneficiary from "../beneficiary/Beneficiary";
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

class SendMoney extends  React.Component{
  state = {
    beneficiaryModal: false
  };
  toggleBeneficiary = e => {
    e.preventDefault();
    this.setState(previousState => ({
      beneficiaryModal:!previousState.beneficiaryModal
    }))
  };
  render() {
    const {beneficiaryModal} = this.state;
    return(
      <React.Fragment>
        <SendMoneyForm toggleModal={this.toggleBeneficiary}/>
        <MainFooter/>
        <Beneficiary  open={beneficiaryModal} onCancel={this.toggleBeneficiary}/>
        <Footer/>
      </React.Fragment>
    )
  }
}
export default SendMoney

class SendMoneyForm extends React.Component {

  render () {
    const {toggleModal} = this.props;
    return (
      <div className="sendmoney">
        <Header/>
        <form action="" className="sendmoney__form--container">
          <h5 className="sendmoney__header">How much would you like to transfer</h5>
          <FormGroup>
            <InputGroup>
              <FormControl type="text"  placeholder="You send" onChange={this.handleChange}/>
              <InputGroup.Addon><img src="img/gb.png" alt=""/><span className="add__on--text">GBP</span></InputGroup.Addon>
            </InputGroup>
          </FormGroup>
          <div className="form__line--container">
            <div className="form__line">
              <span className="form__dot form__dot--1"/><span className="form__dot form__dot--2"/>
              <span className="form__line--text-1">1.20 GBP transfer fee</span>
              <span className="form__line--text-2">472.45108 <span className="inline__text">Guaranteed rate</span> (24hrs)</span>
            </div>
          </div>
          <Input addonAfter={selectAfter} />
          <div className="sendmoney__text">should arrive in 6hrs</div>
          <button className="sendmoney__btn" onClick={toggleModal}>Continue</button>
        </form>
      </div>
    )
  }
}
