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
    <footer className="bg-gray-200 dark:bg-gray-800 p-4 text-right rtl">
      {/* Navigation Links */}
      <nav className="mb-4">
        <ul className="flex flex-row items-center justify-star space-x-4">
          <li>
            <Link to="/DesAboutUs" className="text-gray-700 dark:text-gray-300">
              درباره‌ی ما
            </Link>
          </li>
          <li>
            <Link to="/ContactUs" className="text-gray-700 dark:text-gray-300">
              تماس با ما
            </Link>
          </li>
          <li>
            <Link to="/TermsOfUse" className="text-gray-700 dark:text-gray-300">
              شرایط استفاده
            </Link>
          </li>
          <li>
            <Link to="/Blog" className="text-gray-700 dark:text-gray-300">
              وبلاگ
            </Link>
          </li>
          <li>
            <Link to="/TelegramChannel" className="text-gray-700 dark:text-gray-300">
              کانال تلگرام
            </Link>
          </li>
        </ul>
      </nav>

      {/* Social Media Links */}
      <div className="mb-4">
        <div className="flex items-center space-x-2">
          <span className="text-gray-700 dark:text-gray-300">
            شبکه‌های اجتماعی
          </span>
          <div className="flex space-x-3">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
            >
              <FaTwitter size={18} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-400"
            >
              <FaInstagram size={18} />
            </a>
            <a
              href="https://telegram.org"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500"
            >
              <FaTelegramPlane size={18} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-700"
            >
              <FaLinkedin size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Rights Statement */}
      <p className="text-gray-700 dark:text-gray-300">
        تمامی حقوق برای بهناز حقیقی محفوظ است
      </p>
    </footer>
  );
};

export default Footer;
