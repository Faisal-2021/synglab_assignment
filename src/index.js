import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Navbar from "./components/Navbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Userdetails from "./userdetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // loader:<div className=" text-4xl font-bold">loading</div>
  },
  {
    path: "userdetails/:userId",
    element: <Userdetails />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
