import React from 'react'
import './BillType.css'
import { Radio } from 'antd';
import {Link} from 'react-router-dom'
import {buttonStyle} from "../../App";

const RadioGroup = Radio.Group;

class BillsType extends React.Component {
  state = {
    value: ""
  };
  onChange = (e) => {
    console.log('radio checked', e.target.value);
    this.setState({
      value: e.target.value,
    });
  };
  render() {
    const {toggleBillsLogin} =this.props;
    const radioStyle = {
      display: 'block',
      height: '30px',
      lineHeight: '30px',
      marginBottom:'10px'
    };

    return (
      <div>
        <form action="" className="billtype__form">
          <div className="billtype__container">
            <h4>Select Biller</h4>
            <RadioGroup onChange={this.onChange} value={this.state.value}>
              <Radio style={radioStyle} value="swift subscription">SWIFT 4G Network Subscription</Radio>
              <Radio style={radioStyle} value="EKEDC">EKEDC</Radio>
              <Radio style={radioStyle} value="IKEDC">IKEDC</Radio>
              <Radio style={radioStyle} value="DSTV subscription">DSTV subscription</Radio>
              <Radio style={radioStyle} value="GoTV">GoTV</Radio>
              <Radio style={radioStyle} value="LAWMA">LAWMA</Radio>
            </RadioGroup>
          </div>
          <button className="billtype__btn" style={buttonStyle} onClick={toggleBillsLogin}>Next</button>
        </form>
      </div>
    )
  }
}

export default BillsType