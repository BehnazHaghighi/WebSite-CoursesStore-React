import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const ProductCard = ({ image, altname,status, title, price, linkproduct }) => {
  return (
    <>
      <div className="bg-white rounded-lg shadow-md p-4">
        <img
          src={image}
          alt={altname}
          className="w-full h-48 object-cover mb-4 rounded-lg"
        />
        <p className="text-blue-800">{status}</p>
        <h6 className="text-lg font-semibold mb-2">{title}</h6>

        <div className="flex justify-between items-center">
          <div className="bg-blue-100 p-1 rounded">
            <p className="text-blue-800">تومان {price}</p>
          </div>
          <Link
            to={linkproduct}
            className="text-blue-500 hover:underline flex items-center space-x-1"
          >
            <span>مشاهده دوره</span>
            <FaArrowLeft size={16} className="text-blue-500" />
          </Link>
        </div>
      </div>
    </>
  );
};
export default ProductCard;
