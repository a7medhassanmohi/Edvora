import React from "react";
import "./loading.scss";
function LoadingSpinner() {
  return (
    <div className="cont">
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default LoadingSpinner;
