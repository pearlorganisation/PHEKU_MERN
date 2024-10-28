import { createSlice } from "@reduxjs/toolkit";
import { toast } from "sonner";
import { getCountries } from "../actions/countriesActions";

const initialState ={
    isLoading :false,
    isError :false,
    isSuccess : false,
    countryInfo : null,
    message: null,
}

const countriesSlice = createSlice({
    name:"countries",
    initialState,
    reducers:{},
    extraReducers: (builder) =>{
        builder
        .addCase(getCountries.pending,(state)=>{
            state.isLoading = true;
        })
        .addCase(getCountries.rejected,(state,action)=>{
            state.isLoading = false;
            state.isSuccess = false;
            state.isError = true;
            state.message = action.payload;
            toast.error(action.payload,{ position: "top-center" });
        })
        .addCase(getCountries.fulfilled, (state,action)=>{
            state.isLoading = false;
            state.isSuccess = true;
            state.isError = false;
            state.countryInfo = action.payload;
        });
    },
});

export default countriesSlice.reducer;