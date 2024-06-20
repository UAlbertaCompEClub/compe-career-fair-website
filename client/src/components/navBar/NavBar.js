import React, { useState } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import "./NavBar.css";

var NavBar = ({ visibleBlock }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((open) => !open);
  };

  var NavBarEntry = ({ text, visibleBlock, blockId }) => {
    return (
      <a href={`#${blockId}`} className={`anchor-base nav-item ${isOpen ? 'is-open' : ''}`}>
        <li className={`nav-item ${(visibleBlock === blockId) ? "nav-item-selected" : ""}`}>{text}</li>
      </a>
    );
  };

  return (
    <nav className="nav" id="navbar">
      <div className='mobile-extra-nav'>
        <div className='navLogo'>
          <p>Aether</p>
          <img src='/aetherStarLogo.svg'></img>
        </div>
        <div className='hamburger-container'>
          <a className='hamburger' onClick={toggleMenu}><RxHamburgerMenu /></a>
        </div>
      </div>
      <div className={`nav-content ${isOpen ? 'is-open' : ''}`}>
        <ul className="nav-items">
          <NavBarEntry visibleBlock={visibleBlock} blockId="landing-block" text="Home" />
          <NavBarEntry visibleBlock={visibleBlock} blockId="schedule-block" text="Schedule" />
          <NavBarEntry visibleBlock={visibleBlock} blockId="about-us-block" text="About" />
          <NavBarEntry visibleBlock={visibleBlock} blockId="sponsorBlock" text="Sponsors" />
          <NavBarEntry visibleBlock={visibleBlock} blockId="faq-block" text="FAQ" />
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
