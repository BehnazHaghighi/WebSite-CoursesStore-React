import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { loginPost, registerPost } from "../../servises/loginService";
import RememberMe from "../../components/RememberMe/RememberMe";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { userlogin } from "../../redux/slice/authSlice";
import { useNavigate } from "react-router-dom";

const Login = ({ forgetHandler }) => {
  const loginForm = useForm();
  const registerForm = useForm();

  const {
    register: registerLogin,
    handleSubmit: handleSubmitLogin,
    formState: { errors: loginErrors, isSubmitting: isLoginSubmitting },
  } = loginForm;
  const {
    register: registerRegister,
    handleSubmit: handleSubmitRegister,
    formState: { errors: registerErrors, isSubmitting: isRegisterSubmitting },
  } = registerForm;

  // ...........login
  // valid username and password
  // username: 'emilys',
  // password: 'emilyspass',
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const postdatLogin = async (data) => {
    try {
      const result = await dispatch(
        userlogin({
          username: data.mobile,
          password: data.password,
        })
      );

      if (result.payload && result.payload.token) {
        navigate("/");
      } else if (
        result.payload &&
        result.payload === "نام کاربری یا رمز عبور اشتباه است."
      ) {
        alert(result.payload); // نمایش خطای 400
      }
    } catch (error) {
      console.error("یک خطای غیرمنتظره رخ داد:", error);
    }
  };

  // ...........end login

  const postdatRegister = async (data) => {
    const response = await registerPost({
      name: data.name,
      lastName: data.lastName,
      mobile: data.mobile,
      password: data.password,
    });
  };

  const [showPasswordLogin, setShowPasswordLogin] = useState(false);
  const togglePasswordVisibilityLogin = () => {
    setShowPasswordLogin(!showPasswordLogin);
  };

  const [showPasswordRegister, setShowPasswordRegister] = useState(false);
  const togglePasswordVisibilityRegister = () => {
    setShowPasswordRegister(!showPasswordRegister);
  };

  return (
    <div className="flex flex-col md:flex-row justify-center md:justify-between bg-gray-100 p-4 rtl space-y-6 md:space-y-0 md:space-x-6 w-full">
      {/* Login Card */}
      <div
        id="login"
        className="w-full md:w-1/2 bg-white shadow-lg rounded-lg p-8"
      >
        <h1 className="text-3xl font-bold text-right text-gray-800 mb-6">
          ورود
        </h1>
        <form onSubmit={handleSubmitLogin(postdatLogin)} className="text-right">
          <div className="field-wrap mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              <span className="text-red-500">*</span>نام کاربری یا آدرس ایمیل
            </label>
            <input
              {...registerLogin("mobile", { required: "The field is empty" })}
              autoComplete="off"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-right"
            />
            {loginErrors.mobile && (
              <span className="text-red-500">{loginErrors.mobile.message}</span>
            )}
          </div>

          <div className="field-wrap mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              <span className="text-red-500">*</span>گذرواژه
            </label>
            <div className="relative">
              <input
                type={showPasswordLogin ? "text" : "password"}
                {...registerLogin("password", {
                  required: "Password is empty",
                  minLength: {
                    value: 4,
                    message: "The minimum password character is 4 digits",
                  },
                })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-right"
              />
              <button
                type="button"
                onClick={togglePasswordVisibilityLogin}
                className="absolute inset-y-0 left-0 px-3 py-2 text-gray-600 focus:outline-none"
              >
                <FontAwesomeIcon
                  icon={showPasswordLogin ? faEyeSlash : faEye}
                />
              </button>
            </div>
            {loginErrors.password && (
              <span className="text-red-500">
                {loginErrors.password.message}
              </span>
            )}
          </div>

          <div className="flex justify-end mb-4">
            <RememberMe />
          </div>

          <button
            type="submit"
            disabled={isLoginSubmitting}
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            {isLoginSubmitting ? "Loading..." : "ورود"}
          </button>

          <p className="forgot text-right text-sm text-blue-500 mb-6 mt-2">
            <a onClick={forgetHandler} href="#ForgotPassword">
              گذرواژه خود را فراموش کرده اید؟
            </a>
          </p>
        </form>
      </div>

      {/* Register Card */}
      <div
        id="signup"
        className="w-full md:w-1/2 bg-white shadow-lg rounded-lg p-8"
      >
        <h1 className="text-3xl font-bold text-right text-gray-800 mb-6">
          عضویت
        </h1>
        <form
          onSubmit={handleSubmitRegister(postdatRegister)}
          className="text-right"
        >
          <div className="field-wrap mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              <span className="text-red-500">*</span>آدرس ایمیل
            </label>
            <input
              {...registerRegister("mobile", {
                required: "The field is empty",
              })}
              autoComplete="off"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-right"
            />
            {registerErrors.mobile && (
              <span className="text-red-500">
                {registerErrors.mobile.message}
              </span>
            )}
          </div>

          <div className="field-wrap mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              <span className="text-red-500">*</span>گذرواژه
            </label>
            <div className="relative">
              <input
                type={showPasswordRegister ? "text" : "password"}
                {...registerRegister("password", {
                  required: "Password is empty",
                  minLength: {
                    value: 4,
                    message: "The minimum password character is 4 digits",
                  },
                })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-right"
              />
              <button
                type="button"
                onClick={togglePasswordVisibilityRegister}
                className="absolute inset-y-0 left-0 px-3 py-2 text-gray-600 focus:outline-none"
              >
                <FontAwesomeIcon
                  icon={showPasswordRegister ? faEyeSlash : faEye}
                />
              </button>
            </div>
            {registerErrors.password && (
              <span className="text-red-500">
                {registerErrors.password.message}
              </span>
            )}
          </div>

          <button
            type="submit"
            disabled={isRegisterSubmitting}
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            {isRegisterSubmitting ? "Loading..." : "عضویت"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
