import React, { Component } from "react";
import ContainerAdmin from "./containerAdmin";
import {
  getOrders,
  getCustomers,
  getProducts,
} from "../fakeServer/productChaillo";

class Admin extends Component {
  state = {
    products: getProducts(),
    orders: getOrders(),
    customers: getCustomers(),
  };

  handleDelete = (item, label) => {
    const items = [...this.state[label]];
    const newItems = items.filter((i) => i._id !== item._id);
    switch (label) {
      case "products":
        this.setState({ products: newItems });
        break ; 
      case "orders":
        this.setState({ orders: newItems });
        break ; 
    }
  };


  render() {
    const { products, orders, customers } = this.state;

    return (
        <ContainerAdmin
          products={products}
          orders={orders}
          customers={customers}
          onDelete={this.handleDelete}
        />
    );
  }
}

export default Admin;
