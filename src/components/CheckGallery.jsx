// @ts-nocheck
import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SoapCard from "./SoapCard";
import { GrGallery } from "react-icons/gr";

const CheckGallery = () => {
  const [soapList, setSoapList] = useState([]);

  useEffect(() => {
    getSoapList();
  }, []);

  function getSoapList() {
    axios
      .get("https://purely-psi.vercel.app/soapAPI/products/")
      .then(function (response) {
        //   console.log(response.data);
        setSoapList(response.data);
      });
  }

  return (
    <div className=" m-10">
      <div className="text-5xl mt-10">
        <div style={{ fontFamily: "Freeman", textAlign: "center" }}>
          <div>
            Check our
            <span style={{ color: "#B0612C" }}> gallery</span>
          </div>
        </div>
      </div>

      <div className="grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center m-2 ">
        {soapList &&
          soapList.slice(0, 3).map((item) => (
            <div key={item.id}>
              <SoapCard soap={item} />
            </div>
          ))}
      </div>
      <Link to={`/gallery`} style={{ marginRight: "10px" }}>
        <span>
          <button
            type="button"
            class="inline-flex items-center rounded-md bg-pink-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            <GrGallery style={{ marginRight: 10 }} />
            View all products
          </button>
        </span>
      </Link>
    </div>
  );
};

export default CheckGallery;
