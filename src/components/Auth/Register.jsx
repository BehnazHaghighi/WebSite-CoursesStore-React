import React from "react";
import { useForm } from "react-hook-form";
import { registerPost } from "../../servises/loginService";

const Register = () => {
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm();

const postdat=async(data)=>{
  const response = await registerPost({
    name:data.name,
    lastName:data.lastName,
    mobile: data.mobile,
    password: data.password,
  });

}

  return (
    <div
      id="signup"
      className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg"
    >
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Sign Up
      </h1>

      <form onSubmit={handleSubmit(postdat)}>
        <div className="top-row flex flex-wrap -mx-2 mb-4">
          <div className="field-wrap w-full sm:w-1/2 px-2 mb-4 sm:mb-0">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              First Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              {...register("name",{required:"Name is empty"})}
              autoComplete="off"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
             {errors.name ? (
            <span className="text-red-500">{errors.name.message}</span>
          ) : (
            ""
          )}
          </div>

          <div className="field-wrap w-full sm:w-1/2 px-2">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Last Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              {...register("lastName",{required:"Last Name is empty"})}
              autoComplete="off"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />

{errors.lastName ? (
            <span className="text-red-500">{errors.lastName.message}</span>
          ) : (
            ""
          )}
          </div>
        </div>

        <div className="field-wrap mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Mobile<span className="text-red-500">*</span>
          </label>
          <input
            {...register("mobile",{required:"Mobile is empty"})}
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
            Set A Password<span className="text-red-500">*</span>
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

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          
          {isSubmitting ? "Loading" : "Register"}
        </button>
      </form>
    </div>
  );
};

export default Register;
