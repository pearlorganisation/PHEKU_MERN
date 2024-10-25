import React, { useRef } from 'react'
import { useDispatch } from 'react-redux';
import { getUserProfile, updateUserProfile } from '../../features/actions/userAction';

const UpdateUser = ({ fullName, email, mobileNumber, handleEdit}) => {
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const mobileNumberRef = useRef(null);
    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const updatedName = nameRef.current.value;
        const updatedEmail = emailRef.current.value;
        const updatedMobileNumber = mobileNumberRef.current.value;

        // Dispatch the updateUserProfile action
        dispatch(updateUserProfile({
            fullName: updatedName,
            email: updatedEmail,
            mobileNumber: updatedMobileNumber,
        }))
            .then(() => {

                console.log('Profile updated successfully');
                dispatch(getUserProfile());
                handleEdit(); // Close the modal
            })
            .catch((error) => {
                console.error('Error while updating profile:', error);
            });
        }
  return (
      <div className="fixed inset-0 z-20 flex items-center justify-center bg-gray-800 bg-opacity-75">
          <div className="bg-white w-full max-w-xl mx-auto p-12 rounded-lg shadow-xl relative">
              <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Update Profile</h2>
              <form onSubmit={handleSubmit}>
                  <div className="mb-6">
                      <label htmlFor="fullName" className="block text-base font-medium text-gray-700 mb-2">
                          Name
                      </label>
                      <input
                          type="text"
                          id="fullName"
                          defaultValue={fullName}
                          ref={nameRef}
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-gray-700 text-lg"
                          required
                      />
                  </div>

                  <div className="mb-6">
                      <label htmlFor="email" className="block text-base font-medium text-gray-700 mb-2">
                          Email
                      </label>
                      <input
                          type="email"
                          id="email"
                          defaultValue={email}
                          ref={emailRef}
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-gray-700 text-lg"
                          required
                      />
                  </div>

                  <div className="mb-8">
                      <label htmlFor="mobileNumber" className="block text-base font-medium text-gray-700 mb-2">
                          Mobile Number
                      </label>
                      <input
                          type="text"
                          id="mobileNumber"
                          defaultValue={mobileNumber}
                          ref={mobileNumberRef}
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-gray-700 text-lg"
                          required
                      />
                  </div>

                  <div className="flex justify-between space-x-4">
                      <button
                          type="submit"
                          className="w-full bg-teal-500 text-white py-3 px-6 rounded-md hover:bg-teal-600 transition duration-300 font-medium text-lg"
                      >
                          Save Changes
                      </button>
                      <button
                          type="button"
                          onClick={handleEdit}
                          className="w-full bg-gray-300 text-gray-700 py-3 px-6 rounded-md hover:bg-gray-400 transition duration-300 font-medium text-lg"
                      >
                          Cancel
                      </button>
                  </div>
              </form>
          </div>
      </div>
  )
}

export default UpdateUser