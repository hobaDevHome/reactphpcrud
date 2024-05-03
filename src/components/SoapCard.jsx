import React from "react";
import { RiEdit2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";

const SoapCard = ({ soap, edit }) => {
  return (
    <div className="mt-6 relative">
      {edit && (
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
      )}
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
    </div>
  );
};

export default SoapCard;
