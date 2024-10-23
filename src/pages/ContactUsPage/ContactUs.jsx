import React from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { submitContact } from '../../features/actions/contactAction';
import { resetContactForm } from '../../features/slices/contactSlice';
 
const ContactUs = () => {
  const dispatch = useDispatch();
  const {register , handleSubmit, reset} = useForm()
  const {success} = useSelector((state)=> state.contact)
  const submitForm = async (data)=>{
   dispatch(submitContact(data))  // will submit the contact form later
  }
if(success){
  reset()
  dispatch(resetContactForm())
}
  return (
    <div>
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

        <div className="absolute top-24 left-1/2 transform -translate-x-1/2 bg-white rounded-xl text-black z-20 p-8 w-11/12 md:w-2/3 lg:w-1/2 xl:w-2/3 shadow-lg">
          <h2 className="text-4xl font-semibold text-gray-700 mb-6 mt-4">Send Us a Message</h2>

          <form onSubmit={handleSubmit(submitForm)}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name *</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter Your Name"
                  {...register("name")}
                  className="mt-1 border-2 block w-full shadow-sm text-lg border-gray-300 rounded-md pl-2"
                  required
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  {...register("email")}
                  placeholder="Enter Your Email"
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 border-2  pl-2 block w-full shadow-sm text-lg border-gray-300 rounded-md"
                  required
                />
              </div>

              {/* Message Subject */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Message Subject *</label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  {...register("subject")}
                  placeholder="Enter your Message Subject"
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block pl-2 border-2 w-full shadow-sm text-lg border-gray-300 rounded-md"
                  required
                />
              </div>

              {/* Mobile Number */}
              <div>
                <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">Mobile Number</label>
                <input
                  type="tel"
                  name="mobile"
                  id="mobile"
                  {...register("mobile")}
                  placeholder="Enter your Mobile Number"
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 pl-2 block w-full border-2 shadow-sm text-lg border-gray-300 rounded-md"
                />
              </div>
            </div>

            {/* Message Field */}
            <div className="mt-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Your Message *</label>
              <textarea
                name="message"
                id="message"
                rows="4"
                {...register("message")}
                placeholder="Enter Your Message"
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 pl-2 block w-full border-2 shadow-sm text-lg border-gray-300 rounded-md"
                required
              ></textarea>
            </div>

            {/* Terms and Conditions */}
            <div className="mt-4 flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="terms"
                  name="terms"
                  type="checkbox"
                  className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 pl-2 rounded border-2"
                  required
                />
              </div>
              <div className="ml-2 text-sm">
                <label htmlFor="terms" className="font-medium text-gray-700">
                  I agree to <a href="#" className="text-indigo-600">Terms and Privacy Policy</a>
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <div className="mt-6">
              <button
                type="submit"
                className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Submit
              </button>
            </div>
          </form>
        </div>

        <div className="absolute top-64 bg-white h-96 w-full z-10"></div>
      </div>
    </div>
  );
};

export default ContactUs;
