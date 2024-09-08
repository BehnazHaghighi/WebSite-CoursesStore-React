import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItemFromCart } from "../../redux/slice/cartSlice";

const Cart = () => {
  const { items, totalQuantity, totalPrice } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const removeFromCartHandler = (id) => {
    dispatch(removeItemFromCart(id));
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">سبد خرید</h2>
      {items.length === 0 ? (
        <p>سبد خرید خالی است.</p>
      ) : (
        <div>
          <ul>
            {items.map((item) => (
              <li key={item.id} className="flex justify-between items-center mb-2">
                <span>
                  {item.name} ({item.quantity})
                </span>
                <span>{item.totalPrice} تومان</span>
                <button
                  onClick={() => removeFromCartHandler(item.id)}
                  className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-700 transition"
                >
                  حذف
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <p>تعداد کل: {totalQuantity}</p>
            <p>قیمت کل: {totalPrice} تومان</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
