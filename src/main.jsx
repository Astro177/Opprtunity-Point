import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./assets/components/Home";
import AppliedJobs from "./assets/components/AppliedJobs";
import Blogs from "./assets/components/Blogs";
import Statistics from "./assets/components/Statistics";
import ErrorPage from "./assets/components/ErrorPage";
import JobDetails from "./assets/components/JobDetails";
import LoadingSpinner from "./assets/components/LoadingSpinner";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("/public/data.json"),
      },
      {
        path: "job/:id",
        element: <JobDetails />,
        loader: () => fetch(`/public/data.json`),
      },
      { path: "/statistics", element: <Statistics /> },
      {
        path: "/applied",
        element: <AppliedJobs />,
        loader: () => fetch(`/public/data.json`),
      },
      { path: "/blog", element: <Blogs /> },
      {path:'loader',element:<LoadingSpinner/>},
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
