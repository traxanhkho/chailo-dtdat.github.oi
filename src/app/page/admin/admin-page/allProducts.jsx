import React, { Component } from "react";
import { Link , Route , Switch } from 'react-router-dom' ; 
import Modal from 'app/page/common/modal';
import Table from 'app/page/common/table' ; 
import "../styles/allProducts.scss";

const AllProducts = ({ products  , columns , products : data }) => {

  return (
    <section className="product-section">
      <Link to="/admin/all-products/create-product"
        className="product-btn-create">
        <i class="fal fa-plus"></i>
          Thêm</Link>
      <Table heading="Sản Phẩm" columns={columns} data={data}/>
      <Switch>
        <Route path="/admin/all-products/create-product" render={(props) => <Modal
        products={products} {...props}/>} />
        {/* routing to edit a product */}
        <Route path="/admin/all-products/:_id" render={(props) => <Modal
        products={products} {...props}/>} />
      </Switch>
      
    </section>
  );
};

export default AllProducts;
