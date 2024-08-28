import React from "react";
import Layout from "../../components/Layout/Layout";
import {
  FaPencilAlt,
  FaGraduationCap,
  FaVideo,
  FaFolderOpen,
  FaLightbulb,
  FaListAlt,
  FaClock,
  FaDollarSign,
} from "react-icons/fa";

import pic from "../../assets/image/masood.jpg";
import { Link } from "react-router-dom";
import ReadMore from "../../components/ReadMore/ReadMore";

const Home = () => {
  return (
    <>
      <Layout>
        {/* section1 information site */}
        <div className="container mx-auto p-4 md:p-8 rtl">
          <div className="flex flex-col justify-between items-center md:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
            {/* Section for home Info */}
            <div className="w-full md:w-1/2 p-4 md:p-8">
              <h6 className="text-2xl font-bold text-gray-900 mb-4">
                برنامه نویسی به زبان ساده.
              </h6>
              <p>
                در فرانت کست می‌توانید مهارت‌های برنامه نویسی خود را تقویت کنید
                و به یک توسعه‌دهنده حرفه‌ای تبدیل شوید.
              </p>

              <Link to={"/Prodacts"}>
                <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">
                  شروع یادگیری
                </button>
              </Link>

              <div className="flex flex-col space-y-4 text-right mt-5">
                {/* icon section */}
                <div className="flex flex-col space-y-4">
                  <div className="flex flex-row">
                    <div className="flex items-center space-x-2">
                      <FaPencilAlt size={14} className="text-blue-500" />
                      <span className="text-xs">یادگیری با انجام تمرین</span>
                    </div>

                    <div className="flex items-center space-x-2">
                      <FaClock size={14} className="text-blue-500" />
                      <span className="text-xs">ویدیوهای کوتاه و با کیفیت</span>
                    </div>

                    <div className="flex items-center space-x-2">
                      <FaFolderOpen size={14} className="text-blue-500" />
                      <span className="text-xs">ضمانت بازگشت وجه</span>
                    </div>
                  </div>

                  <div className="flex flex-row">
                    <div className="flex items-center space-x-2">
                      <FaVideo size={14} className="text-blue-500" />
                      <span className="text-xs">به روز رسانی رایگان </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <FaListAlt size={24} className="text-blue-500" />
                      <span className="text-xs">سرفصل‌های جامع و دقیق</span>
                    </div>

                    <div className="flex items-center space-x-2">
                      <FaLightbulb size={24} className="text-blue-500" />
                      <span className="text-xs">پشتیبانی دوره‌ها </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Section for Image */}
            <div>
              <img src={pic} alt="pic" className="w-full h-64 object-contain" />
            </div>
          </div>
        </div>
        {/* end section1 information site */}

        {/* section 2 readmore product */}
        <div>
          <h1 className="text-2xl font-bold mb-6">دوره‌های آموزشی</h1>
          <ReadMore />
        </div>

        {/* end section 2 readmore product */}
      </Layout>
    </>
  );
};

export default Home;
