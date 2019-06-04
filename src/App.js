import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import SignUp from "./components/form/signup/SignUp";
import HomePage from "./layouts/home/HomePage";
import SendMoney from "./components/money/sendmoney/SendMoney";
import BeneficiaryDetails from "./components/money/beneficiary/BeneficiaryDetails";
import Confirm from "./components/money/beneficiary/Confirm";
import Beneficiary from "./components/money/beneficiary/Beneficiary";
import TransactionalDetails from "./components/money/transaction/TransactionDetails";
import BillDetails from "./components/bills/billdetails/BillDetails";
import AirtimeDetails from "./components/airtime/airtimedetails/AirtimeDetails";
import BillsBeneficiary from "./components/bills/billsbeneficiary/BillsBeneficiary";
import AirtimeBeneficiaryDetails from "./components/airtime/airtimebeneficiary/AirtimeBeneficiaryDetails";
import AirtimeConfirm from "./components/airtime/airtimetransaction/AirtimeConfirm";
import AirtimeTransactionDetails from "./components/airtime/airtimetransaction/AirtimeTransaction";
import Footer from "./components/footer/Footer";
import { MainFooter } from "./components/main/Main";
import BillsBeneficiaryDetails from "./components/bills/billsbeneficiary/BillsBeneficiaryDetails";
import BillsConfirm from "./components/bills/billsconfirm/BillsConfirm";
import BillsTransactionalDetails from "./components/bills/billstransactiondetails/BillsTransactionDetails";
// import { BillsBeneficiaryDetails } from "./components/bills/billsbeneficiary/BillsBeneficiaryDetails";

export const buttonStyle = {
  margin: "30px 0",
  width: "100%",
  border: "none",
  color: "#fff",
  backgroundColor: "#00CB9D",
  padding: "10px",
  borderRadius: "5px"
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/sendmoney" component={SendMoney} />
              <Route
                exact
                path="/beneficiarydetails"
                component={BeneficiaryDetails}
              />
              <Route exact path="/confirm" component={Confirm} />
              <Route exact path="/beneficiary" component={Beneficiary} />
              <Route
                exact
                path="/transactiondetails"
                component={TransactionalDetails}
              />
              <Route exaxt path="/airtimedetails" component={AirtimeDetails} />
              <Route
                exact
                path="/airtimebeneficiarydetails"
                component={AirtimeBeneficiaryDetails}
              />
              <Route exact path="/airtimeconfirm" component={AirtimeConfirm} />
              <Route
                exact
                path="/airtimetransactiondetails"
                component={AirtimeTransactionDetails}
              />
              <Route exact path="/billsdetails" component={BillDetails} />
              <Route
                exact
                path="/billsbeneficiarydetails"
                component={BillsBeneficiaryDetails}
              />
              <Route exact path="/billsconfirm" component={BillsConfirm} />
              <Route
                exact
                path="/billstransactiondetails"
                component={BillsTransactionalDetails}
              />
            </Switch>
            {/* <MainFooter/>
            <Footer/> */}
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
