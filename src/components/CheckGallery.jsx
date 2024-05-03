// @ts-nocheck
import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SoapCard from "./SoapCard";

const CheckGallery = () => {
  const [soapList, setSoapList] = useState([]);

  useEffect(() => {
    getSoapList();
  }, []);

  function getSoapList() {
    axios.get("http://localhost/soapAPI/products/").then(function (response) {
      //   console.log(response.data);
      setSoapList(response.data);
    });
  }
  console.log("items----", soapList);
  return (
    <Link to={`/gallery`} style={{ marginRight: "10px" }}>
      <div className=" m-10">
        <div className="text-5xl mt-10">
          <div style={{ fontFamily: "Freeman", textAlign: "center" }}>
            <div>
              Check our
              <span style={{ color: "#B0612C" }}> gallery</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {soapList &&
            soapList.slice(0, 3).map((item) => (
              <div key={item.id}>
                <SoapCard soap={item} />
              </div>
            ))}
        </div>
      </div>
    </Link>
  );
};

export default CheckGallery;
