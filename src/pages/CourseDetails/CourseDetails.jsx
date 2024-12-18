import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getCourseById } from '../../features/actions/coursesAction';

const CourseDetails = () => {
    const dispatch = useDispatch()
    const { id } = useParams()
    const { singleCourse } = useSelector((state) => state.course);

    useEffect(() => {
        dispatch(getCourseById(id))
    }, [dispatch, id])

    if (!singleCourse) {
        return <div className="container mx-auto p-4">Loading...</div>
    }

    return (
        <div className="container mx-auto p-6 bg-gray-50 min-h-screen">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                {/* Course Header */}
                <div className="bg-blue-600 text-white p-6">
                    <h1 className="text-3xl font-bold">{singleCourse.name}</h1>
                 </div>

                {/* Course Details Grid */}
                <div className="grid md:grid-cols-2 gap-6 p-6">
                    {/* Left Column */}
                    <div>
                        <h2 className="text-xl font-semibold mb-4 text-gray-800">Course Information</h2>
                        <div className="space-y-3">
                            <div className="flex justify-between border-b pb-2">
                                <span className="text-gray-600">Duration:</span>
                                <span className="font-medium">{singleCourse.duration} Months</span>
                            </div>
                            <div className="flex justify-between border-b pb-2">
                                <span className="text-gray-600">Course Level:</span>
                                <span className="font-medium">{singleCourse.courseLevel}</span>
                            </div>
                            <div className="flex justify-between border-b pb-2">
                                <span className="text-gray-600">Specialization:</span>
                                <span className="font-medium">{singleCourse.specialization}</span>
                            </div>
                            <div className="flex justify-between border-b pb-2">
                                <span className="text-gray-600">Tuition Fees:</span>
                                <span className="font-medium">
                                    {singleCourse.tutionFees.amount} {singleCourse.tutionFees.currency}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div>
                        <h2 className="text-xl font-semibold mb-4 text-gray-800">Description</h2>
                        <div
                            className="text-gray-700 leading-relaxed"
                            dangerouslySetInnerHTML={{ __html: singleCourse.description }}
                        />
                    </div>
                </div>

                
            </div>
        </div>
    )
}

export default CourseDetails