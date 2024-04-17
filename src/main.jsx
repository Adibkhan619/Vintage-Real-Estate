import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Routes.jsx";
import AuthProvider from "./providers/AuthProvider.jsx";
import { ToastContainer } from "react-toastify";
import { Helmet } from "react-helmet";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <Helmet></Helmet>
        <RouterProvider router={router} />
      
    </AuthProvider>
  </React.StrictMode>
);
<ToastContainer />;
