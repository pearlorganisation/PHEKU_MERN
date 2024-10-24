import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {
    const { userInfo } = useSelector((state) => state.user);
    const { fullName, email, mobileNumber, role } = userInfo;
    const [editingProfile, setEditingProfile] = useState(false);
    const [editedFullName, setEditedFullName] = useState(fullName);
    const [editedMobileNumber, setEditedMobileNumber] = useState(mobileNumber);
    const [editedEmail, setEditedEmail] = useState(email);


    const handleEditProfile = () => {
        setEditingProfile(true);
    }

    const handleSaveProfile = () => {
        
        console.log("Saving profile:", {
            fullName: editedFullName,
            mobileNumber: editedMobileNumber,
            email: editedEmail,
        });
        setEditingProfile(false);
         
    }

    const handleCancelEdit = () => {
        setEditingProfile(false);
        setEditedFullName(fullName);
        setEditedMobileNumber(mobileNumber);
        setEditedEmail(email);
    }



    return (
        <div className="flex flex-col lg:flex-row p-4">  
            <div className="lg:w-1/4 w-full bg-gray-100 p-4 rounded-lg"> 
                <h2 className="text-xl font-semibold mb-4">Hello {fullName}</h2>
                <div className="border-b border-gray-300 mb-4">
                    <img src="832.jpg"
                    alt='profile'
                        width={200}
                        height={180}
                        className=''
                    /> 
                </div>
               
            </div>



            <div className="lg:w-3/4 w-full lg:pl-4">  
                <div className="bg-white p-8 rounded-lg shadow-2xl">
                    <div className='flex justify-between items-center mb-6'>
                        <h2 className="text-xl font-semibold">Your Profile</h2>
                        {editingProfile ? (
                            <div>
                                <button onClick={handleSaveProfile} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">Save</button>
                                <button onClick={handleCancelEdit} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">Cancel</button>
                            </div>
                        ) : (
                            <button onClick={handleEditProfile} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Edit Profile</button>
                        )}

                    </div>

                    <div>
                        <div className="mb-4">
                            <label htmlFor="given-name" className="block text-sm font-medium text-gray-700">Name</label>
                            <input type="text"
                                value={editingProfile ? editedFullName : fullName}
                                id="given-name"
                                name="given-name"
                                onChange={(e) => setEditedFullName(e.target.value)}
                                disabled={!editingProfile}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm h-12"
                            />
                        </div>


                        <div className="mb-4">
                            <label htmlFor="mobile-number" className="block text-sm font-medium text-gray-700">Mobile Number</label>
                            <div className="flex mt-1">
                                <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">🇮🇳 +91</span>
                                <input type="text"
                                    value={editingProfile ? editedMobileNumber : mobileNumber}
                                    id="mobile-number"
                                    name="mobile-number"
                                    onChange={(e) => setEditedMobileNumber(e.target.value)}
                                    disabled={!editingProfile}

                                    className="block w-full px-3 py-2 border border-gray-300 rounded-r-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm h-12"
                                />
                            </div>
                        </div>

                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={editingProfile ? editedEmail : email}
                                onChange={(e) => setEditedEmail(e.target.value)}
                                disabled={!editingProfile}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm h-12"
                            />
                        </div>

                       
                        <div className="mb-4">
                            <label htmlFor="role" className="block text-sm font-medium text-gray-700">Role</label>
                            <input type="text" id="role" value={role} name="role" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm h-12" disabled />
                        </div>
                    </div>
                </div>
                
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