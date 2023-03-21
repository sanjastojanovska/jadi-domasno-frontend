import React, { useState } from "react";
import { Link } from "react-router-dom";

interface Props {}

const Header: React.FC<Props> = (props) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={`header ${menuOpen ? " menu-open" : ""}`}>
       <button className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        <span className="navicon"></span>
      </button>

      <ul className="menu">
        <li>
          <Link to="/">
            <img src="/images/jadidomashnologo.svg" alt="" />
            Јади домашно
          </Link>
        </li>
        <li>
          <Link to="/how-it-works">
            <img src="/images/header-icon2.svg" alt="" />
            Како функционира
          </Link>
        </li>
        <li>
          <Link to="/chefs">
            <img src="/images/header-icon3.svg" alt="" />
            Готвачи
          </Link>
        </li>
        <li>
          <Link to="/">
            <img src="/images/header-icon4.svg" alt="" />
            Побарај понуда
          </Link>
        </li>
        <li>
          <Link to="/menu">
            <img src="/images/header-icon5.svg" alt="" />
            Мени
          </Link>
        </li>
        <li>
          <Link to="/">
            <img src="/images/header-icon6.svg" alt="" />
            Форум
          </Link>
        </li>
      </ul>

      <ul className="secondary-actions">
        <li>
          <button className="btn-header"><i className="fas fa-search"></i>Пребарајте</button>
        </li>
        <li>
          <Link to="/" className="icon-login">
            <img src="/images/header-icon6.svg" alt="" />
            <span>Мој профил</span>
          </Link>
        </li>

        <li>
          <Link to="/" className="icon-cart">
            <img src="/images/header-icon6.svg" alt="" />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
