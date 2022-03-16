import React from "react";
import "./slideImages.scss";

export const SlideImages = ( {products, manualSize} ) => {
  return (
    <div className="slide__images">
      <div className="slide__images-box">
        <input type="radio" name="radio-btn" data-index={1} id="radio1" />
        <input type="radio" name="radio-btn" data-index={2} id="radio2" />
        <input type="radio" name="radio-btn" data-index={3} id="radio3" />

        {products.map((item, index) => {
          return (
            <div
              key={index}
              className={"slide__image"}
              id={`slide__image${index + 1}`}
            >
              <img src={item.img} alt="" />
            </div>
          );
        })}

        <div className="slide__manual">
          {Array.from({ length: manualSize }).map((item, index) => (
            <label
              key={index}
              htmlFor={`radio${index + 1}`}
              className="slide__manual-btn"
              id={`manual${index + 1}`}
            ></label>
          ))}
        </div>
      </div>
    </div>
  );
};
