// @ts-nocheck
import React from "react";

import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SoapCard from "../components/SoapCard";

const Gallery = ({ edit = false }) => {
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

  return (
    <div className=" m-10">
      <div className="grid grid-cols-3 gap-6">
        {soapList &&
          soapList.map((item) => (
            <div key={item.id}>
              <Link to={`/details/${item.id}`} style={{ marginRight: "10px" }}>
                <SoapCard soap={item} edit={edit} />
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};
export default Gallery;
