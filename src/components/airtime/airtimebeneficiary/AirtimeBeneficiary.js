import React from "react";
import { Modal } from "antd";
import { Link } from "react-router-dom";
import { Select } from "antd";
const Option = Select.Option;

const AirtimeBeneficiary = ({ open, onCancel }) => {
  return (
    <Modal visible={open} onCancel={onCancel}>
      <AirtimeBeneficiaryDetails />
    </Modal>
  );
};

class AirtimeBeneficiaryDetails extends React.Component {
  handleChange = value => {
    console.log(value);
  };
  render() {
    return <form className="beneficiary__form">
        <h3 className="beneficiary__form--header">
          Who are you sending Airtime to?
        </h3>
        <Select placeholder="Select beneficiary" onChange={this.handleChange}>
          <Option value="Ope Adeoye">Ope Adeoye</Option>
          <Option value="Tope Ojewale">Tope Ojewale</Option>
          <Option value="Collins">Collins</Option>
        </Select>
        {/* {errors.beneficiary_bank && <InlineError text={errors.beneficiary_bank} />} */}
        <h4 className="beneficiary__header--text-2">Recipient Details</h4>
        <input type="text" name="beneficiary_email" id="beneficiary_email" className="beneficiary__input" placeholder="Recipient's email address" />
        <h4 className="beneficiary__header--text-3">Beneficiary details</h4>
        <Select placeholder="Select Airtime Operator" onChange={this.handleChange}>
          <Option value="MTN">MTN</Option>
          <Option value="GLO">GLO</Option>
          <Option value="AIRTEL">AIRTEL</Option>
        </Select>
        {/* {errors.beneficiary_bank && <InlineError text={errors.beneficiary_bank} />} */}
        <input type="number" name="beneficiary_account" className="beneficiary__input" placeholder="Phone Number" />
        {/* {errors.beneficiary_account && <InlineError text={errors.beneficiary_account} />} */}
        <Link to="/airtimebeneficiarydetails" className="beneficiary__btn btn btn-block text-center">
          confirm
        </Link>
      </form>;
  }
}

export default AirtimeBeneficiary;
