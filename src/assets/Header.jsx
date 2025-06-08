import React, { useState } from "react";
import "../App.css";
import Logo from "./Logo";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="header">
      <div className="cheaild_contents">
        <Logo />

        {/* Desktop Menu */}
        <div className="menu desktop-menu">
          <ul>
            <li>ფეხბურთი</li>
            <li>კალათბურთი</li>
            <li>ჩოგბურთი</li>
            <li>ორთაბრძოლები</li>
            <li>რაგბი</li>
            <li>სხვა</li>
          </ul>
        </div>

        {/* Hamburger Icon */}
        <div className="hamburger-menu" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>

      {/* Dropdown Menu */}
      {menuOpen && (
        <div className="dropdown-menu">
          <ul>
            <li>ფეხბურთი</li>
            <li>კალათბურთი</li>
            <li>ჩოგბურთი</li>
            <li>ორთაბრძოლები</li>
            <li>რაგბი</li>
            <li>სხვა</li>
          </ul>
        </div>
      )}
    </div>
  );
}
