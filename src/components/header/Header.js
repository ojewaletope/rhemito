import React from "react";
import "./Header.css";
import {Link} from 'react-router-dom'

class Header extends React.Component {
  render() {
    // const { match } = this.props;
    const { toggleSignup, toggleLogin } = this.props;
    return (
      <header className="header">
        <span className="menu__btn" role="button">
          <img src="img/menu-button.png" alt="menu" className="menu__btn--icon" />
        </span>
        <div className="nav__brand">
          <Link to="/" className="nav__link">rhemito</Link>
        </div>
        <nav className="nav">
          <ul className="nav__list">
            {/*<li className="nav__list--item">*/}
              {/*<Link to="/sendmoney" className="nav__link">send money</Link>*/}
            {/*</li>*/}
            <li className="nav__list--item">
              <Link to="/login" className="nav__link" onClick={toggleLogin}>log in</Link>
            </li>
          </ul>
        </nav>
        <Link to="/signup" className="nav__link nav__btn" onClick={toggleSignup}>
          Sign up
        </Link>
      </header>
    );
  }
}
export default Header;
