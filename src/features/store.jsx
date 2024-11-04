import { combineReducers, configureStore } from "@reduxjs/toolkit";
import accomodationReducer from "./slices/accomodationsSlice";
import contactReducer from "./slices/contactSlice";
import authReducer from "./slices/authSlice";
import userReducer from "./slices/userSlice";
import examReducer from "./slices/examsSlice";
import courseReducer from "./slices/coursesSlice";
import universityReducer from "./slices/universitiesSlice";
import countriesReducer from "./slices/countriesSlice";
import blogsReducer from "./slices/blogsSlice";
import categoryReducer from "./slices/categoriesSlice";
import { encryptTransform } from "redux-persist-transform-encrypt";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import persistStore from "redux-persist/es/persistStore";

const persistConfig = {
  key: "pheku_persist",
  version: 1,
  storage,
  transforms: [
    encryptTransform({
      secretKey: `${import.meta.env.VITE_REDUX_PERSIST_SECRET_KEY}`,
      onError: (err) => {
        console.log("Redux Persist Encryption Failed: ", err);
      },
    }),
  ],
  // if you do not want to persist this part of the state
  // blacklist: ["omitedPart"],
};

const reducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  accomodation: accomodationReducer,
  contact: contactReducer,
  university: universityReducer,
  exam: examReducer,
  course: courseReducer,
  countries: countriesReducer,
  blog: blogsReducer,
  categories: categoryReducer
});

const rootReducer = (state, action) => {
  if (action.type === "RESET_APP") {
    state = undefined;
  }
  return reducer(state, action);
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  devTools: import.meta.env.VITE_WORKING_ENVIRONMENT !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export const persistor = persistStore(store);

export default store;
