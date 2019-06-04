import React from 'react'
import './Footer.css'

const Footer = () => {
  return(
    <footer className="footer">
      <div className="footer__mobile">
        <p>Affiliates</p>
        <div className="footer__img">
          <img src="img/visa.png" className="footer__img-1" alt=""/>
          <img src="img/iamtn.png" className="footer__img-2" alt=""/>
          <img src="img/mastercard.png" className="footer__img-3" alt="" style={{maxWidth: '77px',
            maxHeight: '77px'}}/>
        </div>
        <div className="footer__text">
          Rhemito is powered by Funtech's Universal Remittance Portal(FURP), which is built to manage cross border payments and aggregate multiple payment partners worldwide
        </div>
        <ul className="footer__list">
          <li className="footer__list--item"><a href="#" className="footer__link">Support</a></li>
          <li className="footer__list--item"><a href="#" className="footer__link">Contact</a></li>
          <li className="footer__list--item"><a href="#" className="footer__link">Privacy&Terms</a></li>
        </ul>
        <div className="footer__location">
          <img src="img/arrow.png" alt="arrow" className="content__icon"/>
          United Kingdom
        </div>
        <div className="footer__company">
          <img src="img/comment.png" alt="comment" className="content__icon"/>
          Rhemito
        </div>
      </div>
      <div className="footer__desktop">
        <div className="desktop__location">
          <div className="desktop__location--content">
            <div className="content-1">
              <img src="img/arrow.png" alt="arrow" className="content__icon"/>
              United Kingdom
            </div>
            <div className="content-2">
              <img src="img/comment.png" alt="comment" className="content__icon"/>
              Rhemito
            </div>
          </div>
        </div>
        <div className="desktop__affiliate">
          <h4 className="desktop__affiliate--header">Affiliates</h4>
          <div className="desktop__affiliate--content">
           <div className="desktop__img--container-1">
             <img src="img/visa.png" alt="visa" className="desktop__affiliate--img"/>
             <img src="img/sofort.png" alt="sofort" className="desktop__affiliate--img"/>
           </div>
            <div className="desktop__img--container-2">
              <img src="img/mastercard.png" alt="mastercard" className="desktop__affiliate--img" style={{maxWidth: '77px',
                maxHeight: '77px'}}/>
              <img src="img/iamtn.png" alt="iamtn" className="desktop__affiliate--img" style={{maxWidth: '77px',
                maxHeight: '77px'}}/>
            </div>
          </div>
        </div>
        <div className="desktop__list--container">
          <ul className="desktop__list">
            <h2 className="desktop__list--header">PRODUCT</h2>
            <li className="desktop__list--item"><a href="#" className="desktop__list--link">Send Money</a></li>
            <li className="desktop__list--item"><a href="#" className="desktop__list--link">Airtime Topup</a></li>
            <li className="desktop__list--item"><a href="#" className="desktop__list--link">Bill Payment</a></li>
          </ul>
          <ul className="desktop__list">
            <h2 className="desktop__list--header">COMPANY</h2>
            <li className="desktop__list--item"><a href="#" className="desktop__list--link">About</a></li>
            <li className="desktop__list--item"><a href="#" className="desktop__list--link">Blog</a></li>
            <li className="desktop__list--item"><a href="#" className="desktop__list--link">Jobs</a></li>
            <li className="desktop__list--item"><a href="#" className="desktop__list--link">Press</a></li>
          </ul>
          <ul className="desktop__list">
            <h2 className="desktop__list--header">RESOURCES</h2>
            <li className="desktop__list--item"><a href="#" className="desktop__list--link">Support</a></li>
            <li className="desktop__list--item"><a href="#" className="desktop__list--link">Contact</a></li>
            <li className="desktop__list--item"><a href="#" className="desktop__list--link">Privacy & terms</a></li>
          </ul>
        </div>
      </div>
    </footer>
  )
};
export default Footer