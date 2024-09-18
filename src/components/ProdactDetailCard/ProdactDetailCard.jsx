import React from "react";
import {
  FaLock,
  FaClock,
  FaGraduationCap,
  FaDollarSign,
  FaPlayCircle,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Counter from "../../components/Counter/Counter";
import SyllabusDropdowns from "../../components/ToggleDropdown/SyllabusDropdowns";
import { useSelector, useDispatch } from "react-redux";
import { addItemToCart } from "../../redux/slice/cartSlice";

const ProdactDetailCard = ({
  url,
  productname,
  price,
  sesions,
  studentsCount,
  timeCourse,
  description,
  product,
}) => {
  const isLogin = useSelector((state) => state.auth.token);
  const cartItems = useSelector((state) =>
    state.cart.items.find((item) => item.id === product.id)
  );
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addItemToCart(product));
  };

  console.log(url);

  return (
    <div className="container mx-auto p-4 md:p-8 rtl">
      <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Section for Product Info */}
        <div className="w-full md:w-1/2 p-4 md:p-8">
          <h6 className="text-2xl font-bold text-gray-900 mb-4">
            {productname}
          </h6>

          <div className="flex flex-col space-y-4 text-right">
            <div className="flex flex-row justify-between items-center space-y-2">
              <div className="flex justify-center items-center space-x-reverse space-x-2">
                <FaDollarSign size={14} className="text-blue-500" />
                <span className=" text-gray-700 text-sm">{price} تومان</span>
              </div>
              <div className="flex justify-center items-center space-x-reverse space-x-2">
                <FaGraduationCap size={14} className="text-blue-500" />
                <span className="text-sm text-gray-700">{studentsCount} </span>
              </div>
            </div>
            <div className="flex justify-start items-center space-x-reverse space-x-2">
              <FaClock size={14} className="text-blue-500" />
              <span className="text-sm text-gray-700">{timeCourse}</span>
            </div>
          </div>

          {/* Counter for Order */}
          {cartItems ? (
            <Counter product={product} />
          ) : (
            <button
              onClick={handleAddToCart}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition mt-3 mb-3"
            >
              افزودن به سبد خرید
            </button>
          )}

          {/* YouTube Link */}
          <Link
            to={"https://youtube.com"}
            className="text-blue-500 hover:underline flex justify-start items-center space-x-reverse space-x-1 text-sm"
          >
            <FaPlayCircle size={14} className="text-blue-500" />
            <span>مشاهده فصل اول دوره در کانال یوتوب</span>
          </Link>
        </div>

        {/* Section for Video */}
        <div className="relative w-full md:w-1/2">
          {/* src={`http://localhost:5000${url}`} */}
          <video width="520" height="440" controls>
            <source src={url} type="video/mp4" />
            video tag.
          </video>

          {!isLogin && (
            <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
              <FaLock size={48} className="text-white" />
            </div>
          )}
        </div>
      </div>

      {/* Description */}
      <div className="mt-3 text-right">
        <p className="text-gray-600 mb-4">{description}</p>
      </div>

      {/* Syllabus Dropdowns */}
      <div className="mt-3 text-right">
        <h2 className="mb-2">سرفصل‌ها</h2>
        <SyllabusDropdowns syllabus={sesions} />
      </div>
    </div>
  );
};

export default ProdactDetailCard;
