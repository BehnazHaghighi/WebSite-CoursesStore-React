import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Counter from "../Counter/Counter";

const Cart = () => {
  const { items, totalQuantity, totalPrice } = useSelector(
    (state) => state.cart
  );
  const token = useSelector((state) => state.auth.token);
  const navigate = useNavigate();

  const handlePayment = () => {
    const cartData = { items, totalQuantity, totalPrice };
    navigate("/ReceiptShopping", { state: { cartData } }); // ارسال داده‌ها به Receipt
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
              <li
                key={item.id}
                className="flex justify-between items-center mb-2"
              >
                <span>{item.name}</span>
                <span>{item.totalPrice} تومان</span>
                <Counter product={item} />
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <p>تعداد کل: {totalQuantity}</p>
            <p>قیمت کل: {totalPrice} تومان</p>
          </div>
        </div>
      )}

     

      {/* payment */}
      {token ? (
        <button
          onClick={handlePayment}
          className="bg-blue-500 px-4 py-2 rounded text-white hover:bg-blue-600 mt-3 mb-3"
        >
          اقدام به پرداخت
        </button>
      ) : (
        <Link to="/Auth">
          <button className="bg-blue-500 px-4 py-2 rounded text-white hover:bg-blue-600 mt-3 mb-3">
            ورود به سایت
          </button>
        </Link>
      )}
      {/* end payment */}
    </div>
  );
};

export default Cart;
