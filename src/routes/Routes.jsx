import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import UpdateProfile from "../pages/UpdateProfile";

const router = createBrowserRouter([
    {
      path: "/",
      element:<Root></Root>,
      children: [
        {
            path: "/",
            element: <Home></Home>,
            loader: () => fetch('/public/realEstates.json')
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
          element: <Profile></Profile>
        },
        {
          path: "/updateProfile",
          element: <UpdateProfile></UpdateProfile>
        }
      ]
    },
  ]);


export default router;