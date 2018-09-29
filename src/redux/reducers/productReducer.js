import { PRODUCTS } from '../constants/constants';

const initialState = {
    products: [],
    grandTotal: 0
};

const productReducer = (state = initialState, action) => {
    switch(action.type){
        case PRODUCTS.ADD_PRODUCT:
            state = {
                ...state,
                products: [...state.products, action.payload],
                grandTotal: state.grandTotal + (action.payload.price*action.payload.qty)
            }
            break;
        default:
            break;
    }
    return state;
}

export default productReducer;
