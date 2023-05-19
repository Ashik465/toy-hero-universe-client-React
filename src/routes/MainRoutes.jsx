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


  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
    //   errorElement: <ErrorPage />,
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
          path: "/addtoy",
          element:<PrivateRoute><AddToy></AddToy></PrivateRoute>,
        },
      ],
    },
  ]);


  export default router;