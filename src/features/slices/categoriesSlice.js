import { createSlice } from "@reduxjs/toolkit";
import { getCategories } from "../actions/categoriesAction";
import { toast } from "sonner";


const initialState = {
    isLoading: false,
    isError: false,
    isSuccess: false,
    categories: null,
    message: null,
};


const categorySlice = createSlice({
    name:"categories",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(getCategories.pending,(state)=>{
            state.isLoading = true
        })
        .addCase(getCategories.rejected,(state,action)=>{
            state.isLoading= false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.payload;

            toast.error(action.payload, { position: "top-center" })
        })
        .addCase(getCategories.fulfilled,(state, action)=>{
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.categories = action.payload;
        })
    },
})

export default categorySlice.reducer;