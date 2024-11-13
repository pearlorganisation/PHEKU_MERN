import { createSlice } from "@reduxjs/toolkit";

import { toast } from "sonner";
import { getUniversities, getUniversityById } from "../actions/universitiesAction";

const initialState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
  universities: null,
  universityInfo: null,
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
      })
      .addCase(getUniversityById.pending,(state)=>{
        state.isLoading = true;
      })
      .addCase(getUniversityById.rejected,(state,action)=>{
        state.isLoading = false;
        state.isError= true;
        state.isSuccess = false
        toast.error(action.payload,{ position:"top-right"})
      })
      .addCase(getUniversityById.fulfilled,(state,action)=>{
        state.isLoading= false;
        state.isError = false;
        state.isSuccess = true;
        state.universityInfo = action.payload;
        toast.success("Retreived the university",{ position:"top-right" })
      })
  },
});

export default universitiesSlice.reducer;
