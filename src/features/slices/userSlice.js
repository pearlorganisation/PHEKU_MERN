import { createSlice } from "@reduxjs/toolkit";

import { toast } from "sonner";
import { getUserProfile, sendEmail, updatePassword, updateUserProfile } from "../actions/userAction";

const initialState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
  userInfo: null,
  message: null,
  sendEmailStatus: {
      isLoading: false,
      isError: false,
      isSuccess: false,
      message: null,
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // getUserProfile
      .addCase(getUserProfile.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUserProfile.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload;
        toast.error(action.payload, {
          position: "top-center"
        });
      })
      .addCase(getUserProfile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.userInfo = action.payload;
      })

      // updateUserProfile
      .addCase(updateUserProfile.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateUserProfile.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload;
        toast.error(action.payload, {
          position: "top-center"
        });
      })
      .addCase(updateUserProfile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userInfo = action.payload;
        state.isSuccess = true;
        state.isError = false;
        toast.success("Profile Updated Successfully", {
          position: "top-center",
        });
      })

      // updatePassword
      .addCase(updatePassword.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updatePassword.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload;
        toast.error(action.payload, {
          position: "top-right"
        });
      })
      .addCase(updatePassword.fulfilled, (state) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        toast.success("Changed the password successfully", {
          position: "top-right",
        });
      })

    
      .addCase(sendEmail.pending, (state) => {
         state.sendEmailStatus = state.sendEmailStatus ?? {};
        state.sendEmailStatus.isLoading = true;
        state.sendEmailStatus.isError = false;
        state.sendEmailStatus.isSuccess = false;
        state.sendEmailStatus.message = null;
      })
      .addCase(sendEmail.rejected, (state, action) => {
        state.sendEmailStatus = state.sendEmailStatus ?? {};
        state.sendEmailStatus.isLoading = false;
        state.sendEmailStatus.isSuccess = false;
        state.sendEmailStatus.isError = true;
        state.sendEmailStatus.message = action.payload;
        toast.error("Failed to send the reset email", {
          position: "top-right",
        });
      })
      .addCase(sendEmail.fulfilled, (state) => {
        state.sendEmailStatus = state.sendEmailStatus ?? {};
        state.sendEmailStatus.isLoading = false;
        state.sendEmailStatus.isError = false;
        state.sendEmailStatus.isSuccess = true;
        toast.success("A reset link is sent to your email", {
          position: "top-right",
        });
      });
  },
});

export default userSlice.reducer;
