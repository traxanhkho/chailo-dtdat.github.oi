import React from "react";
import { useState } from "react";
import { Link } from 'react-router-dom' ; 
import { icons } from "assets/icons/icons-svg";
import "./Header.scss";

export const Header = () => {

  /* Logic scroll show background header */
  const [sticky, setSticky] = useState("");
  window.addEventListener("scroll", () => {
    const scrolled = window.scrollY;
    if(scrolled > 0) {
      setSticky(" sticky");
    } else {
      setSticky("");
    }
  });


  /* Logic toggle SearchBar */
  const [open, setOpen] = useState('')

  const HandleSearchBar = () => {
    const screenWidth = window.innerWidth;
    if(screenWidth < 740) {
      if(open === '') {
        setOpen(" open")
      }
      else {
        setOpen("")
      }
    }
    
  }

  return (
    <header className={"header" + sticky}>
      <div className="header__logo">
        <span>
          <svg
            width="52"
            height="52"
            viewBox="0 0 52 52"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_44_593)">
              <path
                d="M17.0391 51.1169C21.7419 51.1169 25.5587 47.3001 25.5587 42.5973V34.0778H17.0391C12.3363 34.0778 8.51947 37.8946 8.51947 42.5973C8.51947 47.3001 12.3363 51.1169 17.0391 51.1169Z"
                fill="#0ACF83"
              />
              <path
                d="M8.51947 25.5584C8.51947 20.8556 12.3363 17.0388 17.0391 17.0388H25.5587V34.0777H17.0391C12.3363 34.0779 8.51947 30.2611 8.51947 25.5584Z"
                fill="#A259FF"
              />
              <path
                d="M8.51947 8.51955C8.51947 3.8168 12.3363 0 17.0391 0H25.5587V17.0389H17.0391C12.3363 17.0389 8.51947 13.2223 8.51947 8.51955Z"
                fill="#F24E1E"
              />
              <path
                d="M25.5582 0H34.0778C38.7806 0 42.5974 3.8168 42.5974 8.51955C42.5974 13.2223 38.7806 17.0389 34.0778 17.0389H25.5582V0Z"
                fill="#FF7262"
              />
              <path
                d="M42.5974 25.5584C42.5974 30.2611 38.7806 34.0779 34.0778 34.0779C29.375 34.0779 25.5582 30.2611 25.5582 25.5584C25.5582 20.8556 29.375 17.0388 34.0778 17.0388C38.7806 17.0388 42.5974 20.8556 42.5974 25.5584Z"
                fill="#1ABCFE"
              />
            </g>
            <defs>
              <clipPath id="clip0_44_593">
                <rect width="51.1169" height="51.1169" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </span>
        <h3 className="header__logo-name">CHAILO AN TÂM</h3>
      </div>
      <div className="header-wrapper">
        <div className={"header__search" + open}>
          <input
            type="text"
            className="header__search-control"
            placeholder="Search..."
          />
          <i className="header__search-icon" onClick={HandleSearchBar}>
            {icons.iconSearch}
          </i>
        </div>
        <Link to="/admin" className="header__contact">
          <p className="header__contact-number">Đăng Nhập</p>
        </Link>
      </div>
    </header>
  );
};
