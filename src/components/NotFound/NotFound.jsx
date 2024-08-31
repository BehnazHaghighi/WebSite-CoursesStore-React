import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <h1 className="text-9xl font-bold text-gray-800 dark:text-gray-200 mb-4">404</h1>
      <h2 className="text-2xl md:text-3xl font-medium text-gray-800 dark:text-gray-200 mb-8">
        صفحه مورد نظر پیدا نشد
      </h2>
      <p className="text-gray-600 dark:text-gray-400 mb-8">
        ممکن است آدرس را اشتباه وارد کرده باشید یا این صفحه دیگر وجود نداشته باشد.
      </p>
      <Link
        to="/"
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition"
      >
        بازگشت به صفحه‌ی اصلی
      </Link>
    </div>
  );
};

export default NotFound;
