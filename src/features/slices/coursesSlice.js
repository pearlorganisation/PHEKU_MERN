import { createSlice } from "@reduxjs/toolkit";

import { toast } from "sonner";
import { getCourses } from "../actions/coursesAction";

const initialState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
  courses: null,
  message: null,
};

const coursesSlice = createSlice({
  name: "course",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCourses.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCourses.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload;
        toast.error(action.payload, { position: "top-center" });
      })
      .addCase(getCourses.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.courses = action.payload;
      });
  },
});

export default coursesSlice.reducer;
