import React from "react";
import "./filter.scss";
import DropDownItem from "./DropDownItem";
import { useSelector } from "react-redux";

function FilterPage() {
  const products = useSelector((state) => state.products);

  return (
    <div className="filter_container">
      <div className="title">
        <h4>Filters</h4>
        <div className="line"></div>
      </div>
      <DropDownItem
        items={["product", ...products.allproductname]}
        name="product"
      />
      <DropDownItem
        items={["state", ...products.allproductState]}
        name="state"
      />
      <DropDownItem items={["city", ...products.allproductCity]} name="city" />
    </div>
  );
}

export default FilterPage;
