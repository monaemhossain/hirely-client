import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./MainLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Registration from "../Pages/Registration/Registration";
import LogIn from "../Pages/LogIn/LogIn";

const Routes  = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      errorElement: <ErrorPage />,
      children: [
        {
            path: '/',
            element: <Home />
        },
        {
           path: '/registration',
           element: <Registration /> 
        },
        {
          path: '/login',
          element: <LogIn />
        }
      ]
    },
  ]);

export default Routes;