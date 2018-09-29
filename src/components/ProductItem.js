import React from 'react';

const ProductItem = (props) => {
    return(
        <tr>
            <th scope="row">{props.rowNum}</th>
            <td>{props.product.name}</td>
            <td>{props.product.price}</td>
            <td>{props.product.qty}</td>
            <td>{props.product.price*props.product.qty}</td>
        </tr>
    );
}

export default ProductItem;