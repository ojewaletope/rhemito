import React from "react";
import HeroSection from "../hero-section/HeroSection";
import Banner from "../../components/banner/Banner";
import Footer from "../../components/footer/Footer";
import SignUp from "../../components/form/signup/SignUp";
import Login from "../../components/form/login/Login";
import ComparePrices from "../../components/compareprices/ComparePrices";
import AirtimeLogin from "../../components/airtime/airtimelogin/AirtimeLogin";
import BillsLogin from "../../components/bills/billslogin/BillsLogin";
import BillsBeneficiary from "../../components/money/beneficiary/BeneficiaryDetails";

class HomePage extends React.Component {
  state = {
    signupVisibility: false,
    loginVisibility: false,
    comparePricesVisibility: false,
    airtimeLoginVisibility: false,
    billsLoginVisibility: false,
    billsBeneficiary: false
  };

  toggleSignup = e => {
    e.preventDefault();
    this.setState(previousState => ({
      signupVisibility: !previousState.signupVisibility,
      loginVisibility: false,
      comparePricesVisibility: false,
      airtimeLoginVisibility: false,
      billsBeneficiary: false
    }));
    console.log(this.state);
  };
  toggleLogin = e => {
    e.preventDefault();
    this.setState(previousState => ({
      loginVisibility: !previousState.loginVisibility,
      signupVisibility: false,
      comparePricesVisibility: false,
      airtimeLoginVisibility: false,
      billsBeneficiary: false
    }));
  };
  toggleComparePrices = e => {
    e.preventDefault();
    this.setState(previousState => ({
      comparePricesVisibility: !previousState.comparePricesVisibility,
      signupVisibility: false,
      loginVisibility: false,
      airtimeLoginVisibility: false,
      billsBeneficiary: false
    }));
    console.log(this.state);
  };
  toggleAirtimeLogin = e => {
    e.preventDefault();
    this.setState(previousState => ({
      airtimeLoginVisibility: !previousState.airtimeLoginVisibility,
      signupVisibility: false,
      loginVisibility: false,
      comparePricesVisibility: false,
      billsBeneficiary: false
    }));
  };
  toggleBillsLogin = e => {
    e.preventDefault();
    this.setState(previousState => ({
      billsLoginVisibility: !previousState.billsLoginVisibility,
      signupVisibility: false,
      loginVisibility: false,
      comparePricesVisibility: false,
      billsBeneficiary: false
    }));
  };
  toggleBillsBeneficiary = e => {
    e.preventDefault();
    this.setState(prevState => ({
      billsBeneficiary: !prevState.billsBeneficiary,
      signupVisibility: false,
      loginVisibility: false,
      comparePricesVisibility: false,
      airtimeLoginVisibility: false
    }));
  };
  render() {
    const {
      signupVisibility,
      loginVisibility,
      comparePricesVisibility,
      airtimeLoginVisibility,
      billsLoginVisibility,
      billsBeneficiary
    } = this.state;
    const { tabIndex } = this.props;
    return (
      <React.Fragment>
        <HeroSection
          toggleSignup={this.toggleSignup}
          toggleLogin={this.toggleLogin}
          toggleComparePrices={this.toggleComparePrices}
          toggleAirtimeLogin={this.toggleAirtimeLogin}
          toggleBillsLogin={this.toggleBillsLogin}
          toggleBillsBeneficiary={this.toggleBillsBeneficiary}
          tabIndex={tabIndex}
        />
        <SignUp
          open={signupVisibility}
          onCancel={this.toggleSignup}
          toggleLogin={this.toggleLogin}
        />
        <Login
          open={loginVisibility}
          onCancel={this.toggleLogin}
          toggleSignUp={this.toggleSignup}
        />
        <AirtimeLogin
          open={airtimeLoginVisibility}
          onCancel={this.toggleAirtimeLogin}
          toggleSignUp={this.toggleSignup}
        />
        <BillsLogin
          open={billsLoginVisibility}
          onCancel={this.toggleBillsLogin}
          toggleSignup={this.toggleSignup}
        />
        {/* <BillsBeneficiary
          open={billsBeneficiary}
          onCancel={this.toggleBillsBeneficiary}
        /> */}
        <Banner />
        <Footer />
        <ComparePrices
          open={comparePricesVisibility}
          onCancel={this.toggleComparePrices}
        />
        
      </React.Fragment>
    );
  }
}
export default HomePage;
