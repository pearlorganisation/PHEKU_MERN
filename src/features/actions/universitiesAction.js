import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../services/axiosInterceptor";

export const getUniversities = createAsyncThunk(
  "universities/getUniversities",
  async (params, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
        params
      };
      const { data } = await axiosInstance.get(`/api/v1/universities`, config);

      console.log("Universities Data", data);

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
);

export const getUniversityById = createAsyncThunk(
  "university/getSingleUniversity",async(id,{ rejectWithValue})=>{
     try {
      const config ={
        headers:{
          "Content-Type": "application/json"
        }
      }
      const { data } = await axiosInstance.get(`/api/v1/universities/${id}`, config);
      console.log("Single UNIVERSITY", data);
      return data.data;
     } catch (error) {
       if (error.response && error.response.data.message) {
         return rejectWithValue(error.response.data.message);
       } else {
         return rejectWithValue(error.message);
       }
     }
  }
)