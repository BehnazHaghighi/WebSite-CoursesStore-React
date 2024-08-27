import React from "react";
import Layout from "../../components/Layout/Layout";
import Counter from "../../components/Counter/Counter";
// import ShoppingCart from "../../components/ShoppingCart/ShoppingCart";

const Shopping = () => {
  return (
    <>
      <Layout>
        <h2>Welcome to the Shopping.... Page!</h2>
        {/* <ShoppingCart/> */}

        <Counter/>
      </Layout>
    </>
  );
};

export default Shopping;
