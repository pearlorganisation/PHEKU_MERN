import { createSlice } from "@reduxjs/toolkit";

import { toast } from "sonner";
import { getAccomodations, getSingleAccomodation } from "../actions/accomodationsAction";

const initialState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
  accomodations: null,
  singleAccomodation :null,
  message: null,
};

const accomodationsSlice = createSlice({
  name: "accomodation",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAccomodations.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAccomodations.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload;
        toast.error(action.payload, { position: "top-center" });
      })
      .addCase(getAccomodations.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.accomodations = action.payload;
      })
      .addCase(getSingleAccomodation.pending, (state)=>{
        state.isLoading = true;
      })
      .addCase(getSingleAccomodation.fulfilled,(state,action)=>{
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.singleAccomodation = action.payload;
      })
      .addCase(getSingleAccomodation.rejected,( state, action)=>{
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      });
  },
});

export default accomodationsSlice.reducer;
