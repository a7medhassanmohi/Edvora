import { Productconst } from "../constant"
import axios from "axios";


export const getNewproduct = (setallproductfilters, setproductNAmeafterfilter) => (dispatch) => {
    dispatch({ type: Productconst.GETPRODUCT_REQUEST })
    axios.get("https://assessment-edvora.herokuapp.com")
        .then((res) => {
            const allproductname = [
                ...new Set([
                    ...res.data.map((pr) => {
                        return pr.product_name;
                    }),
                ]),
            ]
            const allproductState = [
                ...new Set([
                    ...res.data.map((it) => {
                        return it.address.state;
                    }),
                ]),
            ]
            const allproductCity = [
                ...new Set([
                    ...res.data.map((it) => {
                        return it.address.city;
                    }),
                ]),
            ]
            setallproductfilters(res.data);
            setproductNAmeafterfilter(allproductname)

            dispatch({ type: Productconst.GETPRODUCT_SUCESS, payload: { allproduct: res.data, allproductname, allproductState, allproductCity } })


        }).catch((e) => {
            console.log(e);
        })
}

export const getdropValue = (name, value) => (dispatch) => {

    if (name == "product") {
        dispatch({ type: Productconst.GETDROPPRODUCT_VALUE, payload: value })
    }
    if (name == "state") {
        dispatch({ type: Productconst.GETDROPSTATE_VALUE, payload: value })
    }

    if (name == "city") {
        dispatch({ type: Productconst.GETDROPCITY_VALUE, payload: value })
    }


}

