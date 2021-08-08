import * as actionTypes from '../constants/actionState';

const initialState = {
    data: [],
    error: '',
    isLoading: false
};

const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GETPRODUCTS_LOADING:
            return {
                ...state,
                data: [],
                error: '',
                isLoading: true
            };
        case actionTypes.GETPRODUCTS_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };
        case actionTypes.GETPRODUCTS_SUCCESS:
            return {
                ...state,
                error: '',
                isLoading: false,
                data: action.payload
            };
        case actionTypes.SAVEPRODUCTS_LOADING:
            return {
                ...state,
                data: [],
                error: '',
                isLoading: true
            };
        case actionTypes.SAVEPRODUCTS_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };
        case actionTypes.SAVEPRODUCTS_SUCCESS:
            return {
                ...state,
                error: '',
                isLoading: false,
                data: action.payload
            };
        default:
            return state;
    }
};

export default productsReducer;
