import React from "react";
import { Link } from "react-router-dom";
import Gallery from "./Gallery";

const DashBoard = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/soap/create">Add product</Link>
          </li>
        </ul>
      </nav>
      <Gallery edit={true} />
    </div>
  );
};

export default DashBoard;
