import React from "react";
import { useForm } from "react-hook-form";
import { forgetPost } from "../../servises/loginService";

const ForgotPassword = () => {
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm();

  const postdat = async (data) => {
    const response = await forgetPost({
      mobile: data.mobile,
      password: data.password,
    });
  };

  return (
    <div className="flex justify-end items-center bg-gray-100  p-4 rtl">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <p className="text-right mb-4">
          گذرواژه خود را فراموش کرده‌اید؟ نام کاربری یا ایمیل خود را وارد کنید.
          یک لینک برای ساختن گذرواژه جدید در ایمیل خود دریافت خواهید کرد.
        </p>
        <form onSubmit={handleSubmit(postdat)} className="text-right">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              نام کاربری یا ایمیل<span className="text-red-500">*</span>
            </label>
            <input
              {...register("mobile", { required: "The field is empty" })}
              autoComplete="off"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-right"
            />
            {errors.mobile && (
              <span className="text-red-500">{errors.mobile.message}</span>
            )}
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-500 text-white py-2 rounded-lg font-medium hover:bg-blue-600 transition duration-300"
          >
            {isSubmitting ? "Loading" : "بازگردانی گذرواژه"}
          </button>
        </form>
      </div>
    </div>

  );
};

export default ForgotPassword;
