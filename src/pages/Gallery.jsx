// @ts-nocheck
import React from "react";

import axios from "axios";
import { useEffect, useState } from "react";
import SoapCard from "../components/SoapCard";

const Gallery = ({ edit = false }) => {
  const [soapList, setSoapList] = useState([]);

  useEffect(() => {
    getSoapList();
  }, []);

  function getSoapList() {
    axios
      .get("http://sql112.infinityfree.com/soapAPI/products/")
      .then(function (response) {
        //   console.log(response.data);
        setSoapList(response.data);
      });
  }

  return (
    <div className=" mt-5">
      <div className="grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center m-2 ">
        {soapList &&
          soapList.map((item) => (
            <div key={item.id}>
              <SoapCard soap={item} edit={edit} />
            </div>
          ))}
      </div>
    </div>
  );
};
export default Gallery;
