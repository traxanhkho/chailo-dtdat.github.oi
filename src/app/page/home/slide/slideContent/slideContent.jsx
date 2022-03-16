import React from "react";
import { Link } from 'react-router-dom' ; 
import "./slideContent.scss";
import { icons } from "assets/icons/icons-svg";

export const SlideContent = ({ product }) => {
  return (
    <div className="slide-content">
      Công ty chuyên cung cấp chai, hũ, lọ mỹ phẩm, lọ serum, hộp phấn, tuýp,
      mẫu vỏ son cao cấp. Nhận in ấn trực tiếp chai lọ không bong tróc, đẹp,
      chất lượng nươc ngoài .
      <Link to="/lien-he" className="btn slide-content__btn">
          Xem chi tiết
          <i className="slide-content__btn-icon">{icons.iconArrowNext}</i>
      </Link>
    </div>
)};
