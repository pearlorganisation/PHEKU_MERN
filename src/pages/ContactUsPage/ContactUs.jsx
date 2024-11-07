import React from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { submitContact } from '../../features/actions/contactAction';
import { resetContactForm } from '../../features/slices/contactSlice';
 
const ContactUs = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, reset, formState: { errors },
} = useForm()
  const {success} = useSelector((state)=> state.contact)
  const submitForm = async (data)=>{
   dispatch(submitContact(data))
  }
if(success){
  reset()
  dispatch(resetContactForm())
}
  return (
    <div className="relative">
      <div
        className="h-96 flex flex-col justify-center items-start"
        style={{
          backgroundImage: `url('/eduction-background.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
      </div>

      <div className="absolute top-20 left-1/2 transform -translate-x-1/2 bg-white/95 backdrop-blur-sm rounded-2xl text-black z-20 p-10 w-11/12 md:w-2/3 lg:w-1/2 xl:w-2/3 shadow-2xl border border-white/20">
        <div className="text-center">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-8 mt-2 inline-block">Send Us a Message</h2>
        </div>

        <form onSubmit={handleSubmit(submitForm)}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Name Field */}
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-semibold text-gray-700">Name *</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter Your Name"
                {...register("name")}
                className="mt-1 block w-full px-4 py-3.5 text-gray-700 bg-gray-50/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition duration-200 ease-in-out hover:bg-gray-50/80"
                required
              />
            </div>

            {/* Email Field */}
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700">Email Address *</label>
              <input
                type="email"
                name="email"
                id="email"
                {...register("email", {
                  required: true,
                  pattern:
                    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                })}
                placeholder="Enter Your Email"
                className="mt-1 block w-full px-4 py-3.5 text-gray-700 bg-gray-50/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition duration-200 ease-in-out hover:bg-gray-50/80"
                required
              />
              {errors.email && <p>Please check the Email</p>}
            </div>

            {/* Message Subject */}
            <div className="space-y-2">
              <label htmlFor="subject" className="block text-sm font-semibold text-gray-700">Message Subject *</label>
              <input
                type="text"
                name="subject"
                id="subject"
                {...register("subject")}
                placeholder="Enter your Message Subject"
                className="mt-1 block w-full px-4 py-3.5 text-gray-700 bg-gray-50/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition duration-200 ease-in-out hover:bg-gray-50/80"
                required
              />
            </div>

            {/* Mobile Number */}
            <div className="space-y-2">
              <label htmlFor="mobile" className="block text-sm font-semibold text-gray-700">Mobile Number</label>
              <input
                type="tel"
                name="mobile"
                id="mobile"
                {...register("mobile")}
                placeholder="Enter your Mobile Number"
                className="mt-1 block w-full px-4 py-3.5 text-gray-700 bg-gray-50/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition duration-200 ease-in-out hover:bg-gray-50/80"
              />
            </div>
          </div>

          {/* Message Field */}
          <div className="mt-8 space-y-2">
            <label htmlFor="message" className="block text-sm font-semibold text-gray-700">Your Message *</label>
            <textarea
              name="message"
              id="message"
              rows="5"
              {...register("message")}
              placeholder="Enter Your Message"
              className="mt-1 block w-full px-4 py-3.5 text-gray-700 bg-gray-50/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition duration-200 ease-in-out hover:bg-gray-50/80 resize-none"
              required
            ></textarea>
          </div>

          {/* Terms and Conditions */}
          <div className="mt-6 flex items-start">
            <div className="flex items-center h-5">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                className="h-4 w-4 text-violet-600 border-gray-300 rounded focus:ring-violet-500 transition duration-200 ease-in-out"
                required
              />
            </div>
            <div className="ml-3">
              <label htmlFor="terms" className="text-sm text-gray-600">
                I agree to the{' '}
                <a href="#" className="font-medium text-violet-600 hover:text-violet-500 transition duration-200 ease-in-out">
                  Terms of Service
                </a>
                {' '}and{' '}
                <a href="#" className="font-medium text-violet-600 hover:text-violet-500 transition duration-200 ease-in-out">
                  Privacy Policy
                </a>
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-8">
            <button
              type="submit"
              className="w-full py-4 px-6 text-white bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 rounded-xl font-semibold shadow-lg transform hover:translate-y-[-2px] transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      <div className="relative top-64 bg-gray-50 h-80 w-full z-10"></div>
    </div>
  );
};

export default ContactUs;


/**
 *  <div
          className="h-96 flex flex-col justify-center items-start"
          style={{
            backgroundImage: `url('/eduction-background.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
        </div>
 */