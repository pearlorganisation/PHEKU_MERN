import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const localURL = "http://localhost:8080/api/v1";

export const getAccomodations = createAsyncThunk(
  "accomodations/getAccomodation",
  async (_, { rejectWithValue }) => {
    try {
      const config = {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.get(`${localURL}/accomodations`, config);

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
