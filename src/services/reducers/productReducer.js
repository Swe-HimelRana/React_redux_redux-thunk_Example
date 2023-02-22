import { GET_PRODUCT_FAILED, GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS } from "../constants/productConstants";

const initialState = {
    products: [],
    isLoading: false,
    error: null
}

const productReducer = (state=initialState, action) => {
    switch (action.type) {
        case GET_PRODUCT_REQUEST:
            return{
                products: [],
                isLoading: true,
                error: null
            }
        case GET_PRODUCT_FAILED:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        case GET_PRODUCT_SUCCESS:
            return {
                isLoading: false,
                error: [],
                products: action.payload
            }
        default:
            return state;
    }
}

export default productReducer;