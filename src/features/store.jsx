import { configureStore } from "@reduxjs/toolkit";
import accomodationReducer from "./slices/accomodationsSlice";

const store = configureStore({
  reducer: {
    accomodation: accomodationReducer,
  },
});

export default store;
