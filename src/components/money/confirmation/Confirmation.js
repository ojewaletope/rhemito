import React from 'react'
import {Modal} from 'antd'
import {Link} from 'react-router-dom'
import './Confirmation.css'

const Confirmation = ({open, onCancel})=> {
  return (
    <Modal visible={open} onCancel={onCancel}>
      <ConfirmationCard/>
    </Modal>
  )
};
const ConfirmationCard = ()=> {
  return(
    <div className="confirmation__container">
      <i className="fa fa-check fa-4x"></i>
      <div className="confirmation__text">Your payment is successful</div>
      <div className="confirmation__text">A confirmation email has been sent to rhemito@gmail.com</div>
      <Link to="/" className="confirmation__link">Go back to Homepage</Link>
    </div>
  )
}
export default Confirmation