import React from "react";
import Loading from "../../Assets/loader.gif";

const Spinner = () => {
  return (
    <div className="w-full h-full mx-auto">
      <img src={Loading} alt="Loading....." />
    </div>
  );
};

export default Spinner;
