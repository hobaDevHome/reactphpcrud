// @ts-nocheck
import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaLeaf } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { IoEyedrop } from "react-icons/io5";
import axios from "axios";

const SoapDetails = () => {
  const [soapItem, setSoapItem] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    getSoap();
  }, []);

  function getSoap() {
    axios
      .get(`https://sql112.infinityfree.com/soapAPI/soap/${id}`)
      .then(function (response) {
        // console.log(response.data);
        setSoapItem(response.data);
      });
  }

  return (
    <div className="mt-6 flex">
      <div className="w-1/2 p-4">
        <img src={soapItem.url} alt="" style={{ width: "100%" }} />
      </div>
      <div className="w-1/2 p-4">
        <div className="text-3xl mb-4 font-medium">{soapItem.title}</div>
        <div className="text-2xl mt-3 mb-4">{soapItem.price} $</div>

        <div className="flex mb-4">
          <FaLeaf style={{ color: "green", marginRight: 10, fontSize: 20 }} />
          <div>100% NATURAL & ETHICAL</div>
        </div>

        <div className="flex mb-4">
          <FaHeart style={{ color: "red", marginRight: 10, fontSize: 20 }} />
          <div> Not Tested On Animals - 100% Vegetarian</div>
        </div>
        <div className="flex mb-4">
          <IoEyedrop style={{ color: "blue", marginRight: 10, fontSize: 20 }} />
          <div> EXPERTLY HANDCRAFTED & GLYCERINE RICH</div>
        </div>

        <div>{soapItem.description}</div>
      </div>
    </div>
  );
};

export default SoapDetails;
