import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home/Home";
import ErrorPage from "./Components/Layout/ErrorPage";
import Root from "./Components/Layout/Root";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import AuthProvider from "./Firebase/AuthProvider";
import Contact from "./Pages/Contact/Contact";
import AddServices from "./Components/Layout/Navbar/AddServices";
import ShowAllservices from "./Pages/ShowAllservices/ShowAllservices";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "contact",
        element: <Contact></Contact>
      },
      {
        path: "/addService",
        element: <AddServices></AddServices>
      },
      {
        path: "/showAllService/:type",
        element: <ShowAllservices></ShowAllservices>
      }
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },

  {
    path: "/register",
    element: <Register></Register>,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
