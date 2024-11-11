import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../services/axiosInterceptor";

<<<<<<< HEAD
export const getCountries = createAsyncThunk(
  "countries/getCountries",
  async (_, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axiosInstance.get(`/api/v1/countries`, config);
=======
export const getCountries = createAsyncThunk("countries/getCountries",async(params,{rejectWithValue })=>{
    try{
        const config = {
            headers:{
                "Content-Type": "application/json",
            },
            params
        };
        const {
            data
        } = await axiosInstance.get(`/api/v1/countries`, config);
>>>>>>> 05c84004369d51fbb2e0bcd482f749f334e8233a

      console.log("countries Data", data);

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
