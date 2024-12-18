import { createSlice } from "@reduxjs/toolkit";

import { toast } from "sonner";
import { getCourseById, getCourses } from "../actions/coursesAction";

const initialState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
  courses: null,
  message: null,
  singleCourse:{},
  paginate:{}
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
        state.courses = action.payload.data;
        state.paginate = action.payload.metadata

      })
      .addCase(getCourseById.pending,(state)=>{
        state.isLoading = true
        state.isSuccess = false
        state.isError = false
      })
      .addCase(getCourseById.rejected,(state,action)=>{
        state.isLoading = false
        state.isSuccess = false
        state.isError = true
        toast.error(action.payload,{position:"top-right"})
      })
      .addCase(getCourseById.fulfilled,(state,action)=>{
        state.isLoading = false
        state.isSuccess = true
        state.isError=false
        state.singleCourse = action.payload
        toast.success("Course retrived successfully",{position:"top-right"})
      })
  },
});

export default coursesSlice.reducer;
