import React, { useEffect } from "react";

import "swiper/css";

import "./productconrainer.scss";
import ProducrItem from "./ProducrItem";
import { useSelector } from "react-redux";

function ProductContainer({
  allproductfilters,
  setallproductfilters,
  productNAmeafterfilter,
  setproductNAmeafterfilter,
}) {
  const state = useSelector((state) => state.products);
  const getProduct_byName = (productname) => {
    let products = allproductfilters.filter(
      (pro) => pro.product_name == productname
    );
    return products;
  };
  const filter = () => {
    let updatedproduct = state.allProduct;
    let updatedproductname = state.allproductname;

    if (state.dropMenuvalueproduct && state.dropMenuvalueproduct != "product") {
      updatedproduct = updatedproduct.filter(
        (it) => it.product_name == state.dropMenuvalueproduct
      );
      updatedproductname = [state.dropMenuvalueproduct];
    }
    //  filter state
    if (state.dropMenuvaluestate && state.dropMenuvaluestate != "state") {
      updatedproduct = updatedproduct.filter(
        (it) => it.address.state == state.dropMenuvaluestate
      );
    }
    // city filter

    if (state.dropMenuvaluecity && state.dropMenuvaluecity != "city") {
      updatedproduct = updatedproduct.filter(
        (it) => it.address.city == state.dropMenuvaluecity
      );
    }

    setproductNAmeafterfilter(updatedproductname);
    setallproductfilters(updatedproduct);
  };

  useEffect(() => {
    filter();
  }, [
    state.dropMenuvalueproduct,
    state.dropMenuvaluestate,
    state.dropMenuvaluecity,
  ]);

  return (
    <>
      <div className="main-title">
        <h1>Edvora</h1>
      </div>
      <h4 className="subtitle">Products</h4>
      <div className="items_container">
        {productNAmeafterfilter.length > 0 &&
          productNAmeafterfilter.map((it, i) => {
            return (
              <ProducrItem
                productName={it}
                key={i}
                products={getProduct_byName(it)}
              />
            );
          })}
      </div>
    </>
  );
}

export default ProductContainer;
