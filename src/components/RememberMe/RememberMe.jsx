import React from "react";

const RememberMe = () => {
  return (
    <div className="flex items-center  mb-4 rtl text-right">
      <label htmlFor="rememberMe" className="me-2 text-sm text-gray-700">
        مرا به خاطر بسپار
      </label>
      <input
        id="rememberMe"
        type="checkbox"
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
      />
    </div>
  );
};

export default RememberMe;
