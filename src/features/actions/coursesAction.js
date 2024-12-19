import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../services/axiosInterceptor";

export const getCourses = createAsyncThunk(
  "courses/getCourses",
  async ({country,page=1}, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axiosInstance.get(`/api/v1/courses?page=${page}&countryId=${country}`, config);

      console.log("Courses Data", data);

      return data;
    } catch (error) {
      // return custom error message from backend if present
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

/**get course by id */
export const getCourseById = createAsyncThunk(
  "get/courseById",async(id,{rejectWithValue})=>{
    try {
      const config = {
        headers:{
          "Content-type":"application/json"
        }
      }
      const {
        data
      } = await axiosInstance.get(`/api/v1/courses/${id}`,config)
      return data.data
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
)