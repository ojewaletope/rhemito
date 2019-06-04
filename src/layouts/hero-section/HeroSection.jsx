import React from "react";
import Header from "../../components/header/Header";
import Main from "../../components/main/Main";
import "./HeroSection.css";
const HeroSection = ({
  toggleSignup,
  toggleLogin,
  toggleComparePrices,
  toggleAirtimeLogin,
  toggleBillsLogin,
  toggleBillsBeneficiary,
  tabIndex
}) => (
  <div className="hero">
    <Header toggleSignup={toggleSignup} />
    <Main
      toggleLogin={toggleLogin}
      toggleComparePrices={toggleComparePrices}
      toggleAirtimeLogin={toggleAirtimeLogin}
      toggleBillsLogin={toggleBillsLogin}
      toggleBillsBeneficiary={toggleBillsBeneficiary}
      tabIndex={tabIndex}
    />
  </div>
);

export default HeroSection;
