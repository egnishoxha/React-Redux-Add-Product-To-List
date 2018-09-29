
import { PRODUCTS } from '../constants/constants';

export function addProduct(product){
    return {
        type: PRODUCTS.ADD_PRODUCT,
        payload: product
    };
}