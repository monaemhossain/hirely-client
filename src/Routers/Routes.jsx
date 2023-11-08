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
import PostJob from "../Pages/PostJob/PostJob";
import JobDetails from "../Pages/JobDetails/JobDetails";
import UpdateJob from "../Pages/UpdateJob/UpdateJob";

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
        path: '/applied-jobs',
        element: <PrivateRoutes>
          <AppliedJobs />
        </PrivateRoutes>
      },
      {
        path: '/post-job',
        element: <PrivateRoutes>
          <PostJob />
        </PrivateRoutes>
      },
      {
        path: '/update/:id',
        element: <PrivateRoutes>
          <UpdateJob />
        </PrivateRoutes>,
        loader: ({params}) => fetch(`https://hirely-server.vercel.app/job/${params.id}`)
      },
      {
        path: '/details/:type/:id',
        element: <PrivateRoutes>
          <JobDetails />
        </PrivateRoutes>,
        loader: ({ params }) => {
          const { type, id } = params;
          const path = type === 'job' ? 'job' : 'application';
          return fetch(`https://hirely-server.vercel.app/${path}/${id}`);
        }
      }

    ]
  },
]);

export default Routes;