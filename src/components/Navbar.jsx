import React from 'react';
import Logo from './Logo';
import Hamburger from './Hamburger';

const Navbar = () => (
  <div className="Navbar">
    <Logo />
    <ul className="Navbar__links">
      <li>The company</li>
      <li>How we work</li>
      <li>Contact us</li>
    </ul>
    <div className="Navbar__links-mobile">
      <Hamburger />
    </div>
  </div>
);

export default Navbar;
