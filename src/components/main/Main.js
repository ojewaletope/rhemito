import React from "react";
import "./Main.css";
// import {Tabs} from 'antd'
import MoneyForm from "../money/MoneyForm";
import AirtimeForm from "../airtime/airtimeform/AirtimeForm";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import BillsContent from "../bills/BillsContent";
import BillsType from "../bills/BillsType";

// const TabPane = Tabs.TabPane
export const MainFooter = () => {
  return (
    <div className="main__footer">
      <div className="main__footer--contents">
        <div className="main__footer--content">
          <img src="img/location.png" alt="" className="main__footer--img" />
          <div>
            <h3 className="main__footer--heading">Cash pickup</h3>
            <p className="main__footer--text">
              Pickup cash from our local agents (Tellars) in minutes
            </p>
          </div>
        </div>
        <div className="main__footer--content">
          <img src="img/bank.png" alt="" className="main__footer--img" />
          <div>
            <h3 className="main__footer--heading">Bank</h3>
            <p className="main__footer--text">
              Send money straight to bank accounts
            </p>
          </div>
        </div>
        <div className="main__footer--content">
          <img src="img/wallet.png" alt="" className="main__footer--img" />
          <div>
            <h3 className="main__footer--heading">Mobile Money Wallet</h3>
            <p className="main__footer--text">
              Transfers made instantly to Mobile Money accounts
            </p>
          </div>
        </div>
        <div className="main__footer--content">
          <img src="img/phone.png" alt="" className="main__footer--img" />
          <div>
            <h3 className="main__footer--heading">Mobile topup</h3>
            <p className="main__footer--text">
              Top up any all network providers directly from Rhemito
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

class Main extends React.Component {
  state = {
    tabIndex: ""
  };
  handleSelect = tabIndex => {
    this.setState({ tabIndex });
    console.log(tabIndex);
  };
  render() {
    const {
      toggleLogin,
      toggleComparePrices,
      toggleAirtimeLogin,
      toggleBillsLogin,
      toggleBillsBeneficiary
    } = this.props;
    const { tabIndex } = this.state;
    return (
      <div className="main">
        <div className="main__container">
          <div className="main__left">
            <div className="main__left--content">
              <h1 className="main__header">Fast, secure money transfers.</h1>
              <p className="main__text">
                Built to make life easier for you to send money and value <br />{" "}
                to your loved ones worldwide. We offer you the best <br /> rates
                in the market!
              </p>
              <button
                className="main__btn main__btn--primary"
                onClick={toggleComparePrices}
              >
                Why Rhemito?
              </button>
            </div>
          </div>
          <div className="main__right">
            <Tabs selected={tabIndex} onSelect={this.handleSelect}>
              <TabList className="main__tab--list">
                <Tab className="main__tablist--item">Send Money</Tab>
                <Tab className="main__tablist--item">Airtime Top up</Tab>
                <Tab className="main__tablist--item">Bills</Tab>
              </TabList>
              <TabPanel>
                <MoneyForm toggleLogin={toggleLogin} />
              </TabPanel>
              <TabPanel>
                <AirtimeForm toggleAirtimeLogin={toggleAirtimeLogin} />
              </TabPanel>
              <TabPanel>
                <BillsType toggleBillsLogin={toggleBillsLogin}/>
                {/* <BillsContent
                  toggleBillsLogin={toggleBillsLogin}
                  toggleBeneficiaryDetails={toggleBillsBeneficiary}
                /> */}
              </TabPanel>
            </Tabs>
          </div>
        </div>
        <MainFooter />
      </div>
    );
  }
}
export default Main;
