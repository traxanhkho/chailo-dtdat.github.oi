import React, { useState } from "react";
import "./Navbar.scss";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { listItemNavbar } from "./data/list-item-navbar";

export const Navbar = () => {
  const localPathName = window.location.pathname;

  /* Logic active navbar item */
  const [active, setActive] = useState(localPathName);

  const CurrentActive = (pathLink) => {
    if (active === pathLink) {
      return " active";
    } else {
      return "";
    }
  };

  return (
    <nav className="navbar">
      <ul className="navbar__list">
        {listItemNavbar.map((item) => (
          <Link
            key={item.id}
            to={item.link}
            className={"navbar__item " + CurrentActive(item.link)}
            onClick={() => setActive(item.link)}
          >
            <i className="navbar__item-icon">{item.icon}</i>
            <p className="navbar__item-name">{item.itemName}</p>
          </Link>
        ))}
      </ul>
    </nav>
  );
};
