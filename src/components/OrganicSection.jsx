import React from "react";
import organic from "../images/organic2.jpg";
import organic2 from "../images/organic3.jpg";
import stampImage from "../images/stamp.png";

const OrganicSection = () => {
  return (
    <div
      style={{ marginTop: 50, marginBottom: 20 }}
      className="flex relative flex-col-reverse items-center md:flex-row md:items-start"
    >
      <div className="w-90 md:w-3/5 flex justify-center items-center md:justify-start">
        <img src={organic} alt="" style={{ width: "80%", borderRadius: 7 }} />
      </div>
      <div className="w-90 md:w-2/5 text-5xl p-4">
        <div style={{ fontFamily: "Freeman" }}>
          <p>Our products are</p>
          <p>
            natural and <span style={{ color: "#B0612C" }}> organic</span>
          </p>
        </div>
        <div
          style={{
            fontFamily: "",
            fontSize: 25,
            paddingTop: 20,
            marginBottom: 10,
          }}
        >
          A family business committed to handcrafting the purest products for
          your home and body.
        </div>
        <div className="hidden md:flex justify-end relative ">
          <img
            src={organic2}
            alt=""
            style={{
              width: 200,
              padding: 20,
              marginTop: 20,
              marginRight: 20,
              rotate: "330deg",
            }}
          />
          <div className="absolute pl-10 right-56 text-8xl top-14">
            <img
              src={stampImage}
              alt=""
              style={{ width: 100, margin: "0 auto" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrganicSection;
