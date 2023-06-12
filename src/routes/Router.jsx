import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/home/home/Home";
import NotFound from "../pages/404/NotFound";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Dashboard from "../layouts/Dashboard";
import PrivetRoute from "./PrivetRoute";
import MyClasses from "../pages/dashboard/myClasses/MyClasses";
import AddNewClass from "../pages/dashboard/addNewClass/AddNewClass";
import SelectedClasses from "../pages/dashboard/student/selectedClasses";
import AllClasses from "../pages/allClasses/AllClasses";
import Payment from "../pages/dashboard/student/payments/Payment";
import History from "../pages/dashboard/student/History";
import EnrolledClasses from "../pages/dashboard/student/EnrolledClasses";
import MenageClasses from "../pages/dashboard/admin/MenageClasses";
import MenageUsers from "../pages/dashboard/admin/MenageUsers";
import Instructors from "../pages/instructors/Instructors";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <NotFound />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/classes',
                element: <AllClasses />
            },
            {
                path: '/instructors',
                element: <Instructors />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivetRoute><Dashboard /></PrivetRoute>,
        children: [

            // Students area
            {
                path: '/dashboard/selected-classes',
                element: <SelectedClasses />
            },
            {
                path: '/dashboard/payment',
                element: <Payment />
            },
            {
                path: '/dashboard/enrolled-classes',
                element: <EnrolledClasses />
            },
            {
                path: '/dashboard/history',
                element: <History />
            }, 

            // Instructors area
            {
                path: '/dashboard/add-class',
                element: <AddNewClass />
            },
            {
                path: '/dashboard/my-classes',
                element: <MyClasses />
            },

            // Admins area 
            {
                path: '/dashboard/menage-classes',
                element: <MenageClasses />
            },
            {
                path: '/dashboard/menage-users',
                element: <MenageUsers />
            }
        ]
    }
]);

export default router;
