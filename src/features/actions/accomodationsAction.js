import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../services/axiosInterceptor";

export const getAccomodations = createAsyncThunk(
  "accomodations/getAccomodation",
  async (_, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axiosInstance.get(`/api/v1/accomodations`, config);

      console.log("Accomodations Search Data", data);

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

export const getSingleAccomodation = createAsyncThunk(
  "singleAccomodation/get",
  async(id,{ rejectWithValue })=>{
   try {
     const config = {
       headers: {
         "Content-Type": "application/json",
       },
     };
     const {
       data
     } = await axiosInstance.get(`/api/v1/accomodations/${id}`, config);

     console.log("Single Accomodation Search Data", data);
     console.log(data.data);
     return data.data;
   } catch (error) {
    if (error.response && error.response.data.message) {
      return rejectWithValue(error.response.data.message);
    } else {
      return rejectWithValue(error.message);
    }
   }
  })
