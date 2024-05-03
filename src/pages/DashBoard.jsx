import React from "react";
import { Link } from "react-router-dom";
import Gallery from "./Gallery";
import { MdAddToPhotos } from "react-icons/md";

const DashBoard = () => {
  return (
    <div>
      <div>
        <Link to="/soap/create">
          <span>
            <button
              type="button"
              className="mt-4 inline-flex items-center rounded-md bg-pink-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              <MdAddToPhotos style={{ marginRight: 10 }} />
              Add a product
            </button>
          </span>
        </Link>
      </div>
      <div>
        <Gallery edit={true} />
      </div>
    </div>
  );
};

export default DashBoard;
