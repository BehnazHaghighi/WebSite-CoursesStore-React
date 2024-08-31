import React, { useState } from "react";
import Login from "../../components/Auth/Login";
import ForgotPassword from "../../components/Auth/ForgotPassword";
import Layout from "../../components/Layout/Layout";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Auth = () => {
  const [activeTab, setActiveTab] = useState("login");


  const isLogin = useSelector((state) => state.auth.token);
  console.log(isLogin);

  if (isLogin) {
   return <Navigate to="/" replace />;
  }

  return (
    <>
      {/* <Layout> */}
      <div className="rtl">
        {activeTab === "login" ? (
          <Login forgetHandler={() => setActiveTab("ForgotPassword")} />
        ) : activeTab === "ForgotPassword" ? (
          <ForgotPassword />
        ) : (
          ""
        )}
      </div>
      {/* </Layout> */}
    </>
  );
};

export default Auth;
