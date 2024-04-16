import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import UpdateProfile from "../pages/UpdateProfile";
import SiteDetails from "../pages/SiteDetails";
import PrivateRoutes from "../pages/PrivateRoutes";
import Estates from "../pages/Estates";

const router = createBrowserRouter([
    {
      path: "/",
      element:<Root></Root>,
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
          path: "/updateProfile",
          element: <PrivateRoutes><UpdateProfile></UpdateProfile></PrivateRoutes>
        },
        {
          path:"/estates",
          element:<PrivateRoutes><Estates></Estates></PrivateRoutes>,
          loader: () => fetch('/public/realEstates.json')
        },
        {
          path: "/siteDetails/:id",
          element: <SiteDetails></SiteDetails>,
          loader: () => fetch('/public/realEstates.json')
        }
      ]
    },
  ]);


export default router;