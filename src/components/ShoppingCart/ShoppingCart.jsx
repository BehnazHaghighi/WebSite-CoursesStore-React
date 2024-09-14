import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Counter from "../Counter/Counter";
import axios from "axios";

const Cart = () => {
  const { items, totalQuantity, totalPrice } = useSelector(
    (state) => state.cart
  );
  const token = useSelector((state) => state.auth.token);
  const navigate = useNavigate();

  const handlePayment = async () => {
    const cartData = {
      items: items?.map((item) => ({
        productId: item?.id,
        quantity: item?.quantity,
      })),
      totalQuantity,
      totalPrice,
    };

    try {
      // ارسال درخواست به API
      await axios.post("http://localhost:5000/api/orders", {
        products: cartData.items,
      });

      // در صورت موفقیت به صفحه رسید هدایت شود
      navigate("/ReceiptShopping", { state: { cartData } });
    } catch (error) {
      console.error("Error submitting order", error);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">سبد خرید</h2>
      {items.length === 0 ? (
        <p>سبد خرید خالی است.</p>
      ) : (
        <div>
          {/* جدول اول: نام دوره، مبلغ و تعداد */}
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-right px-4 py-2 border-b">نام دوره</th>
                  <th className="text-right px-4 py-2 border-b">
                    مبلغ (تومان)
                  </th>
                  <th className="text-right px-4 py-2 border-b">تعداد</th>
                </tr>
              </thead>
              <tbody>
                {items?.map((item) => (
                  <tr key={item?.id}>
                    <td className="text-right px-4 py-2 border-b">
                      {item?.name}
                    </td>
                    <td className="text-right px-4 py-2 border-b">
                      {item?.totalPrice.toLocaleString()} تومان
                    </td>
                    <td className="text-right px-4 py-2 border-b">
                      <Counter product={item} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* جدول دوم: تعداد کل و قیمت کل */}
          <div className="mt-4">
            <table className="min-w-full bg-white border border-gray-200">
              <tbody>
                <tr>
                  <td className="text-right px-4 py-2 border-b font-bold">
                    تعداد کل:
                  </td>
                  <td className="text-right px-4 py-2 border-b">
                    {totalQuantity}
                  </td>
                </tr>
                <tr>
                  <td className="text-right px-4 py-2 border-b font-bold">
                    قیمت کل:
                  </td>
                  <td className="text-right px-4 py-2 border-b">
                    {totalPrice.toLocaleString()} تومان
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* پرداخت */}
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
    </div>
  );
};

export default Cart;
