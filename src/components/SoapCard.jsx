import React, { useState } from "react";
import { RiEdit2Fill } from "react-icons/ri";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SoapCard = ({ soap, edit }) => {
  const navigate = useNavigate();
  const deleteUser = (id) => {
    axios
      .delete(`https://sql112.infinityfree.com/soapAPI/soap/${id}/delete`)
      .then(function (response) {
        console.log(response.data);
        navigate(0);
        // navigate("/dashboard");
        // getUsers();
      });
  };

  return (
    <div className="mt-6 relative">
      {edit && (
        <>
          <div
            className="absolute top-4 left-4 hover:scale-125 flex justify-center items-center"
            style={{
              width: 50,
              height: 50,
              borderRadius: 25,
              backgroundColor: "rgba(255,255,255,0.5",
            }}
          >
            <Link to={`/soap/${soap.id}/edit`} style={{ marginRight: "10px" }}>
              <RiEdit2Fill style={{ fontSize: 20 }} />
            </Link>
          </div>
          <div
            className="absolute top-4 left-20 hover:scale-125 flex justify-center items-center"
            style={{
              width: 50,
              height: 50,
              borderRadius: 25,
              backgroundColor: "rgba(255,255,255,0.5",
            }}
            onClick={() => deleteUser(soap.id)}
          >
            <MdDelete style={{ fontSize: 20, color: "red" }} />
          </div>
        </>
      )}
      <div>
        <Link to={`/details/${soap.id}`} style={{ marginRight: "10px" }}>
          <div>
            <img
              src={soap.url}
              alt=""
              style={{ width: 300, height: 340, objectFit: "cover" }}
            />
          </div>
          <div style={{ width: 300 }}>
            <div className="text-3xl mt-3 font-medium">{soap.title}</div>
            <div className="text-2xl mt-3">{soap.price} $</div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default SoapCard;
