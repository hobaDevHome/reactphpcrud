import React from "react";
import soft from "../images/soft.jpg";

const Soft = () => {
  return (
    <div style={{ marginTop: 50, marginBottom: 20 }} className="flex relative">
      <div className="w-3/5">
        <img src={soft} alt="" style={{ width: "80%", borderRadius: 7 }} />
      </div>
      <div className="w-2/5 text-5xl">
        <div style={{ fontFamily: "Freeman" }}>
          <p>Soft on their health,</p>
          <p>
            <span style={{ color: "#B0612C" }}>strong</span> on stains
          </p>
        </div>
        <div style={{ fontFamily: "", fontSize: 25, paddingTop: 20 }}>
          We create our recipes with only ingredients that are kept in their
          most natural, authentic way, so nothing harmful gets into your blood
          stream. Our skin is a complex, sensitive, vital organ with many
          functions, necessary for well-being and for the maintenance of life.
        </div>
      </div>
    </div>
  );
};

export default Soft;
