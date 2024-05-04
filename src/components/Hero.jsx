import React from "react";
import heroImage from "../images/hero3.jpg";

import logo from "../images/logo.jpg";

const Hero = () => {
  return (
    <div
      style={{ padding: 70, backgroundColor: "#FAF8F4" }}
      className="flex flex-col md:flex-row relative"
    >
      <div className="w-90 md:w-2/5">
        <img
          src={logo}
          alt=""
          style={{ width: 250, borderRadius: "50%", margin: "0 auto" }}
        />
        <div
          className="pl-1 text-4xl md:text-56xl"
          style={{ fontFamily: "Pacifico" }}
        >
          <div>
            <span style={{ color: "#B0612C" }}>Hand</span>
            made
          </div>
          <div>
            <span className="pl-4 md:pl-6" style={{ color: "#B0612C" }}>
              Orga
            </span>
            nic Soap
          </div>
        </div>
      </div>
      <div className="w-90 md:w-3/5">
        <img
          src={heroImage}
          alt=""
          style={{ width: "100%", borderRadius: 7 }}
          className="hidden md:block"
        />
      </div>
    </div>
  );
};

export default Hero;
