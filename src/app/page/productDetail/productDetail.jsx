import React, { Component } from "react";
import ProductContent from "./productContent/productContent";
import ProductForm from "./productForm/productForm";
import { getForms } from "../fakeServer/productChaillo";
import { getProducts } from "../fakeServer/productChaillo";
import { Toasts } from "../common/toasts/toasts";
import { CreateToast } from "../utils/createToast";
import "./productDetail.scss";

class ProductDetail extends Component {
  handleSubmit = (value) => {
    console.log("you have a new order!", value);
    let state = '';
    let timeOut = 4000;
    if(value) {
      state = 'success';
      CreateToast(state, timeOut, 'Thành công! Đã gửi thông tin đặt hàng.')
    } else {
      state = 'error'
      CreateToast(state, timeOut, 'Lỗi! Không tin đặt hàng không được gửi đi.')
    }
  };

  constructor() {
    super();
    this.state = {
      forms: getForms(),
      products: getProducts(),
    };
  }

  render() {
    const { match, history } = this.props;
    const { forms, products } = this.state;

    return (
      <React.Fragment>
        <div className="background-page product-detail">
          <ProductContent id={match.params._id} products={products} />
          <ProductForm
            id={match.params._id}
            forms={forms}
            onSubmit={this.handleSubmit}
            history={history}
          />
        </div>
        <Toasts/>
      </React.Fragment>
    );
  }
}

export default ProductDetail;
