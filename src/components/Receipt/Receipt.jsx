import React from "react";
import { useLocation } from "react-router-dom";

const Receipt = () => {
  const location = useLocation();
  const { cartData } = location.state;

  const totalAmount = cartData.items.reduce(
    (acc, item) => acc + (parseFloat(item.price) * parseInt(item.quantity, 10)),
    0
  );

  return (
    <div className="max-w-4xl mx-auto mt-8 p-4 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">رسید خرید</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="text-right px-4 py-2 border-b">دوره</th>
              <th className="text-right px-4 py-2 border-b">مبلغ (تومان)</th>
              <th className="text-right px-4 py-2 border-b">تعداد</th>
              <th className="text-right px-4 py-2 border-b">جمع</th>
            </tr>
          </thead>
          <tbody>
            {cartData.items?.map((item) => (
              <tr key={item?.productId}>
                <td className="text-right px-4 py-2 border-b">{item?.name}</td>
                <td className="text-right px-4 py-2 border-b">
                  {parseFloat(item?.price).toLocaleString()}
                </td>
                <td className="text-right px-4 py-2 border-b">
                  {parseInt(item?.quantity, 10)}
                </td>
                <td className="text-right px-4 py-2 border-b">
                  {(parseFloat(item?.price) * parseInt(item?.quantity, 10)).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="bg-gray-100">
              <td colSpan="3" className="text-right px-4 py-2 font-bold border-b">
                جمع کل:
              </td>
              <td className="text-right px-4 py-2 font-bold border-b">
                {totalAmount.toLocaleString()} تومان
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default Receipt;
