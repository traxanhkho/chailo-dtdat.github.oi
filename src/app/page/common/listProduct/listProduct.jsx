import React from 'react';
import { Link } from 'react-router-dom';
import "./listProduct.scss"

const ListProduct = ({ products }) => {

    return (
            <div className="row">
                {
                    products.map(item => (
                        <div key={item._id} className="col-xl-3 col-lg-4 col-md-6 col-xs-12">
                            <div className='wrapper-item'>
                                <img src={item.img} alt="" />
                                <div className="content">
                                    <h4>{item.title}</h4>       
                                    <Link to={`/product/${item._id}`} className="btn">chi tiết sản phẩm</Link>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
    )
}

export default ListProduct;
