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

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement:<ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("/public/data.json"),
      },
      { path: "/statistics", element: <Statistics /> },
      { path: "/applied", element: <AppliedJobs /> },
      { path: "/blog", element: <Blogs /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
