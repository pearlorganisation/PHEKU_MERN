import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCourses } from "../../features/actions/coursesAction";

const coursesData = [];

const Courses = () => {
  const { courses } = useSelector((state) => state.course);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCourses());
  }, []);

  console.log(courses, "all courses ");
  return (
    <div className="px-16 py-4 mt-8">
      <h1 className="text-4xl font-bold text-red-400 text-center">
        Courses Offered by Universities
      </h1>
    </div>
  );
};

export default Courses;
