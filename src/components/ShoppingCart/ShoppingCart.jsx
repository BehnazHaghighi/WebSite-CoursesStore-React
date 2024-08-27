import React, { useState } from "react";

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = () => {
    const newItem = {
      id: cartItems.length + 1,
      name: `Item ${cartItems.length + 1}`,
      price: 10,
    };
    setCartItems([...cartItems, newItem]);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cartItems.map((item) => (
          <div key={item.id} className="border p-4 rounded shadow-sm">
            <h3 className="text-lg font-semibold">{item.name}</h3>
            <p>Price: ${item.price}</p>
          </div>
        ))}
      </div>

      <button
        onClick={addItemToCart}
        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
      >
        Add Item
      </button>

      <div className="mt-4">
        <h3 className="text-xl font-semibold">
          Total Items: {cartItems.length}
        </h3>
        <h3 className="text-xl font-semibold">
          Total Price: $
          {cartItems.reduce((total, item) => total + item.price, 0)}
        </h3>
      </div>
    </div>
  );
};

export default ShoppingCart;
