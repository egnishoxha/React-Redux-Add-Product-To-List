import React from 'react';
import { connect } from 'react-redux';

const GrandTotal = (props) => {
    return(
        <button type="button" className="btn btn-primary">
            <span>Grand Total </span>
            <span className="badge badge-light">{props.grandTotal}</span>
        </button>
    );
}

const mapStateToProps = (state) => {
    return {
        grandTotal: state.products.grandTotal
    }
}

export default connect(mapStateToProps, {})(GrandTotal);








// function calcGrandTotal(products){
//     let grandTotal = 0;
    
//     products.forEach(el => {
//         grandTotal += (el.price*el.qty);
//     });

//     return grandTotal;
// }

// const GrandTotal = (props) => {
//     return(
//         <div>Grand Total: {calcGrandTotal(props.productList)}</div>
//     );
// }
