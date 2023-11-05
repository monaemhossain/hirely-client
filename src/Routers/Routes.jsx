import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./MainLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Registration from "../Pages/Registration/Registration";
import LogIn from "../Pages/LogIn/LogIn";
import PrivateRoutes from "./PrivateRoutes/PrivateRoutes";
import MyJobs from "../Pages/MyJobs/MyJobs";
import AppliedJobs from "../Pages/AppliedJobs/AppliedJobs";
import AllJobs from "../Pages/AllJobs/AllJobs";
import Blogs from "../Pages/Blogs/Blogs";
import Profile from "../Pages/Profile/Profile";
import LoggedInRoutes from "./PrivateRoutes/LoggedInRoutes";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/registration',
        element: <LoggedInRoutes>
          <Registration />
        </LoggedInRoutes>
      },
      {
        path: '/login',
        element: <LoggedInRoutes>
          <LogIn />
        </LoggedInRoutes>
      },
      {
        path: '/profile',
        element: <PrivateRoutes>
          <Profile />
        </PrivateRoutes>
      },
      {
        path: '/all-jobs',
        element: <AllJobs />
      },
      {
        path: '/blogs',
        element: <Blogs />
      },
      {
        path: '/my-jobs',
        element: <PrivateRoutes>
          <MyJobs />
        </PrivateRoutes>
      },
      {
        path: 'applied-jobs',
        element: <PrivateRoutes>
          <AppliedJobs />
        </PrivateRoutes>
      }
    ]
  },
]);

export default Routes;