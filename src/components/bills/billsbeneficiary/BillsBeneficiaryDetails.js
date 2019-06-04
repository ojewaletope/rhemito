import React from "react";
import Footer from "../../../components/footer/Footer";
import { MainFooter } from "../../main/Main";
import Header from "../../header/Header";
import "./BillsBeneficiaryDetails.css";
import { Link } from "react-router-dom";
import { Select } from "antd";

const Option = Select.Option;

class BillsBeneficiaryDetails extends React.Component {
  handleChange = value => {
    console.log(`selected ${value}`);
  };
  render() {
    return (
      <div className="beneficiary__container">
        <React.Fragment>
          <RecipientDetailsForm />
          <div className="main__wrapper">
            <MainFooter />
            <Footer />
          </div>
        </React.Fragment>
      </div>
    );
  }
}
export class RecipientDetailsForm extends React.Component {
  render() {
    return (
      <div className="beneficiary__details">
        <Header />
        <form action="" className="beneficiary__details--form">
          <div>
            <input
              type="text"
              name="beneficiary__details--name"
              id=""
              className="beneficiary__details--input"
              placeholder="Enter name of the recipient"
            />
          </div>
          <div className="beneficiary__input--label">Date of birth</div>
          <div className="beneficiary__dob--container">
            <input
              type="number"
              placeholder="01"
              className="beneficiary__details--input-1"
            />
            <Select
              style={{ width: "100%" }}
              placeholder="Select month of birth"
              onChange={this.handleChange}
            >
              <Option value="January">January</Option>
              <Option value="February">February</Option>
              <Option value="March">March</Option>
              <Option value="April">April</Option>
              <Option value="May">May</Option>
              <Option value="June">June</Option>
              <Option value="July">July</Option>
              <Option value="August">August</Option>
              <Option value="September">September</Option>
              <Option value="October">October</Option>
              <Option value="November">November</Option>
              <Option value="December">December</Option>
            </Select>
            <input
              type="number"
              name="year"
              id="year"
              className="beneficiary__details--input-2"
            />
          </div>
          <div className="beneficiary__input--label">Phone Number</div>
          <div className="beneficiary__phone--container">
            <Select
              style={{ width: "100%" }}
              placeholder="Select country code"
              onChange={this.handleChange}
            >
              <Option value="+44">+44</Option>
              <Option value="+45">+45</Option>
              <Option value="+46">+46</Option>
              <Option value="+1">+1</Option>
              <Option value="+36">+36</Option>
            </Select>
            <input
              type="number"
              name="beneficiary__phone--number"
              id="beneficiary__phone--number"
              placeholder="7890123456"
              className="beneficiary__phone--number"
            />
          </div>
          <div className="beneficiary__input--label">Your Address</div>
          <input
            type="text"
            placeholder="21 Downing street, London"
            className="beneficiary__details--input"
          />
          <div className="beneficiary__input--label">City</div>
          <input
            type="text"
            className=""
            placeholder="London"
            className="beneficiary__details--input"
          />
          <div className="beneficiary__input--label">Postal code</div>
          <input
            type="text"
            className=""
            placeholder="E1234"
            className="beneficiary__details--input"
          />
          <div>
            <Link
              to="/billsconfirm"
              className="beneficiary__details--btn btn btn-block text-center"
            >
              Proceed
            </Link>
          </div>
        </form>
      </div>
    );
  }
}
export default BillsBeneficiaryDetails;
