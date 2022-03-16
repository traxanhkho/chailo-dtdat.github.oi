import React, { Component } from 'react';
import Form from './form' ; 
import "./styles/modal.css";

class Modal extends Component {

  render() {
    const { history , products , match } = this.props;
  
    return (
      <Form 
        match={match}
        history={history}
        products={products}
      />
    );
  }
}

export default Modal;

