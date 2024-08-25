// src/App.jsx
import React, { useState } from "react";
import Pagination from "./components/Pagination";

const App = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 40;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">صفحه‌بندی</h1>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default App;
