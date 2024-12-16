import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCourses } from "../../features/actions/coursesAction";
import CurrencyDisplay from "../../components/Currency/CurrencyCode";
import getSymbolFromCurrency from 'currency-symbol-map'

const coursesData = [];

const Courses = () => {
  const { courses } = useSelector((state) => state.course);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCourses());
  }, [dispatch]);
  /** for extracting the map */
  const extractMapSrc = (iframeString) => {
    const srcMatch = iframeString.match(/src="([^"]+)"/);
    return srcMatch ? srcMatch[1] : '';
  };
  console.log(courses, "all courses ");
  return (
    <div className="px-4 py-8 mt-8">  
      <h1 className="text-4xl font-bold text-red-400 text-center mb-8">
        Courses Offered by Universities
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Array.isArray(courses) && courses?.map((course) => (
          <div key={course?._id} className="bg-white rounded-lg shadow-md p-4">
            <h2 className="text-xl font-semibold text-gray-800">{course?.title}</h2>
            <p className="text-gray-600">
              <span className="font-semibold">University:{course?.university?.name}</span>  
            </p>
            <p className="text-gray-600">
              <span className="font-semibold">Duration:</span> {course?.duration?.minDuration} - {course?.duration?.maxDuration} years
            </p>
            <p className="text-gray-600">
              <span className="font-semibold pr-1">Fees:</span> 
              {getSymbolFromCurrency(course?.tutionFees?.currency)} {course?.tutionFees?.amount} 
            </p>
            <div>
              <span className="font-semibold">Level:</span>
              {course?.courseLevel?.level}
            </div>

            
            <div>
              <span className="font-semibold">Specialization:</span>
              {course?.specialization?.name}
            </div>
            {/*------------------Maybe in future needed for exam type ------------------------*/}
            {/* <div>
              <span className="font-semibold">Exam Type:</span>
              {Array.isArray(course) && course?.examType?.map((exam) => (
                <span key={exam?._id} className="ml-2 inline-block bg-gray-200 rounded-full px-2 py-1 text-xs font-semibold text-gray-700 mr-1">
                  {exam?.label}
                </span>
              ))}
            </div> */}
            <div>
              <span className="font-semibold">Location:</span>
              {/* {Array.isArray(course) && course?.location?.map((loc) => (
                <span key={loc?._id} className="ml-2 inline-block bg-gray-200 rounded-full px-2 py-1 text-xs font-semibold text-gray-700 mr-1">
                  {loc?.name}
                </span>
              ))} */}
              <iframe
                src={extractMapSrc(course?.university?.location)}
                width="80%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              ></iframe>            </div>
          </div>
        ))}
      </div>


    </div>
  );
};

export default Courses;
