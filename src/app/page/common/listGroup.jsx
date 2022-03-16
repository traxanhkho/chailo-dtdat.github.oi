import React, { useState } from "react";
import { Link } from "react-router-dom";
import { icons } from "assets/icons/icons-svg";
import "../common/styles/listGroup.scss";

const menuList = [
  {
    name: "Sản phẩm",
    icon: icons.iconProduct,
    pathLink: "/admin/all-products",
  },
  {
    name: "Đơn hàng",
    icon: icons.iconOder,
    pathLink: "/admin/table-order",
  },
];

const ListGroup = () => {
  const linkBrowserName = window.location.pathname;


  return (
    <section className="menu">
      <a href="/#" className="menu__logo">
        Your Logo
        <img src="" alt="" />
      </a>
      <div className="menu__avatar">
        <img src="https://taimienphi.vn/tmp/cf/aut/anh-gai-xinh-1.jpg" alt="" />
        <h2>Admin</h2>
      </div>
      <ul className="menu__list">
        {menuList.map((item, index) => (
          <Link
            key={index}
            to={item.pathLink}
            className={"menu__item " + (linkBrowserName.includes(item.pathLink)? "active": "")}
          >
            <i className="menu__item-icon">{item.icon}</i>
            <p className="menu__item-name">{item.name}</p>
          </Link>
        ))}
      </ul>
    </section>
  );
};

export default ListGroup;
