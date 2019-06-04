import React from "react";
import Header from "../../../components/header/Header";
import Footer from "../../../components/footer/Footer";
import { MainFooter } from "../../main/Main";
import { Link } from "react-router-dom";
import "./AirtimeConfirm.css";
import { buttonStyle } from "../../../App";
import {Select} from 'antd';
const Option = Select.Option

class AirtimeConfirm extends React.Component {
  handleChange = value => {
    console.log(value)
  }
  render() {
    return <React.Fragment>
        <div className="main__background">
          <Header />
          <div className="confirm__flex">
            <div className="confirm__progressbar">Progress bar</div>
            <h4 className="confirm__header">
              Who are you sending money to
            </h4>
            <form action="" className="confirm__form">
              <Select placeholder="Select Beneficiary" onChange={this.handleChange}>
                <Option value="Collins">Collins</Option>
                <Option value="Ope Adeoye">Ope Adeoye</Option>
              </Select>
              {/* <select name="confirm__select" id="confirm__select" className="confirm__select">
              <option value="Ope adeoye">
                Select purpose of the transaction
                </option>
              <option value="collins">Collins</option>
            </select> */}
            </form>
            <div className="confirm__round">
              <span>fw</span>
            </div>
            <div className="confirm__name--details">
              <h4 className="confirm__header">femi williams</h4>
              <p className="confirm__text">femiwilliams@gmail.com</p>
            </div>
            <div className="confirm__name--details">
              <h4 className="confirm__header">
                Beneficiary's Network Provider
              </h4>
              <p className="confirm__text">MTN</p>
            </div>
            <div className="confirm__name--details">
              <h4 className="confirm__header">Phone Number</h4>
              <p className="confirm__text">08062166145</p>
            </div>
            <Link to="/beneficiary" className="confirm__link">
              Select another recipient
            </Link>
            <Link to="/airtimetransactiondetails">
              <button style={buttonStyle} className="btn btn-block">
                {" "}
                Confirm and continue
              </button>
            </Link>
          </div>
        </div>
        <div className="main__white">
          <MainFooter />
          <Footer />
        </div>
      </React.Fragment>;
  }
}
export default AirtimeConfirm;
