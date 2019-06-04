import React from 'react'
import {Modal} from 'antd'
// import {BannerRight} from "../banner/Banner";
import './ComparePrices.css'

class ComparePrices extends React.Component {
  render() {
    const {open, onCancel} = this.props;
    return(
      <Modal visible={open} onCancel={onCancel}>
        <Compare/>
      </Modal>
    )
  }
}


const Compare = ()=> {
  return(
    <div className="modal__container">
     <ListCard/>
      <Card/>
    </div>
  )
};

const Card = ()=> {
  return(
    <div className="rate__card">
      <h4 className="rate__header">See some of our amazing rates</h4>
      <ul className="modal__list">
        <li className="modal__list--item">
          <span>

             1 GBP
          </span>
          <span>

             477.83 NGN
          </span>
        </li>
        <li className="modal__list--item">
          <span>

             1 GBP
          </span>
          <span>

             17.52 SAR
          </span>
        </li>
        <li className="modal__list--item">
          <span>

             1 GBP
          </span>
          <span>
           133.71 NGN
          </span>
        </li>
        <li className="modal__list--item">
          <span>

             1 GBP
          </span>
          <span>

             6.32 GHC
          </span>
        </li>
      </ul>
    </div>
  )
};
const ListCard = ()=> {
  return(
    <div className="list__card">
      <div className="compare__modal">
        <div className="modal__content">
          <div className="content">
            <h4 className="content__header">Low transfer cost</h4>
            <p className="content__text">Our low fees and exchange rates are shown upfront</p>
          </div>
          <div className="content">
            <h4 className="content__header">Low transfer cost</h4>
            <p className="content__text">Our low fees and exchange rates are shown upfront</p>
          </div>
        </div>
        <div className="modal__content">
          <div className="content">
            <h4 className="content__header">Speedy delivery</h4>
            <p className="content__text">Rhemito can get money to family and friends in minutes</p>
          </div>
          <div className="content">
            <h4 className="content__header">Low transfer cost</h4>
            <p className="content__text">Our low fees and exchange rates are shown upfront</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ComparePrices