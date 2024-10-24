import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import { registerUser } from "../../../features/actions/authAction";

const SignUp = () => {
  const { isLoading, isSuccess } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const navigate = useNavigate();

  const submitForm = async (info) => {
    dispatch(registerUser(info));

    if (isSuccess) {
      navigate("/login");
    }
  };
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
      <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYDzrcR76JDFjYJComkIbHIv6eMK2ZRPvUpw&s"
              className="w-mx-auto"
            />
          </div>
          <div className="mt-12 flex flex-col items-center">
            <div className="w-full flex-1 mt-8">
              <form
                onSubmit={handleSubmit(submitForm)}
                className="mx-auto max-w-xs"
              >
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="text"
                  placeholder="Full Name"
                  {...register("fullName")}
                />
                <input
                  className="w-full  px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  type="text"
                  placeholder="Mobile"
                  {...register("mobileNumber")}
                />
                <input
                  className="w-full px-8 py-4 mt-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="email"
                  placeholder="Email"
                  {...register("email")}
                />
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  type="password"
                  placeholder="Password"
                  {...register("password")}
                />
                <button
                  type="submit"
                  disabled={isLoading}
                  className="mt-5 tracking-wide font-semibold bg-green-400 text-white-500 w-full py-4 rounded-lg hover:bg-green-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                >
                  {isLoading ? (
                    <ClipLoader />
                  ) : (
                    <span className="">Register</span>
                  )}
                </button>
                <p className="mt-6 text-xs text-gray-600 text-center">
                  I agree to abide by PHEKU
                  <a
                    href="#"
                    className="border-b border-gray-500 border-dotted ml-2 mr-2"
                  >
                    Terms of Service
                  </a>
                  and its
                  <a
                    href="#"
                    className="border-b border-gray-500 border-dotted ml-2 mr-2"
                  >
                    Privacy Policy
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
        <div className="flex-1 bg-green-100 text-center hidden lg:flex">
          <div
            className="m-12 xl:m-16 w-full bg-cover bg-center bg-no-repeat"
            style={{
              background:
                "url('https://t4.ftcdn.net/jpg/05/65/20/27/360_F_565202786_towUjm2KMittPXHT7yF7H4SFPAxv0xjD.jpg')",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
