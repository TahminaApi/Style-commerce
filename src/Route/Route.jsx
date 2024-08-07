import { createBrowserRouter } from "react-router-dom";
import Login from "../assets/components/Login/Login";
import Shop from "../assets/components/Shop/Shop";
import Main from "../Layout/Main";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Shop></Shop>,
            },
            {
                path: "/shop",
                element: <Shop></Shop>,
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
        ],
    },
]);

export default router;