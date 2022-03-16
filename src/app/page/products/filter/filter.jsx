import React, { Component } from 'react';
import _ from "lodash";
import "./filter.scss"
// waiting for sort featered in process.... 

class Filter extends Component {
    raiseSort = (button) => {
        let sortProduct = { ...this.props.sortProduct };

        sortProduct.id = button.id ; 
        sortProduct.order = button.order ; 
        sortProduct.path = button.path ; 

        this.props.onSort(sortProduct) ;  
    }

    render() {
        const { buttons , sortProduct } = this.props;

        return (
            <div className='filter'>
                <h6>sắp xếp theo :</h6>
                <div className="wrapper">
                    {buttons.map(button => (
                        <button
                            className={sortProduct.id === button.id ? 'active' : ''}
                            key={button.id}
                            onClick={() => this.raiseSort(button)}
                        >{ button.title }</button>
                    ))}
                </div>
            </div>
        );
    }
}

export default Filter;
