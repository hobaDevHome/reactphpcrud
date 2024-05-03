import React from "react";
import heroImage from "../images/hero3.jpg";
import stampImage from "../images/stamp.png";

const Hero = () => {
  return (
    <div
      style={{ padding: 70, backgroundColor: "#FAF8F4" }}
      className="flex relative"
    >
      <div className="w-2/5">
        <img src={stampImage} alt="" style={{ width: 100, margin: "0 auto" }} />
      </div>
      <div className="w-3/5">
        <img
          src={heroImage}
          alt=""
          style={{ width: "100%", borderRadius: 7 }}
        />
      </div>
      <div
        className="absolute  bottom-1/4 left-0 pl-10 text-8xl"
        style={{ fontFamily: "Pacifico" }}
      >
        <div>
          <span style={{ color: "#B0612C" }}>Hand</span>
          made
        </div>
        <div>
          <span style={{ color: "#B0612C", paddingLeft: 40 }}>Orga</span>nic
          Soap
        </div>
      </div>
    </div>
  );
};

export default Hero;
