import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Route from "./Routes/Route";
import AuthProvider from "./Provider/AuthProvider";
import { HelmetProvider } from "react-helmet-async";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider><RouterProvider router={Route} /></HelmetProvider>
    </AuthProvider>
  </React.StrictMode>
);
