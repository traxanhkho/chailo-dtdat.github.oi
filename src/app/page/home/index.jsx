import React, { Component } from "react";
import ListProduct from "../common/listProduct/listProduct";
import { getProducts } from "../fakeServer/productChaillo";
import { Slide } from "./slide/silde";
import "./Home.scss";

class Home extends Component {
  state = {
    products: getProducts(),
    pageSize: 8,
  };

  render() {
    const { products: allProduct, pageSize } = this.state;

    const productsLength = allProduct.length;
    const hotProducts = allProduct.filter((product, index) => 
        index >= productsLength - pageSize
    )

    return (
      <div className="background-page home-below">
        <Slide 
            products={allProduct} 
            slideSize={3}
        />
        <h2 id="hot-product">các sản phẩm nổi bật</h2>
        <ListProduct products={hotProducts} />
      </div>
    );
  }
}

export default Home;
