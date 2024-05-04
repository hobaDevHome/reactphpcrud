import React from "react";
import heroImage from "../images/hero3.jpg";

import logo from "../images/logo.jpg";

const Hero = () => {
  return (
    <div
      style={{ padding: 70, backgroundColor: "#FAF8F4" }}
      className="flex relative"
    >
      <div className="w-2/5">
        <img
          src={logo}
          alt=""
          style={{ width: 250, borderRadius: "50%", margin: "0 auto" }}
        />
      </div>
      <div className="w-3/5">
        <img
          src={heroImage}
          alt=""
          style={{ width: "100%", borderRadius: 7 }}
        />
      </div>
      <div
        className="absolute  bottom-1/4 left-0 pl-10 text-6xl"
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
