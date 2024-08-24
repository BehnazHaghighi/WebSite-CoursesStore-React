import React, { useState } from "react";
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
    <div className="flex justify-center items-center bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Forgot Password
        </h2>
        <form onSubmit={handleSubmit(postdat)}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Mobile<span className="text-red-500">*</span>
            </label>
            <input
              {...register("mobile", { required: "Mobile is empty" })}
              autoComplete="off"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
            {errors.mobile ? (
              <span className="text-red-500">{errors.mobile.message}</span>
            ) : (
              ""
            )}
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-500 text-white py-2 rounded-lg font-medium hover:bg-blue-600 transition duration-300"
          >
            {isSubmitting ? "Loading" : "Reset Password"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
