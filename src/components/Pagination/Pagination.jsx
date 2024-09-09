import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  return (
    <div className="flex justify-center items-center mt-4">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-2 py-1 mx-1 text-white bg-blue-500 rounded-md hover:bg-blue-600 disabled:bg-gray-400"
      >
        &laquo; قبلی
      </button>

      {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
        <button
          key={page}
          onClick={() => handlePageChange(page)}
          className={`px-2 py-1 mx-1 text-white rounded-md ${
            page === currentPage
              ? "bg-blue-600"
              : "bg-blue-500 hover:bg-blue-600"
          }`}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-4 py-2 mx-1 text-white bg-blue-500 rounded-md hover:bg-blue-600 disabled:bg-gray-400"
      >
        بعدی &raquo;
      </button>
    </div>
  );
};

export default Pagination;
