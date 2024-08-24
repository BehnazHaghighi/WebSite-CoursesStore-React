import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkmode } from "../../redux/slice/themSlice";
import { Link } from "react-router-dom";

const Header = () => {
  const darkMode = useSelector((state) => state.theme.darkMode);
  const dispatch = useDispatch();

  const toggelHandler = () => {
    dispatch(toggleDarkmode());
  };

  return (
    <>
      <header className="bg-gray-200 dark:bg-gray-800 p-4 flex justify-between items-center">
        {/* <h1 className="text-xl font-bold text-red-500">My Website</h1> */}

        <button
          onClick={toggelHandler}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>

        <nav className="ml-auto">
          <ul className="flex space-x-4">
            <li>
              <Link to="/Prodacts" className="text-gray-700 dark:text-gray-300">
                سبدخرید
              </Link>
            </li>
            <li>
              <Link to="/Prodacts" className="text-gray-700 dark:text-gray-300">
                دوره های آموزشی
              </Link>
            </li>
            <li>
              <Link to="/" className="text-gray-700 dark:text-gray-300">
                صفحه ی اصلی
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
      </header>
    </>
  );
};

export default Header;
