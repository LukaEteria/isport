import React, { useState } from "react";
import { Link } from "react-router-dom";
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
            <li><Link to="/football">ფეხბურთი</Link></li>
            <li><Link to="/basketball">კალათბურთი</Link></li>
            <li><Link to="/tennis">ჩოგბურთი</Link></li>
            <li><Link to="/combatsports">ორთაბრძოლები</Link></li>
            <li><Link to="/rugby">რაგბი</Link></li>
            <li><Link to="/other">სხვა</Link></li>
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
            <li><Link to="/football">ფეხბურთი</Link></li>
            <li><Link to="/basketball">კალათბურთი</Link></li>
            <li><Link to="/tennis">ჩოგბურთი</Link></li>
            <li><Link to="/combatsports">ორთაბრძოლები</Link></li>
            <li><Link to="/rugby">რაგბი</Link></li>
            <li><Link to="/other">სხვა</Link></li>
          </ul>
        </div>
      )}
    </div>
  );
}
