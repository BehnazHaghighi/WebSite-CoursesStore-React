import React, { useState } from "react";
import Register from "../../components/Auth/Register";
import Login from "../../components/Auth/Login";
import ForgotPassword from "../../components/Auth/ForgotPassword";
import Layout from "../../components/Layout/Layout";

const Auth = () => {
  const [activeTab, setActiveTab] = useState("signup");

  return (
    <Layout>
      <div className="form max-w-md mx-auto mt-10 p-2 bg-white shadow-lg rounded-lg">
        <ul className="tab-group flex border-b mb-6">
          <li
            className={`tab mr-1 ${
              activeTab === "signup" ? "border-blue-500" : "border-transparent"
            }`}
          >
            <a
              href="#signup"
              className={`inline-block py-2 px-4 font-semibold ${
                activeTab === "signup"
                  ? "text-blue-500 border-b-2 border-blue-500"
                  : "text-gray-500 hover:text-blue-500 hover:border-blue-500"
              } transition duration-300`}
              onClick={() => setActiveTab("signup")}
            >
              Sign Up
            </a>
          </li>
          <li
            className={`tab ${
              activeTab === "login" ? "border-blue-500" : "border-transparent"
            }`}
          >
            <a
              href="#login"
              className={`inline-block py-2 px-4 font-semibold ${
                activeTab === "login"
                  ? "text-blue-500 border-b-2 border-blue-500"
                  : "text-gray-500 hover:text-blue-500 hover:border-blue-500"
              } transition duration-300`}
              onClick={() => setActiveTab("login")}
            >
              Log In
            </a>
          </li>
        </ul>

        <div className="tab-content">
          {activeTab === "signup" ? (
            <Register />
          ) : activeTab === "login" ? (
            <Login />
          ) : activeTab === "ForgotPassword" ? (
            <ForgotPassword />
          ) : (
            ""
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Auth;
