import axios from 'axios'

import { GET_PRODUCT_FAILED, GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS } from "../constants/productConstants"
const API_URL = 'https://jsonplaceholder.typicode.com/todos'

export const fetchProducts = () => (async dispatch => {
    dispatch({type: GET_PRODUCT_REQUEST})
    try{
        const res = await axios.get(API_URL)
        console.log('I have called fetchProduct')
        console.log(res)
        dispatch({type: GET_PRODUCT_SUCCESS, payload: res.data})

    }catch(error){
        console.log(error.message)
        dispatch({type: GET_PRODUCT_FAILED, payload: error.message})
    }
})
