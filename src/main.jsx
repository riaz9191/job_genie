import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import Statistics from "./components/Statistics";
import AppliedJobs from "./components/AppliedJobs";
import Blogs from "./components/Blogs";
import MainDetails from "./components/Featured Jobs/MainDetails";
import { jobData } from "./loader/getData";
import { Toaster } from "react-hot-toast";
import ErrorPage from "./components/ErrorPage";
import Error404 from "./components/Error404/Error404";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error404/>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/jobs.json"),
      },
      {
        path: "/:id",
        element: <MainDetails />,
        loader: () => fetch("/jobs.json"),
      },
      {
        path: "/statistics",
        element: <Statistics />,
      },
      {
        path: "/applied",
        element: <AppliedJobs />,
        loader: jobData,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      // {
      //   path: "/*",
      //   element: <ErrorPage />,
      // },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Toaster />
  </React.StrictMode>
);
