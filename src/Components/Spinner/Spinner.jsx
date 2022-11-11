import React from "react";
import Loading from "../../Assets/loader.gif";

const Spinner = () => {
  return (
    <div
      style={{
        width: "100%",
        marginTop: "3rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img src={Loading} alt="Loading....." style={{ width: "30%" }} />
    </div>
  );
};

export default Spinner;
