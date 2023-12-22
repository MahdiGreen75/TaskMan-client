import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root/Root";
import Home from "../pages/Home/Home/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <>Error Occured!</>,
        children: [
            {
                index: true,
                element: <Home></Home>
            }
        ]
    },
]);

export default router;
