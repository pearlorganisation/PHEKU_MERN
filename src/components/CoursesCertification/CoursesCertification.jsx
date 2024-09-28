const specializations = [
  {
    id: 1,
    name: "Digital Marketing",
  },
  {
    id: 2,
    name: "Cyber Security",
  },
  {
    id: 3,
    name: "Artificial Intelligence",
  },
  {
    id: 4,
    name: "Business Analytics",
  },
  {
    id: 5,
    name: "Data Science",
  },
  {
    id: 6,
    name: "Data Analytics",
  },
  {
    id: 7,
    name: "Machine Learning",
  },
  {
    id: 8,
    name: "Blockchain",
  },
  {
    id: 9,
    name: "Full Stack MERN Development",
  },
  {
    id: 10,
    name: "Cloud Computing",
  },
  {
    id: 11,
    name: "AWS",
  },
  {
    id: 12,
    name: "Big Data- Hadoop",
  },
];

const courses = [
  {
    id: 1,
    name: "Online Degree",
  },
  {
    id: 2,
    name: "Online Diploma",
  },
  {
    id: 3,
    name: "Certifications",
  },
  {
    id: 4,
    name: "Short Term Courses",
  },
  {
    id: 5,
    name: "Bootcamps",
  },
  {
    id: 6,
    name: "Free Certifications",
  },
];

const CoursesCertification = () => {
  return (
    <div className="flex flex-col items-center bg-gray-200 justify-center mt-8 mb-4 p-8">
      <h1 className="font-bold text-3xl">Online Courses and Certifications</h1>

      <p className="mt-4 text-gray-600 w-[50%] text-center text-xl">
        We simplify information for you on over30,000 Colleges, 500 exams and
        500 courses across domains and regions all over India.
      </p>

      <div className="mt-6 w-[90%]">
        <div className="flex gap-6 justify-around">
          <div className="grid grid-col-2 w-[100%] gap-6">
            <div className="border-2 border-gray-200 bg-white rounded-xl p-3">
              <div className="flex gap-4 ">
                <img
                  src="https://cnextassets.careers360.com/frontend-common/_react_common/assets/trending-icon.svg"
                  className="w-[40px] h-[40px]"
                />
                <h1>Trending Specializations</h1>
              </div>
              <p className="mt-2 w-[90%]">
                Elevate your skill game with more than 11000 Courses from 470+
                Specializations
              </p>

              <div className="grid grid-cols-3 gap-2 mt-2">
                {specializations.map((exam) => (
                  <div
                    key={exam.id}
                    className="border-gray-300 border-2 rounded-full hover:bg-blue-600 max-w-min p-1"
                  >
                    <h2 className=" text-black text-xs font-medium me-2  rounded-full p-2 hover:text-white w-max">
                      {exam.name}
                    </h2>
                  </div>
                ))}
              </div>

              <button className="text-blue-700 underline mt-2 text-sm">
                View All{" "}
              </button>
            </div>
            <div className="border-2 border-gray-200 bg-white rounded-xl p-3">
              <div className="flex gap-4 ">
                <img
                  src="https://cnextassets.careers360.com/frontend-common/_react_common/assets/trending_icon.svg"
                  className="w-[40px] h-[40px]"
                />
                <h1>Trending Courses</h1>
              </div>
              <p className="mt-2 w-[90%]">
                Gain Professional expertise with online courses to amplify your
                employbility
              </p>

              <div className="grid grid-cols-3 gap-2 mt-2">
                {courses.map((course) => (
                  <div
                    key={course.id}
                    className="border-gray-300 border-2 rounded-full hover:bg-blue-600 max-w-min p-1"
                  >
                    <h2 className=" text-black text-xs font-medium me-2  rounded-full p-2 hover:text-white w-max">
                      {course.name}
                    </h2>
                  </div>
                ))}
              </div>

              <button className="text-blue-700 underline mt-2 text-sm">
                View All
              </button>
            </div>
          </div>

          <img
            src="https://cnextassets.careers360.com/frontend-common/_react_common/assets/certification.svg"
            className="w-[80%] h-[80%]"
          />
        </div>
      </div>
    </div>
  );
};

export default CoursesCertification;
