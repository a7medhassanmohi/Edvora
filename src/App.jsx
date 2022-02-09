import { useEffect, useState } from "react";
import "./App.scss";
import FilterPage from "./pages/filter/FilterPage";
import ProductContainer from "./pages/productcontainer/ProductContainer";
import { useDispatch, useSelector } from "react-redux";
import { getNewproduct } from "./redux/actions/product.action";
import LoadingSpinner from "./pages/loading/Loading";

function App() {
  const loading = useSelector((state) => state.products.loading);
  const [allproductfilters, setallproductfilters] = useState([]);
  const [productNAmeafterfilter, setproductNAmeafterfilter] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNewproduct(setallproductfilters, setproductNAmeafterfilter));
  }, []);
  if (!loading) {
    return (
      <div className="App">
        <div className="layout">
          <div className="filter_container">
            <FilterPage />
          </div>
          <div className="product_container">
            <ProductContainer
              allproductfilters={allproductfilters}
              setallproductfilters={setallproductfilters}
              productNAmeafterfilter={productNAmeafterfilter}
              setproductNAmeafterfilter={setproductNAmeafterfilter}
            />
          </div>
        </div>
      </div>
    );
  } else {
    return <LoadingSpinner />;
  }
}

export default App;
