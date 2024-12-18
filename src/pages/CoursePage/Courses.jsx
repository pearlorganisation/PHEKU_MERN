import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCourses } from "../../features/actions/coursesAction";
import CurrencyDisplay from "../../components/Currency/CurrencyCode";
import getSymbolFromCurrency from 'currency-symbol-map'
import { Link } from "react-router-dom";
import Pagination from "../../components/Pagination/Pagination";

const coursesData = [];

const Courses = () => {
  const { courses ,paginate} = useSelector((state) => state.course);
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1)
  const total_pages = Math.ceil(paginate?.total/ paginate?.limit)
  console.log('------total pages', total_pages)
  const handlePage =(page)=>{
    if(page>0 && page<total_pages){
      setCurrentPage(page)
    }
  }

  useEffect(() => {
    dispatch(getCourses({
      page:currentPage
    }));
  }, [dispatch, currentPage]);
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-8 my-8"> {/* Increased gap and added margin-top */}
        {Array.isArray(courses) && courses?.map((course) => (
          <Link to={`/course/${course?._id}`}>
            <div key={course?._id} className="bg-gray-200 rounded-lg shadow-md p-8"> {/* Increased padding */}
              <div className="mb-4"> {/* Added margin-bottom */}
                <h2 className="text-2xl font-semibold text-gray-800">{course?.name}</h2>
                <p className="text-gray-600 mt-2"> {/* Added margin-top */}
                  <span className="font-semibold">University:</span> {course?.university?.name}
                </p>
              </div>

              <div className="mb-2"> {/* Added margin-bottom and grouped related items */}
                <p className="text-gray-600">
                  <span className="font-semibold">Duration:</span> {course?.duration?.minDuration} - {course?.duration?.maxDuration} years
                </p>
                <p className="text-gray-600 mt-1"> {/* Added margin-top */}
                  <span className="font-semibold pr-1">Fees:</span>
                  {getSymbolFromCurrency(course?.tutionFees?.currency)} {course.tutionFees?.amount}
                </p>
              </div>

              <div className="mb-2"> {/* Added margin-bottom and grouped related items */}
                <p className="text-gray-600"> {/* Use consistent <p> tags */}
                  <span className="font-semibold">Level:</span> {course?.courseLevel?.level}
                </p>
                <p className="text-gray-600 mt-1"> {/* Added margin-top */}
                  <span className="font-semibold">Specialization:</span> {course?.specialization?.name}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <Pagination paginate={paginate} currentPage={currentPage} totalPages={total_pages} handlePageClick={handlePage} />
    </div>
  );
};

export default Courses;
