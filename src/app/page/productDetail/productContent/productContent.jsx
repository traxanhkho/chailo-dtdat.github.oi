import React, { Component } from 'react';
import _ from 'lodash' ; 
import "./productContent.scss"

class ProductContent extends Component {

    getProductDetails = (products , id) =>{
        for( let item of products){
            if(item._id === id)
                return item 
        }; 

        return console.log('error at productContent component') ; 
    }

    render() { 
      
        const { products , id } = this.props ; 

        const product = this.getProductDetails(products , id) ; 

        return (
            <div className='row product-content' image="true">
                <div className='image col-lg-6  col-md-12 col-xs-12'>
                    <div className='wrapper'>
                        <img src={product.img} alt="" />
                    </div>
                </div>
                <div className="content col-lg-6 col-md-12 col-xs-12">
                    <div className='wrapper'>
                        <h2>{product.title}</h2>
                        <p>{product.content}</p>
                        <a href="#form-section" className="btn">Nhập thông tin đặt hàng </a>
                    </div>
    
                </div>
            </div>
        );
    }
}
 
export default ProductContent;