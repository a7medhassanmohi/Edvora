
import { Productconst } from "../../constant"

const initstate = {
    loading: false,
    allProduct: [],
    allproductname: [],
    allproductCity: [],
    allproductState: [],

    dropMenuvalueproduct: "product",
    dropMenuvaluestate: "state",
    dropMenuvaluecity: "city",
}
export const products = (state = initstate, action) => {
    switch (action.type) {
        case Productconst.GETPRODUCT_REQUEST:
            return { ...initstate, loading: true }
        case Productconst.GETPRODUCT_SUCESS:
            return {
                ...initstate, loading: false, allProduct: action.payload.allproduct,
                allproductname: action.payload.allproductname,
                allproductCity: action.payload.allproductCity,
                allproductState: action.payload.allproductState,
            }
        case Productconst.GETDROPPRODUCT_VALUE:
            return {
                ...state, dropMenuvalueproduct: action.payload
            }
        case Productconst.GETDROPSTATE_VALUE:
            return {
                ...state, dropMenuvaluestate: action.payload
            }
        case Productconst.GETDROPCITY_VALUE:
            return {
                ...state, dropMenuvaluecity: action.payload
            }
        default:
            return state
    }
}