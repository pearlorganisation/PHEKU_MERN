import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../services/axiosInterceptor";

export const getCategories = createAsyncThunk("blogs/getCategories",
    async(_,{ rejectWithValue })=>{
             try {
                 const config = {
                     headers: {
                         "Content-Type": "application/json",
                     },
                 };
                 const {
                     data
                 } = await axiosInstance.get(`/api/v1/blogs/categories?noPagination=true`, config);

                 console.log("Categories data", data);

                 return data.data;
             } catch (error) {
                 // return custom error message from backend if present
                 if (error.response && error.response.data.message) {
                     return rejectWithValue(error.response.data.message);
                 } else {
                     return rejectWithValue(error.message);
                 }
             }
    }
)