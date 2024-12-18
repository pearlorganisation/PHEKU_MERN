import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store, { persistor } from "./features/store.jsx";
import { PersistGate } from "redux-persist/integration/react";
import { Toaster } from "sonner";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
        <Toaster richColors />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
