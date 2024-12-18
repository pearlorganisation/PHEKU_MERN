import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUniversityById } from '../../features/actions/universitiesAction';
import { useParams } from 'react-router-dom';
import Spinner from '../../components/Spinner/Spinner';

const UniversityDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams()
  const { universityInfo } = useSelector((state) => state.university)

  useEffect(() => {
    dispatch(getUniversityById(id))
  }, [id, dispatch])

  if (!universityInfo) {
    return (
      // <div className="flex justify-center items-center min-h-screen">
      //   <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-blue-500"></div>

      // </div>
      <Spinner />
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header Section */}
      <div className="relative mb-10">
        {/* Cover Photo */}
        <div className="h-64 w-full overflow-hidden rounded-lg shadow-lg">
          <img
            src={universityInfo?.coverPhoto?.secure_url}
            alt="University Cover"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Logo */}
        <div className="absolute bottom-[-50px] left-1/2 transform -translate-x-1/2 
                        w-32 h-32 rounded-full border-4 border-white shadow-lg">
          <img
            src={universityInfo?.logo?.secure_url}
            alt="University Logo"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
      </div>

      {/* University Name and Basic Info */}
      <div className="text-center mt-16 mb-8">
        <h1 className="text-3xl font-bold text-gray-800">{universityInfo?.name}</h1>
        <div className="flex justify-center space-x-4 mt-2 text-gray-600">
          <span>Established: {universityInfo?.estdYear}</span>
          <span>•</span>
          <span>{universityInfo?.country?.name}</span>
        </div>
      </div>

      {/* Rankings */}
      <div className="flex justify-center mb-8">
        <div className="flex space-x-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">{universityInfo?.ranking?.global}</div>
            <div className="text-sm text-gray-500">Global Ranking</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">{universityInfo?.ranking?.national}</div>
            <div className="text-sm text-gray-500">National Ranking</div>
          </div>
        </div>
      </div>


      {/* University Details Sections */}
      <div className="grid md:grid-cols-3 gap-6 mb-8"> {/* Added margin-bottom */}
        {/* Overview */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">Overview</h2>
          <div dangerouslySetInnerHTML={{ __html: universityInfo?.overview }}
            className="text-gray-600" />
        </div>

        {/* Highlights */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">Highlights</h2>
          <div dangerouslySetInnerHTML={{ __html: universityInfo?.highlights }}
            className="text-gray-600" />
        </div>

        {/* Facilities */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">Facilities</h2>
          <div dangerouslySetInnerHTML={{ __html: universityInfo?.facilities }}
            className="text-gray-600" />
        </div>
      </div>



      {/* Contact Information */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-8"> {/* Combined into single div and added margin */}
        <h2 className="text-xl font-semibold mb-4 text-gray-700">Contact Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6"> {/* Grid for better layout */}
          <div className="space-y-2">
            <p><strong>Email:</strong> {universityInfo?.email}</p>
            <p><strong>Phone:</strong> {universityInfo?.phone}</p>
            <p><strong>Website:</strong> <a
              href={universityInfo?.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              {universityInfo?.website}
            </a></p>
            <p><strong>Address:</strong> {universityInfo?.address}, {universityInfo?.city}, {universityInfo?.state}</p>
          </div>
          {/* Location Map */}
          <div className="overflow-hidden"> {/* Added overflow hidden for map container */}
            <div dangerouslySetInnerHTML={{ __html: universityInfo?.location }} />
          </div>
        </div>

      </div>
    </div>
  )
}

export default UniversityDetails