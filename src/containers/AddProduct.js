import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addProduct } from '../redux/actions/actions';

class AddProduct extends Component{
    
    constructor(){
        super();
        this.state = {
            name: "",
            price: 0,
            qty: 0
        };
    }

    onHandleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        let product = {};
        product["name"] = this.state.name;
        product["price"] = this.state.price;
        product["qty"] = this.state.qty;
        this.props.addProduct(product);

        this.setState({
            name: "",
            price: 0,
            qty: 0
        });
    }

    render(){
        return(
            <div className="container">
                <form onSubmit={(event) => this.handleSubmit(event)}>
                    <div className="form-row align-items-center">
                        <div className="col-md-4">
                            <label className="sr-only">Product Name</label>
                            <input type="text" 
                                name="name"
                                value={this.state.name}
                                onChange={(event) => this.onHandleChange(event)} 
                                placeholder="Product Name"
                                required
                                className="form-control mb-2" />
                        </div>
                        <div className="col-md-3">
                            <label className="sr-only">Price</label>
                            <input type="number"
                                min="1"
                                name="price" 
                                value={this.state.price}
                                onChange={(event) => this.onHandleChange(event)} 
                                placeholder="Price" 
                                className="form-control mb-2"/>
                        </div>
                        <div className="col-md-3">
                            <label className="sr-only">Qty</label>
                            <input type="number"
                                min="1"
                                name="qty"
                                value={this.state.qty}
                                onChange={(event) => this.onHandleChange(event)} 
                                placeholder="Quantity"
                                className="form-control mb-2"/>
                        </div>
                        <div className="col-md-2">
                            <button type="submit" 
                                    className="btn btn-success my-1">Add</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {};
}

const mapDispatchToProps = (dispatch) => {
    return {
        addProduct: (product) => {
            dispatch(addProduct(product));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddProduct);