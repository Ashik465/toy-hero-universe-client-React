import {
    createBrowserRouter,
   
  } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/home/Home";
import Blog from "../pages/blogs/Blog";
import Registration from "../pages/registration/Registration";
import LogIn from "../pages/login/LogIn";
import AddToy from "../pages/addToy/AddToy";


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
          path: "/addtoy",
          element:<AddToy></AddToy>,
        },
      ],
    },
  ]);


  export default router;