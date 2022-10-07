import { actionTypes } from "../actiontype/action-types"
export const setProducts = (products) => {
    return {
        type: actionTypes.SET_PRODUCTS,
        payload: products
    }

}

export const SelectedProduct = (product) => {
    return {
        type: actionTypes.SELECTED_PRODUCT,
        payload: product
    }
}
const removeSelectedProduct = (product) => {
    return {
        type: actionTypes.REMOVE_SELECTED_PRODUCT,
        payload: product
    }
}