import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../services/axiosInterceptor";


export const getBlogs = createAsyncThunk(
    "blogs/getBlogs",async(_,{ rejectWithValue })=>{
        try {
            const config = {
                headers: {
                    "Content-Type": "application/json",
                },
            };
            const {
                data
            } = await axiosInstance.get(`/api/v1/blogs`, config);

            console.log("Blogs Data", data);

            return data.data;
        } catch (error) {
             // return custom error message from backend if present
             if (error.response && error.response.data.message) {
                 return rejectWithValue(error.response.data.message);
             } else {
                 return rejectWithValue(error.message);
             }
        }
    })