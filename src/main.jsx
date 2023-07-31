import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { DateLoginProvider } from "./context/authContext";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DateLoginProvider>
      <App/>
      <ToastContainer />
    </DateLoginProvider>
  </React.StrictMode>
);
