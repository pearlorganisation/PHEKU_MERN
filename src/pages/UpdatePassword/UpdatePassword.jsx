import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { updatePassword } from "../../features/actions/userAction";

const UpdatePassword = () => {
  const dispatch = useDispatch();
  const { isSuccess } = useSelector((state) => state.user);
  const { isUserLoggedIn } = useSelector((state) => state.auth);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm();

  const submitForm = (data) => {
    dispatch(updatePassword(data));
  };
  const newPassword = watch("newPassword");
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        {isUserLoggedIn ? (
          <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
            <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
              Change Password
            </h2>
            <form onSubmit={handleSubmit(submitForm)} className="space-y-4">
              <div className="form-group">
                <label className="block text-sm font-medium text-gray-700">
                  Current Password
                </label>
                <input
                  type="password"
                  {...register("currentPassword", {
                    required: "Current password is required",
                  })}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
                {errors.currentPassword && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.currentPassword.message}
                  </p>
                )}
              </div>

              <div className="form-group">
                <label className="block text-sm font-medium text-gray-700">
                  New Password
                </label>
                <input
                  type="password"
                  {...register("newPassword", {
                    required: "New password is required",
                    minLength: {
                      value: 8,
                      message: "Password must be at least 8 characters",
                    },
                  })}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
                {errors.newPassword && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.newPassword.message}
                  </p>
                )}
              </div>

              <div className="form-group">
                <label className="block text-sm font-medium text-gray-700">
                  Confirm New Password
                </label>
                <input
                  type="password"
                  {...register("confirmNewPassword", {
                    required: "Please confirm your new password",
                    validate: (value) =>
                      value === newPassword || "Passwords do not match",
                  })}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
                {errors.confirmNewPassword && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.confirmNewPassword.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="w-full py-2 px-4 bg-indigo-600 text-white rounded-md font-medium shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                Change Password
              </button>
            </form>
          </div>
        ) : (
          <>
            <div>You Are Not Logged in</div>
          </>
        )}
      </div>
    </>
  );
};

export default UpdatePassword;
