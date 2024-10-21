import { createSlice } from "@reduxjs/toolkit";

import { toast } from "sonner";
import { getAccomodations } from "../actions/accomodationsAction";

const initialState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
  accomodations: null,
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
      });
  },
});

export default accomodationsSlice.reducer;
