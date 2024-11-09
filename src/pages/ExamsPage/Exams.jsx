import React, { useEffect, useState } from "react";
import { getExams } from "../../features/actions/examsAction";
import { useDispatch, useSelector } from "react-redux";
 

const Exams = () => {
  const { exams } = useSelector((state) => state.exam);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getExams());
  }, []);

  console.log(exams, "all exams ");
  return (
    <div className="px-16 py-4 mt-8">
      <h1 className="text-4xl font-bold text-red-400 text-center">
        Entrance exams
      </h1>
      <ExamsGrid examsData={ exams} />
    </div>
  );
};

 

const ExamsGrid = ({ examsData }) => {
  const [expandedExams, setExpandedExams] = useState(false); // managing show more and less

  const toggleExpand = (id) => {
    setExpandedExams((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-2">
      {examsData?.map((exam) => (
        <div
          key={exam?._id}
          className="bg-gray-100 rounded-lg shadow-md overflow-hidden"
        >
          <img
            src={exam?.imagePath} // Dynamic image URL
            alt={exam?.title || 'Exam Image'}
            className="w-full h-64 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">{exam?.title}</h2>
            <p className="text-gray-600 mb-1">
              <i className="fas fa-map-marker-alt mr-2"></i>
              {exam?.location || 'Location not specified'}
            </p>
            <p className="text-gray-600 mb-1">{exam?.duration || 'Duration not specified'}</p>
            <button
              onClick={() => toggleExpand(exam?._id)}
              className="text-blue-500 mt-2"
            >
              {expandedExams[exam?._id] ? 'Show Less' : 'Show More'}
            </button>
            {expandedExams[exam?._id] && (
              <div className="mt-2 text-gray-700">
                <p><strong>Course:</strong> {exam?.course || 'N/A'}</p>
                <p><strong>Date:</strong> {exam?.date ? new Date(exam.date).toLocaleString() : 'N/A'}</p>
                <p><strong>Invigilator:</strong> {exam?.invigilator || 'N/A'}</p>
                <p><strong>Instructions:</strong> {exam?.instructions || 'N/A'}</p>
                <p><strong>Description:</strong> {exam?.description || 'N/A'}</p>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Exams;
