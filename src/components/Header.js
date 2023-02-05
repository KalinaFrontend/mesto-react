import React from "react";
import '../index.css';
import logo from '../images/header-logo.svg';

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Логотип Место Россия" className="logo" />
    </header>
  );
}

export default Header;