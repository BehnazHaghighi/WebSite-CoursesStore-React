import React, { useState } from "react";
import Login from "../../components/Auth/Login";
import ForgotPassword from "../../components/Auth/ForgotPassword";
import Layout from "../../components/Layout/Layout";

const Auth = () => {
  const [activeTab, setActiveTab] = useState("login");

  return (
    <Layout>
      <div className="rtl">
        {activeTab === "login" ? (
          <Login forgetHandler={() => setActiveTab("ForgotPassword")} />
        ) : activeTab === "ForgotPassword" ? (
          <ForgotPassword />
        ) : (
          ""
        )}
      </div>
    </Layout>
  );
};

export default Auth;
