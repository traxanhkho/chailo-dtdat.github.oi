import React, { Component } from "react";
import Filter from "./filter/filter";
import ProductContainer from "./productContainer/productContainer";
import { getProducts } from "../fakeServer/productChaillo";
import { paginate } from "../utils/paginate";
import _ from "lodash";
import "./product.scss";
class Product extends Component {
  state = {
    products: getProducts(),
    pageSize: 8,
    currentPage: 1,
    sortProduct: { id: "asc322ssa21", order: "asc", path: "title" },
  };

  buttons = [
    {
      id: "asc322ssa21",
      title: "A - Z",
      path: "title",
      order: "asc",
    },
    {
      id: "asc32ss1af1",
      title: "Z - A",
      path: "title",
      order: "desc",
    },
  ];

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleSortProduct = (sortProduct) => {
    this.setState({ sortProduct });
  };

  render() {
    const { products, currentPage, pageSize, sortProduct } = this.state;
    const { length: itemsCount } = products;

    const sorted = _.orderBy(products, [sortProduct.path], [sortProduct.order]);

    const allProduct = paginate(sorted, currentPage, pageSize);

    return (
      <div className="background-page product">
        <Filter
          sortProduct={sortProduct}
          buttons={this.buttons}
          onSort={this.handleSortProduct}
        />
        <ProductContainer
          products={allProduct}
          itemsCount={itemsCount}
          currentPage={currentPage}
          pageSize={pageSize}
          onPageChange={this.handlePageChange}
        />
      </div>
    );
  }
}

export default Product;