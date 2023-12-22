import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root/Root";
import Home from "../pages/Home/Home/Home";
import Dashboard from "../pages/Dashboard/Dashboard";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <>Error Occured!</>,
        children: [
            {
                index: true,
                element: <Home></Home>
            },
            {
                path: "dahsboard",
                element: <Dashboard></Dashboard>
            }
        ]
    },
    {
        path: "/login",
        element: <Login></Login>
    },
    {
        path: "/signUp",
        element: <SignUp></SignUp>
    }
]);

export default router;
