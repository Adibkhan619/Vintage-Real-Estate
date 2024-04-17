import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import SiteDetails from "../pages/SiteDetails";
import PrivateRoutes from "../pages/PrivateRoutes";
import Estates from "../pages/Estates";
import Blog from "../pages/Blog";
import Error from "../pages/Error";

const router = createBrowserRouter([
    {
      path: "/",
      element:<Root></Root>,
      errorElement: <Error></Error>,
      children: [
        {
            path: "/",
            element: <Home></Home>,
            // loader: () => fetch('/public/realEstates.json')
        },
        {
            path: "/register",
            element:<Register></Register>
        },
        {
            path: "/login",
            element:<Login></Login>
        },
        {
          path: "/userProfile",
          element: <PrivateRoutes><Profile></Profile></PrivateRoutes>
        },
        {
          path:"/estates",
          element:<PrivateRoutes><Estates></Estates></PrivateRoutes>,
          loader: () => fetch('/realEstates.json')
        },
        {
          path: "/siteDetails/:id",
          element: <SiteDetails></SiteDetails>,
          loader: () => fetch('/realEstates.json'),
        },
        {
          path:"/blog",
          element: <PrivateRoutes><Blog></Blog></PrivateRoutes>,
          
        }
      ]
    },
  ]);


export default router;