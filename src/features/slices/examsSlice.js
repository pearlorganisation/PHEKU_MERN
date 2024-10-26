import { createSlice } from "@reduxjs/toolkit";

import { toast } from "sonner";
import { getExams } from "../actions/examsAction";

const initialState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
  exams: null,
  message: null,
};

const examsSlice = createSlice({
  name: "exam",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getExams.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getExams.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload;
        toast.error(action.payload, { position: "top-center" });
      })
      .addCase(getExams.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.exams = action.payload;
      });
  },
});

export default examsSlice.reducer;
