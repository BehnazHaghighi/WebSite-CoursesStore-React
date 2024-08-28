import React from "react";

const UserReviewCard = ({ image, name, review }) => {
  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
      <div className="flex flex-row justify-start items-center">
        <img
          src={image}
          alt={name}
          className="w-16 h-16 rounded-full shadow-lg mb-4"
        />
        <h3 className="text-lg font-semibold text-gray-900 mr-2">{name}</h3>
      </div>
      <p className="text-gray-700 text-right text-xs">{review}</p>
    </div>
  );
};

export default UserReviewCard;
