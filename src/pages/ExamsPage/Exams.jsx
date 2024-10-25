import React, { useEffect } from "react";
import { getExams } from "../../features/actions/examsAction";
import { useDispatch, useSelector } from "react-redux";
const examsData = [
  {
    title: "TOEFL iBT",
    course: "International Studies Admission",
    imagePath: "/toefl.jpg",
    description: "Test of English as a Foreign Language - Internet-based Test",
    date: new Date("2024-03-20T09:00:00"),
    duration: "4 hours",
    location: "Authorized Test Center - City A",
    invigilator: "Test Center Staff",
    instructions: "Bring your passport and confirmation email.",
  },
  {
    title: "IELTS Academic",
    course: "University Entrance Exam",
    imagePath: "/ielt.jpg",
    description:
      "International English Language Testing System - Academic Module",
    date: new Date("2024-04-12T14:00:00"),
    duration: "2 hours 45 minutes",
    location: "Authorized Test Center - City B",
    invigilator: "Test Center Staff",
    instructions:
      "Bring your passport and confirmation email.  No electronic devices allowed.",
  },
  {
    title: "SAT",
    course: "University Admission",
    imagePath: "/sat.jpg",
    description: "Scholastic Assessment Test",
    date: new Date("2024-05-08T08:00:00"),
    duration: "3 hours",
    location: "Designated Test Center - City C",
    invigilator: "Test Center Staff",
    instructions: "Bring approved calculator, pencils, and admission ticket.",
  },
  {
    title: "ACT",
    course: "College Admissions",
    imagePath: "/act.jpg",
    description: "American College Testing",
    date: new Date("2024-06-15T08:00:00"),
    duration: "3 hours 30 minutes",
    location: "Designated Test Center - City D",
    invigilator: "Test Center Staff",
    instructions: "Bring approved calculator, pencils, and admission ticket.",
  },
  {
    title: "GRE General Test",
    course: "Graduate School Admissions",
    imagePath: "/gre.jpg",
    description: "Graduate Record Examinations - General Test",
    date: new Date("2024-07-22T10:00:00"),
    duration: "3 hours 45 minutes",
    location: "Prometric Test Center - City E",
    invigilator: "Test Center Staff",
    instructions: "Bring your passport and confirmation email.",
  },
];

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
      <ExamsGrid />
    </div>
  );
};

export default Exams;

const ExamsGrid = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-2">
      {examsData.map((exam) => (
        <div
          key={exam.title}
          className="bg-gray-100 rounded-lg h-96 shadow-md overflow-hidden"
        >
          <img
            src={exam.imagePath} // Dynamic image URL
            alt={exam.title}
            className="w-full h-64 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">{exam.title}</h2>
            <p className="text-gray-600 mb-1">
              <i className="fas fa-map-marker-alt mr-2"></i>
              {exam.location}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
