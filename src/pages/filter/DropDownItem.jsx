import React, { useRef, useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { getdropValue } from "../../redux/actions/product.action";

function DropDownItem({ items, name }) {
  const [isOpen, setisOpen] = useState(false);
  const outerRef = useRef();
  const innerRef = useRef();
  const btnn = useRef();
  const dispatch = useDispatch();
  const dropVAlue = useSelector((state) => state.products);
  const handleOpen = () => {
    let heightcontainer = innerRef.current.getBoundingClientRect().height;
    if (isOpen) {
      outerRef.current.style.height = `0`;
      setisOpen(false);
    } else {
      outerRef.current.style.height = `${heightcontainer}px`;
      setisOpen(true);
    }
  };

  const getvalue = (e) => {
    let inputvalue = e.target.innerText;
    dispatch(getdropValue(name, inputvalue));

    handleOpen();
  };
  const value =
    name == "product"
      ? dropVAlue.dropMenuvalueproduct
      : name == "state"
      ? dropVAlue.dropMenuvaluestate
      : name == "city"
      ? dropVAlue.dropMenuvaluecity
      : "";

  return (
    <div className="dropdown">
      <div className="btn_" onClick={handleOpen}>
        <button ref={btnn}>{value}</button>
        <IoMdArrowDropdown />
      </div>

      <div className="drop_container" ref={outerRef}>
        <div className="wrap" ref={innerRef}>
          <ul>
            {items.length > 0 &&
              items.map((it, i) => {
                return (
                  <li onClick={getvalue} key={i}>
                    {it}
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default DropDownItem;
