import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkmode } from "../../redux/slice/themSlice";
import logo from "../../assets/image/frontcast-logo-top.png";
import { Link } from "react-router-dom";

const Header = () => {
  const darkMode = useSelector((state) => state.theme.darkMode);
  const dispatch = useDispatch();

  const toggelHandler = () => {
    dispatch(toggleDarkmode());
  };

  return (
    <header className="bg-gray-200 dark:bg-gray-800 p-4 flex flex-col md:flex-row items-center justify-between">
      {/* Logo */}
      <div className="flex items-center mb-4 md:mb-0">
        <img src={logo} alt="logo" className="w-16 h-auto md:w-20 md:h-auto" />
      </div>
      {/* Navigation Links */}
      <nav className="flex flex-col md:flex-row md:space-x-4 space-y-2 md:space-y-0 text-center">
        <ul className="flex flex-col md:flex-row md:space-x-4 space-y-2 md:space-y-0">
          <li>
            <Link to="/Prodacts" className="text-gray-700 dark:text-gray-300">
              سبد خرید
            </Link>
          </li>
          <li>
            <Link to="/Prodacts" className="text-gray-700 dark:text-gray-300">
              دوره‌های آموزشی
            </Link>
          </li>
          <li>
            <Link to="/" className="text-gray-700 dark:text-gray-300">
              صفحه‌ی اصلی
            </Link>
          </li>
          <li>
            <Link
              to="/Auth"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              حساب کاربری
            </Link>
          </li>
        </ul>
      </nav>
      {/* Dark mode/light mode button */}
      <button
        onClick={toggelHandler}
        className="bg-slate-500 text-white px-2 py-1 rounded hover:bg-slate-700 mt-4 md:mt-0"
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </header>
  );
};

export default Header;
