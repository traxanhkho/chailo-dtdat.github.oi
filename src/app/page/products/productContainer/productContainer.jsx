import React from 'react' ; 
import ListProduct from 'app/page/common/listProduct/listProduct';
import Pagination from '../../common/pagination/pagination';

const ProductContainer = (props) => {
    const {
        products: allProduct,
        currentPage,
        pageSize , 
        itemsCount,
        onPageChange } = props;
        
    return ( 
        <div className="product-container">
            <ListProduct products={allProduct} />
            <Pagination
                currentPage={currentPage}
                itemsCount={itemsCount}
                onPageChange={onPageChange}
                pageSize={pageSize}
            />
        </div>
     );
}
 
export default ProductContainer;