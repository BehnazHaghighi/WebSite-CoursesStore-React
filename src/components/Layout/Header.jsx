import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkmode } from "../../redux/slice/themSlice";
import logo from "../../assets/image/frontcast-logo-top.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { logOut } from "../../redux/slice/authSlice";

const Header = () => {
  const darkMode = useSelector((state) => state.theme.darkMode);
  const cartItemCount = useSelector((state) => state.cart.totalQuantity);
  const token = useSelector((state) => state.auth.token);
  const username = useSelector((state) => state.auth.username);

  const dispatch = useDispatch();

  const toggelHandler = () => {
    dispatch(toggleDarkmode());
  };

  const logOutHandler=()=>{
    dispatch(logOut())
  }

  return (
    <header className="bg-gray-200 dark:bg-gray-800 p-4 flex flex-col md:flex-row items-center justify-between rtl">
      <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-reverse md:space-x-4">
        <button
          onClick={toggelHandler}
          className="bg-slate-500 text-white px-1 py-2 rounded hover:bg-slate-700"
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
        <button onClick={logOutHandler} className="bg-red-500 text-white font-bold py-2 px-6 rounded-full shadow-md hover:bg-red-600 transition duration-300">
          خروج
        </button>
      </div>

      <nav className="mt-4 md:mt-0 flex flex-col md:flex-row md:space-x-reverse md:space-x-6 space-y-2 md:space-y-0 text-center">
        <ul className="flex flex-col md:flex-row md:space-x-reverse md:space-x-6 space-y-2 md:space-y-0">
          <li>
            {token ? (
              <span className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
                سلام، {username}
              </span>
            ) : (
              <Link to="/Auth">
                <button className="bg-blue-500 px-4 py-2 rounded text-white hover:bg-blue-600">
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

      <div className="flex items-center mb-4 mt-4 md:mt-0">
        <img src={logo} alt="logo" className="w-16 h-auto md:w-20 md:h-auto" />
      </div>
    </header>
  );
};

export default Header;
