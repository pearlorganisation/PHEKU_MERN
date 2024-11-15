import {
  createAsyncThunk
} from "@reduxjs/toolkit";
import {
  axiosInstance
} from "../../services/axiosInterceptor";

export const getUserProfile = createAsyncThunk(
  "user/getProfile",
  async (_, {
    rejectWithValue
  }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const {
        data
      } = await axiosInstance.get(`/api/v1/users/me`, config);

      console.log("Profile Data", data);

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

export const updateUserProfile = createAsyncThunk(
  "user/updateProfile",
  async ({
    fullName,
    mobileNumber,
    email
  }, {
    rejectWithValue
  }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const {
        data
      } = await axiosInstance.patch(
        `/api/v1/users/me`, {
          fullName,
          mobileNumber,
          email
        },
        config
      );

      console.log(data, "update user profile data");

      return data;
    } catch (error) {
      console.log("Error", error);
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);


/**----------------------------------Updating password when user is logged in----------------------------------------------------------------*/

export const updatePassword = createAsyncThunk(
  "user/updatePassword", async ({
    currentPassword,
    newPassword
  }, {
    rejectWithValue
  }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json"
        }
      }

      const {
        data
      } = await axiosInstance.patch("/api/v1/auth/update", {
        currentPassword,
        newPassword
      }, config);
      console.log(data.data, "New updated password data")
      return data.data
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  });


  /*------------------for sending the email to reset the password---------------------------------------------- */

  export const sendEmail = createAsyncThunk(
    "user/resetEmail",async({ email },{ rejectWithValue })=>{
      try {
        const config ={
          headers :{
            "Content-Type": "application/json"
          }
        }
        const { data } = await axiosInstance.post("/api/v1/users/forgot",{ email },config)
        console.log("data for reset email", data.data);
        return data.data;
      } catch (error) {
           if (error.response && error.response.data.message) {
             return rejectWithValue(error.response.data.message);
           } else {
             return rejectWithValue(error.message);
           }
      }
    }
  )