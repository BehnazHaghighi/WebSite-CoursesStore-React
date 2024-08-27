import React from "react";
import { Link } from "react-router-dom";

const Card = ({ title, imageUrl, link }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-200 text-right ">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-auto object-contain"
      />

      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <Link to={link} className="text-blue-500 hover:underline">
          مشاهده مطلب بیشتر
        </Link>
      </div>
      
    </div>
  );
};

export default Card;
