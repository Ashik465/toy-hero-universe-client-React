import {
    createBrowserRouter,
   
  } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/home/Home";
import Blog from "../pages/blogs/Blog";
import Registration from "../pages/registration/Registration";
import LogIn from "../pages/login/LogIn";
import AddToy from "../pages/addToy/AddToy";
import PrivateRoute from "./PrivateRoute";
import AllToy from "../pages/allToy/AllToy";
import MyToys from "../pages/myToys/MyToys";
import UpdateToyData from "../pages/myToys/UpdateToyData";
import ToyDetails from "../shared-pages/ToyDetails";
import ErrorPage from "../pages/errorPage/ErrorPage";



  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/blog",
          element: <Blog></Blog>,
        },
        {
          path: "/register",
          element:<Registration></Registration>,
        },
        {
          path: "/login",
          element:<LogIn></LogIn>,
        },
        {
          path: "/alltoys",
          element:<AllToy></AllToy>,
        },
        {
          path: "/toydetails/:id",
          element:<PrivateRoute><ToyDetails></ToyDetails></PrivateRoute>,
        },
        {
          path: "/mytoys",
          element:<PrivateRoute><MyToys></MyToys></PrivateRoute>,
        },
        {
          path: "/update/:id",
          element:<UpdateToyData></UpdateToyData>,
        },
        {
          path: "/addtoy",
          element:<PrivateRoute><AddToy></AddToy></PrivateRoute>,
        },
      ],
    },
  ]);


  export default router;