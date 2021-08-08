import axios from 'axios';
// import { config } from '../../config';
import * as actionStates from '../constants/actionState';

// const { BASEURL } = config;
const {
    GETPRODUCTS_LOADING,
    GETPRODUCTS_FAILURE,
    GETPRODUCTS_SUCCESS,
    SAVEPRODUCTS_LOADING,
    SAVEPRODUCTS_FAILURE,
    SAVEPRODUCTS_SUCCESS
} = actionStates;

const getProductsLoading = () => ({
    type: GETPRODUCTS_LOADING
});

const getProductsSuccess = data => ({
    type: GETPRODUCTS_SUCCESS,
    payload: data
});

const getProductsFailure = error => ({
    type: GETPRODUCTS_FAILURE,
    payload: error.message
});

const saveProductsLoading = () => ({
    type: SAVEPRODUCTS_LOADING
});

const saveProductsSuccess = data => ({
    type: SAVEPRODUCTS_SUCCESS,
    payload: data
});

const saveProductsFailure = error => ({
    type: SAVEPRODUCTS_FAILURE,
    payload: error.message
});

export const getProductsAsync = () => async dispatch => {
    try {
        dispatch(getProductsLoading());

        const response = await axios.get(`http://localhost:8500`);

        dispatch(getProductsSuccess(response.data.data.products));
    } catch (error) {
        dispatch(getProductsFailure(error));
    }
};

export const saveProductsAsync = payload => async dispatch => {
    try {
        dispatch(saveProductsLoading());
        const response = await axios.post('http://localhost:8500', payload);

        if (!Object.keys(response.data.data).length) {
            return dispatch(saveProductsFailure(response.data.data.message));
        }

        dispatch(saveProductsSuccess(response.data.data.products));
    } catch (err) {
        dispatch(getProductsFailure(err.response));
    }
};