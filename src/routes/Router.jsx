import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/home/home/Home";
import NotFound from "../pages/404/NotFound";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <NotFound />,
        children: [
            {
                path: '/',
                element: <Home />
            }
        ]
    }
]);

export default router;
