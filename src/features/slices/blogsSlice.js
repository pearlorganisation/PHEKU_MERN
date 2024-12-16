import { createSlice } from "@reduxjs/toolkit";
import { toast } from "sonner";
import { getBlogs, getRecentBlogs, getSingleBlog } from "../actions/blogsAction";

const initialState = {
    isLoading: false,
    isError: false,
    isSuccess: false,
    blogs: null,
    recentBlogs: null,
    singleBlog: null,
    message: null,
    paginate:{}
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
            state.blogs = action.payload.data;
            state.paginate = action.payload.metadata;
        })
        .addCase(getRecentBlogs.pending, (state)=>{
            state.isLoading = true;
        })
        .addCase(getRecentBlogs.rejected,(state, action)=>{
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.payload;
        })
        .addCase(getRecentBlogs.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.recentBlogs = action.payload;
          
        })
        .addCase(getSingleBlog.pending,(state)=>{
            state.isLoading = true;
        })
        .addCase(getSingleBlog.rejected,(state, action)=>{
            state.isLoading= false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.payload;
        })
        .addCase(getSingleBlog.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.isError = false;
            state.isSuccess= true;
            state.singleBlog = action.payload;
        })
    },
});

export default blogsSlice.reducer;