import { createSlice } from "@reduxjs/toolkit";

import { toast } from "sonner";
import { getUniversities } from "../actions/universitiesAction";

const initialState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
  universities: null,
  message: null,
};

const universitiesSlice = createSlice({
  name: "university",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUniversities.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUniversities.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload;
        toast.error(action.payload, { position: "top-center" });
      })
      .addCase(getUniversities.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.universities = action.payload;
      });
  },
});

export default universitiesSlice.reducer;
