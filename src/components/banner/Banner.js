import React from 'react'
import './Banner.css'

const Banner = () => {
  return(
    <section className="banner">
      <h1 className="banner__header">Why Rhemito</h1>
      <div className="banner__flex">
        <div>
          <img src="https://res.cloudinary.com/topeojewale/image/upload/v1531294907/rhemito/mobile.png" alt="mobile"/>
        </div>
        <div className="flex__content">
          <div className="content">
            <h4 className="content__header">Low transfer cost</h4>
            <p className="content__text">Our low fees and exchange rates are shown upfront</p>
          </div>
          <div className="content">
            <h4 className="content__header">Low transfer cost</h4>
            <p className="content__text">Our low fees and exchange rates are shown upfront</p>
          </div>
          <div>
            <p>Available on mobile soon</p>
            <input type="text" placeholder="We will notify you via email" className="banner__input"/>
            <button className="banner__btn">Subscribe</button>
          </div>
        </div>
          <div className="flex__content">
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

    </section>
  )
};
// export const BannerRight = () => {
//   return(
//     <div className="banner__right">
//  {/*<img src="https://res.cloudinary.com/topeojewale/image/upload/v1531294907/rhemito/mobile.png" alt="mobile"/>*/}
//
//       </div>
//       <div className="banner__right--content-2">
//         <div className="content">
//           <h4 className="content__header">Low transfer cost</h4>
//           <p className="content__text">Our low fees and exchange rates are shown upfront</p>
//         </div>
//         <div className="content">
//           <h4 className="content__header">Speedy delivery</h4>
//           <p className="content__text">Rhemito can get money to family and friends in minutes</p>
//         </div>
//       </div>
//       <div className="banner__right--content-3">
//
//       </div>
//     </div>
//   )
// }
export default Banner