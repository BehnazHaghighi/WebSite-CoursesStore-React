import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkmode } from "../../redux/slice/themSlice";
import logo from "../../assets/image/frontcast-logo-top.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const darkMode = useSelector((state) => state.theme.darkMode);
  const cartItemCount = useSelector((state) => state.cart.items.length);

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("بهناز");

  const dispatch = useDispatch();

  const toggelHandler = () => {
    dispatch(toggleDarkmode());
  };

  return (
    <header className="bg-gray-200 dark:bg-gray-800 p-4 flex flex-col md:flex-row items-center justify-between rtl">
      <button
        onClick={toggelHandler}
        className="bg-slate-500 text-white px-2 py-1 rounded hover:bg-slate-700 mt-4 md:mt-0"
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>

      <nav className="flex flex-col md:flex-row md:space-x-reverse md:space-x-6 space-y-2 md:space-y-0 text-center">
        <ul className="flex flex-col md:flex-row md:space-x-reverse md:space-x-6 space-y-2 md:space-y-0">
          <li>
            {isLoggedIn ? (
              <span className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
                سلام، {username}
              </span>
            ) : (
              <Link to="/Auth">
                <button
                  onClick={() => setIsLoggedIn(true)}
                  className="bg-blue-500 px-4 py-2 rounded  text-white hover:bg-blue-600"
                >
                  حساب کاربری
                </button>
              </Link>
            )}
          </li>
          <li>
            <Link to="/" className="text-gray-700 dark:text-gray-300">
              صفحه‌ی اصلی
            </Link>
          </li>
          <li>
            <Link to="/Prodacts" className="text-gray-700 dark:text-gray-300">
              دوره‌های آموزشی
            </Link>
          </li>
          <li className="relative">
            <Link to="/Shopping" className="text-gray-700 dark:text-gray-300">
              <FontAwesomeIcon icon={faShoppingCart} />
              سبد خرید
              {cartItemCount > 0 && (
                <span className="absolute top-0 left-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform -translate-x-1/2 -translate-y-1/2 bg-red-500 rounded-full">
                  {cartItemCount}
                </span>
              )}
            </Link>
          </li>
        </ul>
      </nav>

      <div className="flex items-center mb-4 md:mb-0">
        <img src={logo} alt="logo" className="w-16 h-auto md:w-20 md:h-auto" />
      </div>
    </header>
  );
};

export default Header;
