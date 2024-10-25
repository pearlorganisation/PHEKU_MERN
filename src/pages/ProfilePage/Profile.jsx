import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import UpdateUser from '../../components/UpdateUserModal/UpdateUser';

const Profile = () => {
    const { userInfo } = useSelector((state) => state.user);
    const { fullName, email, mobileNumber, role } = userInfo;
    // for updateProflie
    const [edit, setEdit] = useState(false)
    const handleEdit = () => {
        setEdit(!edit);
    }

    return (
        <div className="flex flex-col lg:flex-row p-4">  
            <div className="lg:w-1/4 w-full bg-orange-100 border-purple-200 border-2 p-4 rounded-lg"> 
                <h2 className="text-xl font-semibold mb-4 text-center">Hello {fullName}</h2>
                <div className=" mb-4 flex justify-center items-center">
                    <img src="https://img.freepik.com/premium-photo/stylish-man-flat-vector-profile-picture-ai-generated_606187-310.jpg?semt=ais_hybrid"
                    alt='profile'
                        width={200}
                        height={180}
                        className='rounded-full'
                    /> 
                </div>
               
            </div>



            <div className="lg:w-3/4 w-full lg:pl-4">  
                <div className="bg-white p-8 rounded-lg shadow-2xl">
                    <div className='flex justify-between items-center mb-6'>
                        <h2 className="text-xl font-semibold">Your Profile</h2>
                        <button className='bg-blue-200 rounded p-2' onClick={handleEdit}>Update Profile</button>

                    </div>

                    <div>
                        <div className="mb-4">
                            <label for="given-name" className="block text-sm font-medium text-gray-700">Name</label>
                            <input type="text" value={fullName} id="given-name" name="given-name" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm h-12"
                                // onChange={(e)=>setUserName(e.target.value)}
                                disabled />
                        </div>


                        <div className="mb-4">
                            <label for="given-name" className="block text-sm font-medium text-gray-700">Email</label>
                            <input type="text" value={email} id="given-name" name="given-name" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm h-12"
                                // onChange={(e)=>setUserName(e.target.value)}
                                disabled />
                        </div>

                        <div className="mb-4">
                            <label for="given-name" className="block text-sm font-medium text-gray-700">Mobile Number</label>
                            <input type="text" value={mobileNumber} id="given-name" name="given-name" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm h-12"
                                // onChange={(e)=>setUserName(e.target.value)}
                                disabled />
                        </div>

                        <div className="mb-4">
                            <label for="given-name" className="block text-sm font-medium text-gray-700">Role</label>
                            <input type="text" value={role} id="given-name" name="given-name" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm h-12"
                                // onChange={(e)=>setUserName(e.target.value)}
                                disabled />
                        </div>
                    </div>
                </div>
                {/* Modal */}
                {edit && (
                    <UpdateUser fullName={fullName} email={email} mobileNumber={mobileNumber}   handleEdit={handleEdit} />
                )}
                <EducationSummary />
                <TestScores />
            </div>
        </div>

    );
}


 
const EducationSummary = () => {
    return (
        <div className="bg-white p-8 rounded-lg shadow-2xl mt-4">
            <h2 className="text-xl font-semibold mb-4">Education Summary</h2>
          
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add Education</button>
        </div>
    );
}

 
const TestScores = () => {
    return (
        <div className="bg-white p-8 rounded-lg shadow-2xl mt-4">
            <h2 className="text-xl font-semibold mb-4">Test Scores</h2>
           
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add Test Score</button>
        </div>
    );
}


export default Profile;



{/* Modal
          {edit && (
              <UpdateModal email={email} mobileNumber={mobileNumber} name={name} handleEdit={handleEdit} />
          )} */}


{/* 
<div className='flex justify-between'>
    <button onClick={handleEdit} className="w-full bg-black hover:bg-blue-900 text-white h-14 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 text-2xl font-serif">
        Edit Profile
    </button>


</div> */}