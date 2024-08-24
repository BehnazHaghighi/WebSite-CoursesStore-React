import React from "react";
import { useForm } from "react-hook-form";
import { loginPost } from "../../servises/loginService";

const Login = () => {
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm();

  const postdat = async (data) => {
    const response = await loginPost({
      mobile: data.mobile,
      password: data.password,
    });
  };

  return (
    <div
      id="login"
      className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg"
    >
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Welcome!
      </h1>

      <form onSubmit={handleSubmit(postdat)}>
        <div className="field-wrap mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Mobile<span className="text-red-500">*</span>
          </label>
          <input
            {...register("mobile", { required: "The field is empty" })}
            autoComplete="off"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
          {errors.mobile ? (
            <span className="text-red-500">{errors.mobile.message}</span>
          ) : (
            ""
          )}
        </div>

        <div className="field-wrap mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Password<span className="text-red-500">*</span>
          </label>
          <input
            type="password"
            {...register("password", {
              required: "Password is empty",
              minLength: {
                value: 4,
                message: "The minimum password character is 4 digits",
              },
            })}
            autoComplete="off"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />

          {errors.password ? (
            <span className="text-red-500">{errors.password.message}</span>
          ) : (
            ""
          )}
        </div>

        <p className="forgot text-right text-sm text-blue-500 mb-6">
          <a href="#ForgotPassword">Forgot Password?</a>
        </p>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          {isSubmitting ? "Loading...." : "Log In"}
          
        </button>
      </form>
    </div>
  );
};

export default Login;
