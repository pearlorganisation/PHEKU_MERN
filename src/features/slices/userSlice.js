import { createSlice } from "@reduxjs/toolkit";

import { toast } from "sonner";
import { getUserProfile, updateUserProfile } from "../actions/userAction";

const initialState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
  userInfo: null,
  message: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUserProfile.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateUserProfile.pending, (state) => {
        state.isLoading = true;
      }),
      builder
        .addCase(getUserProfile.rejected, (state, action) => {
          state.isLoading = false;
          state.isSuccess = false;
          state.isError = true;
          state.message = action.payload;
          toast.error(action.payload, { position: "top-center" });
        })
        .addCase(updateUserProfile.rejected, (state, action) => {
          state.isLoading = false;
          state.isSuccess = false;
          state.isError = true;
          state.message = action.payload;
          toast.error(action.payload, { position: "top-center" });
        }),
      builder
        .addCase(getUserProfile.fulfilled, (state, action) => {
          state.isLoading = false;
          state.isSuccess = true;
          state.isError = false;
          state.userInfo = action.payload;
        })
        .addCase(updateUserProfile.fulfilled, (state, action) => {
          state.isLoading = false;
          state.userInfo = action.payload;
          state.isSuccess = true;
          state.isError = false;
          toast.success("Profile Updated Successfully", {
            position: "top-center",
          });
        });
  },
});

export default userSlice.reducer;
