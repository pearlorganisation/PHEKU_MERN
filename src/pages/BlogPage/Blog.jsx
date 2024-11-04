import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getBlogs, getRecentBlogs } from '../../features/actions/blogsAction';
import { getCategories } from '../../features/actions/categoriesAction';

const Blog = () => {
    const dispatch = useDispatch();
    const { blogs } = useSelector((state)=>state.blog)
    const { categories } = useSelector((state)=>state.categories)
    const { recentBlogs } = useSelector((state)=>state.blog)

    useEffect(()=>{
        dispatch(getBlogs());
        dispatch(getRecentBlogs())
    },[]);

    useEffect(() => {
        dispatch(getRecentBlogs())
    }, []);

    useEffect(() => {
        dispatch(getCategories());
    }, []);
    console.log(blogs)


    // estimate time helper function
    function estimateReadTime(text) {
        const wordsPerMinute = 200;
        const wordCount = text.split(" ").length;
        const readTimeMinutes = Math.ceil(wordCount / wordsPerMinute);
        return `${readTimeMinutes} min read`;
    }
    return (
        <div className="p-20 grid grid-cols-1 md:grid-cols-3 gap-4"> 
            <div className="md:col-span-2">  
                <div className="grid grid-cols-1 gap-4">
                    {blogs?.map((blog) => (
                        <div key={blog?._id} className="border rounded-lg shadow-md overflow-hidden flex items-center p-4">
                            {/* Image section */}
                            <img
                                src={blog?.thumbImage?.secure_url}
                                alt={blog?.title}
                                className="w-52 h-40 object-cover mr-4"
                            />

                            {/* Text content section */}
                            <div className="flex-1">
                                {/* Category label */}
                                <span className="text-orange-600 font-semibold uppercase text-sm block mb-1">
                                    {blog?.category?.blogCategoryName}
                                </span>

                                {/* Title */}
                                <h3 className="text-xl font-semibold mb-2">{blog?.title}</h3>

                                {/* Description */}
                                <p className="text-gray-700 mb-4">
                                    {blog?.content?.slice(0, 100)} {/* Shortened description */}
                                    {blog?.content?.length > 100 && "..."} {/* Ellipsis if truncated */}
                                </p>

                                {/* Read More button (link to the actual blog post) */}
                                <a
                                    href={`/blog/${blog?.slug}`}  
                                    className="inline-block bg-transparent border border-orange-600 text-orange-600 py-2 px-4 rounded-md hover:bg-orange-600 hover:text-white transition duration-300"
                                >
                                    Read More
                                </a>


                                {/* Social Media Icons */}
                                <div className="mt-4 flex space-x-3 text-gray-600">
                                    <a href="#" aria-label="Facebook" className="hover:text-primary transition duration-300">
                                        <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                                    </a>
                                    <a href="#" aria-label="Twitter" className="hover:text-primary transition duration-300">
                                        <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                                    </a>
                                    <a href="#" aria-label="LinkedIn" className="hover:text-primary transition duration-300">
                                        <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                                    </a>
                                    <a href="#" aria-label="WhatsApp" className="hover:text-primary transition duration-300">
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path></svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div> 
                <div className="border rounded-lg p-4 mb-4">
                    <h4 className="text-lg font-semibold mb-2">Filter by Category</h4>
                     {categories.map((category)=>(
                         <div key={category._id} className="flex items-center mb-2">
                            {/* update this filter to search using params */}
                             <input
                                 type="checkbox"
                                 id={category}
                                 className="mr-2"
                             />
                             <label htmlFor={category}>{category.blogCategoryName}</label>
                         </div>
                     ))}
                </div>

                <div className="border rounded-lg p-4">
                    <h4 className="text-lg font-semibold mb-2">Recent Uploads</h4>
                    <div> 
                        {recentBlogs?.map((post, index) => (
                            <div key={index} className="flex items-center mb-4 border-b pb-4">
                                <img
                                    src={post?.thumbImage?.secure_url}  // Access the image URL correctly
                                    alt={post?.title}
                                    className="w-20 h-16 object-cover mr-4 rounded-md"
                                />
                                <div>
                                    <a
                                        href={`/blog/${post?.slug}`} // Create link based on slug
                                        className="text-lg font-medium hover:underline"
                                    >
                                        {post?.title}
                                    </a>
                                    <div className="text-gray-600 text-sm">
                                        <span>{new Date(post?.publishedAt).toLocaleDateString()}</span> {/* Format date */}
                                        <span className="mx-1">•</span>
                                        <span>{estimateReadTime(post.content)}</span> 
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog
