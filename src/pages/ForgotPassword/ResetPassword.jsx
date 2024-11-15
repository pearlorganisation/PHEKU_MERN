import React from 'react'
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom'
import axios from "axios";
import {
    axiosInstance
} from "../../services/axiosInterceptor";
 import { toast } from "sonner";


const ResetPassword = () => {
    const  { resetToken }  = useParams();
    const { register, handleSubmit} = useForm()

    const submitForm = async (data) => {
        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };
        try {
            const res = await axiosInstance.post(
                `/api/v1/users/reset/${resetToken}`,{ newPassword: data.password },
                config
            );
            // Handle success
            toast.success("Password reset successfully");
            // console.log("Password reset response:", res.data); // or redirect the user if necessary
        } catch (error) {
            // Handle error
            toast.error(error.response?.data?.message || "Failed to reset password");
            // console.error("Password reset error:", error);
        }
    };
  return (
      <> <div className='flex items-center justify-center min-h-screen bg-gray-100'>
          <div className='bg-white shadow-lg rounded-lg p-8 w-full max-w-md'>
              <h2 className='text-2xl font-bold mb-6 text-center text-gray-800'>Reset Password</h2>
              <form onSubmit={handleSubmit(submitForm)} className='flex flex-col space-y-4'>
                  <div className='flex flex-col'>
                      <label className='text-gray-700 font-medium'>New Password</label>
                      <input
                          type='password'
                          required
                          placeholder='Enter Email'
                          {...register("password")}
                          className='border rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-indigo-500'
                      />
                  </div>
                  <button
                      type='submit'
                      className='bg-indigo-500 text-white py-2 rounded-lg hover:bg-indigo-600 transition'>
                      Reset Password
                  </button>
              </form>
          </div>
      </div></>
  )
}

export default ResetPassword