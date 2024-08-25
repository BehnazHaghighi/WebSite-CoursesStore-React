import React from "react";
import {
  FaTwitter,
  FaInstagram,
  FaTelegramPlane,
  FaLinkedin,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-200 dark:bg-gray-800 p-4 text-right">
        {/* Navigation Links */}
        <nav className="ml-auto flex justify-end">
          <ul className="flex flex-wrap justify-end space-x-4">
            <li>
              <Link
                to="/TelegramChannel"
                className="text-gray-700 dark:text-gray-300"
              >
                کانال تلگرام
              </Link>
            </li>
            <li>
              <Link to="/Blog" className="text-gray-700 dark:text-gray-300">
                وبلاگ
              </Link>
            </li>

            <li>
              <Link
                to="/TermsOfUse"
                className="text-gray-700 dark:text-gray-300"
              >
                شرایط استفاده
              </Link>
            </li>
            <li>
              <Link
                to="/ContactUs"
                className="text-gray-700 dark:text-gray-300"
              >
                تماس با ما
              </Link>
            </li>
            <li>
              <Link
                to="/DesAboutUs"
                className="text-gray-700 dark:text-gray-300"
              >
                درباره‌ی ما
              </Link>
            </li>
          </ul>
        </nav>

        <div className="flex justify-end items-center mt-6">
          <div className="flex space-x-2">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter size={18} className="hover:text-blue-400" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={18} className="hover:text-pink-400" />
            </a>
            <a
              href="https://telegram.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTelegramPlane size={18} className="hover:text-blue-500" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={18} className="hover:text-blue-700" />
            </a>
          </div>
          <span className="ml-2 text-gray-700 dark:text-gray-300">
            شبکه‌های اجتماعی
          </span>
        </div>

        <p className="text-gray-700 dark:text-gray-300 text-right mt-4">
          تمامی حقوق برای بهناز حقیقی محفوظ است
        </p>
      </footer>
    </>
  );
};

export default Footer;
