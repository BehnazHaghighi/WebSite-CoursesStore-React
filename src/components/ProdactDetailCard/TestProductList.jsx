import React from "react";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../redux/slices/cartSlice";

const products = [
  { id: 1, name: "محصول 1", price: 100 },
  { id: 2, name: "محصول 2", price: 200 },
  { id: 3, name: "محصول 3", price: 300 },
];

const ProductList = () => {
  const dispatch = useDispatch();

  const addToCartHandler = (product) => {
    dispatch(addItemToCart(product));
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {products.map((product) => (
        <div key={product.id} className="border p-4 rounded-lg shadow-lg">
          <h2 className="text-lg font-bold mb-2">{product.name}</h2>
          <p className="mb-2">قیمت: {product.price} تومان</p>
          <button
            onClick={() => addToCartHandler(product)}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            افزودن به سبد خرید
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
