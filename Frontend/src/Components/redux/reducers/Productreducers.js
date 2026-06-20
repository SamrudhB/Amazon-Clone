// const products = [];

// export const getProductsReducers = (state = {products},action)=>{
//     switch(action.type){
//         case "SUCCESS_GET_PRODUCTS":
//             return {products:action.payload}
//         case "FAIL_GET_PRODUCTS":
//             return {error:action.payload}
//         default : return state
//     }
// }

const initialState = {
    products: [],
    totalPages: 1,
    currentPage: 1,
    totalProducts: 0,
    error: null,
};

export const getProductsReducers = (
    state = initialState,
    action
) => {
    switch (action.type) {
        case "SUCCESS_GET_PRODUCTS":
            return {
                ...state,
                products: action.payload.products,
                totalPages: action.payload.totalPages,
                currentPage: action.payload.currentPage,
                totalProducts: action.payload.totalProducts,
                error: null,
            };

        case "FAIL_GET_PRODUCTS":
            return {
                ...state,
                error: action.payload,
            };

        default:
            return state;
    }
};