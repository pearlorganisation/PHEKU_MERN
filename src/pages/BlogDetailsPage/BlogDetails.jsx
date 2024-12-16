import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { getSingleBlog } from "../../features/actions/blogsAction"
import parse from 'html-react-parser';

const BlogDetails = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const { singleBlog } = useSelector((state) => state.blog);

    useEffect(() => {
        dispatch(getSingleBlog(id));
    }, [dispatch, id]);

    if (!singleBlog) {
        return <div>Loading...</div>;
    }

    return (
        <div className="p-6 bg-white shadow-lg rounded-lg lg:w-full mx-auto my-8">
            <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">{singleBlog?.title}</h1>

            <div className="mb-4 text-center">
                <img
                    src={singleBlog?.thumbImage?.secure_url}
                    alt={singleBlog?.title}
                    className="w-full h-64 object-cover rounded-md shadow-sm"
                />
            </div>

            <div className="text-sm text-gray-600 mb-2 text-center">
                <p>Category: <span className="font-medium">{singleBlog?.category?.blogCategoryName || "Uncategorized"}</span></p>
                <p>Published on: {new Date(singleBlog?.publishedAt).toLocaleDateString()}</p>
            </div>

            <div className="prose prose-lg max-w-full mb-6 text-gray-700">
                <p>{parse(singleBlog?.content)}</p>
            </div>

            <div className="text-right text-sm text-gray-500">
                <p>Author: <span className="font-medium">{singleBlog?.author?.email}</span></p>
                <p>Last updated: {new Date(singleBlog?.updatedAt).toLocaleDateString()}</p>
            </div>
        </div>
    );
};


export default BlogDetails