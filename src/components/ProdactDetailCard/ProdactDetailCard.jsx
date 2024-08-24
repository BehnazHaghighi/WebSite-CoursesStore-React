import React from "react";

const ProdactDetailCard = ({ image, altname ,productname ,price ,description}) => {
  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="w-full md:w-1/2">
          <img
            src={image}
            alt={altname}
            className="w-full h-64 object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 p-4 md:p-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
          productname: {productname}
          </h1>
          <p className="text-xl text-gray-700 mb-4">price: {price}</p>
          <p className="text-gray-600 mb-4">description: {description}</p>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            onClick={() => alert("Added to shopping cart :)")}
          >
            Add to shopping cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProdactDetailCard;
