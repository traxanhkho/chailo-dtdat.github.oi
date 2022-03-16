import React from "react";
import "./Contact.scss";
import imageContact from "../../../assets/images/contact.jpg"

export const phoneNumber = "0865328664";

export const Contact = () => {
  return (
    <div className="background-page contact">
      <h1 className="contact__title">Giới thiệu công ty</h1>
      <h3 className="contact__desc">
        Công ty chuyên cung cấp chai, hũ, lọ mỹ phẩm, lọ serum, hộp phấn, tuýp,
        mẫu vỏ son cao cấp. Nhận in ấn trực tiếp chai lọ không bong tróc, đẹp,
        chất lượng nước ngoài.
      </h3>
      <div className="contact__content">
        <img
          className="contact__content-image"
          src={imageContact}
          alt=""
        />
        <ul className="contact__content-list">
          <li className="contact__content-line">
            Hàng nhập khẩu trực tiếp từ các xưởng nước ngoài và nội địa, chất
            liệu siêu tốt nên quý khách hàng cứ yên tâm về giá.
          </li>
          <li className="contact__content-line">
            Đối với các mặt hàng có sẵn tại kho mẫu mã đa dạng , công ty sẽ giao
            hàng toàn quốc .
          </li>
          <li className="contact__content-line">
            Các đơn đặt hàng, đối với hàng có sẵn số lượng từ 1000 trở lên, 20
            ngày sẽ về đến Việt Nam.
          </li>
          <li className="contact__content-line">
            Các mặt hàng đa dạng sản xuất tại Việt Nam nhanh sẽ từ 10 ngày - 15
            ngày.
          </li>
          <li className="contact__content-line">
            Hàng không có sẵn số lượng từ 3000 trở lên thời gian vận chuyển
            khoảng 55 ngày sẽ về Việt Nam
          </li>
        </ul>
      </div>
      <div className="contact__card">
        <div className="contact__card-item">
          <i className="contact__card-item-logo"></i>
          <p className="contact__card-item-text">
            Ngoài ra, công ty nhận sản xuất sản phẩm bao bì về giấy số lượng lớn
            giá rẻ.
          </p>
        </div>
        <div className="contact__card-item">
          <button className="contact__card-item-btn">Liên Hệ Zalo</button>
          <p className="contact__card-item-phone">SĐT: {phoneNumber}</p>
        </div>
      </div>
      <p className="contact__info">
        Để biết thêm thông tin sản phẩm, quý khách hàng vui lòng liên hệ hotline
        của công ty để được phục về mẫu mã cũng như giá cả tốt nhất. <br />
        Hotline : <a href={"tel:" + phoneNumber}>0865.328.664</a> <br />
        Địa chỉ :{" "}
        <a target="_plank" href="https://goo.gl/maps/zWeALuNm3qTM427H7">
          B1/9 đường liên ấp 2-6 xã Vĩnh Lộc A huyện Bình Chánh thành phố Hồ Chí
          Minh
        </a>
      </p>
    </div>
  );
};
