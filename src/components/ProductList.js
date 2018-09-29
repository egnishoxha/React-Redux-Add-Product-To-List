import React from 'react';
import { connect } from 'react-redux';

import ProductItem from './ProductItem';

const ProductList = (props) => {
    return(
        <div className="container">
            {
                (props.productList.length > 0) && 
                (<div className="list-container">
                    <h2>Product List</h2>
                    <table className="table">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Product</th>
                                <th scope="col">Price</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {props.productList.map((product, index) => 
                                <ProductItem key={index} 
                                             product={product}
                                             rowNum={index+1}></ProductItem>)
                            }
                        </tbody>
                    </table>
                </div>)
            }
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        productList: state.products.products
    }
}

export default connect(mapStateToProps, {})(ProductList);