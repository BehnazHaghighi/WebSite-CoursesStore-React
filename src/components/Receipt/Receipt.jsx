import React from "react";

const Receipt = () => {
  const courses = [
    { id: 1, name: "دوره ری‌اکت", price: 500000, quantity: 2 },
    { id: 2, name: "دوره نود جی‌اس", price: 600000, quantity: 1 },
    { id: 3, name: "دوره جاوااسکریپت", price: 400000, quantity: 3 },
  ];

  //    sum
  const totalAmount = courses.reduce(
    (acc, course) => acc + course.price * course.quantity,
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
            {courses.map((course) => (
              <tr key={course.id}>
                <td className="text-right px-4 py-2 border-b">{course.name}</td>
                <td className="text-right px-4 py-2 border-b">
                  {course.price.toLocaleString()}
                </td>
                <td className="text-right px-4 py-2 border-b">
                  {course.quantity}
                </td>
                <td className="text-right px-4 py-2 border-b">
                  {(course.price * course.quantity).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="bg-gray-100">
              <td
                colSpan="3"
                className="text-right px-4 py-2 font-bold border-b"
              >
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
