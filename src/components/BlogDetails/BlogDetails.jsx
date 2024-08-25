import React from "react";

const BlogDetails = ({ titelblog, nameblog, dateblog, descriptionblog }) => {
  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="w-full md:w-1/2 p-4 md:p-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">{titelblog}</h1>
          <p className="text-xl text-gray-700 mb-4">{nameblog}</p>
          <p className="text-xl text-gray-700 mb-4">{dateblog}</p>
          <p className="text-gray-600 mb-4">{descriptionblog}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
