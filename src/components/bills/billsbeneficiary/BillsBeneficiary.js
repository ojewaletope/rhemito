import React from "react";
import { Modal } from "antd";
import { Link } from "react-router-dom";
import { Select } from "antd";
import { buttonStyle } from "../../../App";

const Option = Select.Option;

const BillsBeneficiary = ({ open, onCancel }) => {
  return (
    <Modal visible={open} onCancel={onCancel}>
      <BillsBeneficiaryDetails />
    </Modal>
  );
};

class BillsBeneficiaryDetails extends React.Component {
  handleSelect = value => {
    console.log(value);
  };
  render() {
    return (
      <form className="beneficiary__form">
        <h3 className="beneficiary__form--header">
          Who are you paying the bill for
        </h3>
        <Select placeholder="Select beneficiary" onChange={this.handleSelect}>
          <Option value="Ope Adeoye">Ope Adeoye</Option>
          <Option value="Tope Ojewale">Tope Ojewale</Option>
          <Option value="Collins">Collins</Option>
        </Select>
        {/* {errors.beneficiary_bank && <InlineError text={errors.beneficiary_bank} />} */}
        <h4 className="beneficiary__header--text-2">Recipient Details</h4>
        <input
          type="text"
          name="beneficiary_email"
          id="beneficiary_email"
          className="beneficiary__input"
          placeholder="Recipient's email address"
        />
        <input
          type="text"
          name="beneficiary_phone"
          className="beneficiary__input"
          placeholder="Phone Number"
        />
        <Link to="/billsbeneficiarydetails" className=" btn btn-block text-center">
          <button style={buttonStyle}> Confirm</button>
        </Link>
      </form>
    );
  }
}

export default BillsBeneficiary;
