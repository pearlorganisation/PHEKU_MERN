import { configureStore } from "@reduxjs/toolkit";
import accomodationReducer from "./slices/accomodationsSlice";
import contactReducer from "./slices/contactSlice";

const store = configureStore({
  reducer: {
    accomodation: accomodationReducer,
    contact: contactReducer
  },
});

export default store;
