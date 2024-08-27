import React, { useState } from "react";
import { FaLock } from "react-icons/fa";
import Counter from "../../components/Counter/Counter";

const ProdactDetailCard = ({
  image,
  altname,
  productname,
  price,
  description,
}) => {
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="relative w-full md:w-1/2">
          <img
            src={image}
            alt={altname}
            className="w-full h-64 object-contain"
          />
          {!isLoggedIn && (
            <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
              <FaLock size={48} className="text-white" />
            </div>
          )}
        </div>

        <div className="w-full md:w-1/2 p-4 md:p-8">
          <h6 className="text-2xl font-bold text-gray-900 mb-4">
            {productname}
          </h6>
          <p className="text-xl text-gray-700 mb-4">price: {price}</p>
          <p className="text-gray-600 mb-4">description: {description}</p>
          <Counter />
        </div>
      </div>
    </div>
  );
};

export default ProdactDetailCard;
