import { createSlice } from "@reduxjs/toolkit";
import { toast } from "sonner";
import { getBlogs } from "../actions/blogsAction";

const initialState = {
    isLoading: false,
    isError: false,
    isSuccess: false,
    blogs: null,
    message: null,
};

const blogsSlice = createSlice({
    name:"blogs",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(getBlogs.pending,(state)=>{
            state.isLoading = true;
        })
        .addCase(getBlogs.rejected,(state,action)=>{
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.payload;
            toast.error(action.payload,{ position: "top-center" });
        })
        .addCase(getBlogs.fulfilled,(state,action)=>{
            state.isSuccess = true;
            state.isLoading = false;
            state.isError = false
            state.blogs = action.payload;
        })
    },
});

export default blogsSlice.reducer;