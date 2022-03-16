import { first } from "lodash";
import React from "react";
import { useEffect } from "react";
import { SlideContent } from "./slideContent/slideContent";
import { SlideImages } from "./slideImages/slideImages";
import "./Slide.scss";

export const Slide = (props) => {
  const { products, slideSize } = props;

  const productsLength = products.length;

  // get New Products equal slide size
  const newProducts = products.filter(
    (item, index) => index >= productsLength - slideSize
  );
  useEffect(() => {
    // set first slide
    document.querySelector("#radio1").checked = true;

    const radiosBtn = document.querySelectorAll("[name= radio-btn]");
    const timeSlide = setInterval(() => {
      // get current slide
      const getCurrentSlide = Array.from(radiosBtn).find(
        (item) => item.checked === true
      );
      let dataIndex = Number(getCurrentSlide.getAttribute("data-index"));
      dataIndex++;
      if (dataIndex > 3) {
        dataIndex = 1;
      }
      // next slide
      document.querySelector("#radio" + dataIndex).checked = true;
    }, 5000);

    return () => clearInterval(timeSlide);
  }, []);

  return (
    <div className="slide">
      <SlideImages
        products={newProducts}
        manualSize={slideSize}
      />
      <SlideContent />
    </div>
  );
};
