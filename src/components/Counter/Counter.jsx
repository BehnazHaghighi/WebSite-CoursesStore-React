import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart, removeItemFromCart } from "../../redux/slice/cartSlice";

const Counter = ({ product }) => {
  const dispatch = useDispatch();
  const quantity = useSelector((state) =>
    state.cart.items.find((item) => item.id === product.id)?.quantity || 0
  );

  const increaseQuantity = () => {
    dispatch(addItemToCart(product));
  };

  const decreaseQuantity = () => {
    if (quantity > 0) {
      dispatch(removeItemFromCart(product.id));
    }
  };

  const resetCart = () => {
    dispatch(removeItemFromCart(product.id));
  };

  return (
    <div className="p-4 bg-white shadow rounded-md text-center">
      {quantity === 0 ? null : (
        <div className="flex items-center justify-center space-x-4">
          <button onClick={increaseQuantity} className="text-blue-500">
            <FontAwesomeIcon icon={faPlus} size="lg" />
          </button>
          <span className="text-lg font-semibold">{quantity}</span>
          <button onClick={decreaseQuantity} className="text-blue-500">
            <FontAwesomeIcon icon={faMinus} size="lg" />
          </button>
        </div>
      )}
      {quantity === 0 ? null : (
        <button
          onClick={resetCart}
          className="text-red-500 mt-4 hover:text-red-600 transition duration-300"
        >
          <FontAwesomeIcon icon={faTrash} size="lg" />
        </button>
      )}
    </div>
  );
};

export default Counter;
