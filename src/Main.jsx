import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./Router";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import App from "./App";
// import Profile from "./Profile";
// import Spinach from "./Spinach";
// import Popeye from "./Popeye";
// import DefaultProfile from "./DefaultProfile";
// import ErrorPage from "./ErrorPage";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     errorElement: <ErrorPage />
//   },
//   {
//     // path: "profile",
//     path: "profile/:name",
//     element: <Profile />,
//     // what is there are a million profile users, or news articles, are you gonna write a line for them every time?
//     // children: [
//     //   { index: true, element: <DefaultProfile />},
//     //   { path: "spinach", element: <Spinach /> },
//     //   { path: "popeye", element: <Popeye /> }
//     // ]
//   },
// ]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <RouterProvider router={router} /> */}
    <Router />
  </React.StrictMode>
);
