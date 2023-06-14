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
import InstructorProfile from "../pages/instructors/InstructorProfile";
import InstructorRoute from "./InstructorRoute";

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
            },
            {
                path: '/instructors/:id',
                element: <InstructorProfile />
            }

        ]
    },
    {
        path: '/dashboard',
        element: <Dashboard />,
        children: [

            // Students area
            {
                path: '/dashboard/selected-classes',
                element: <PrivetRoute><SelectedClasses /></PrivetRoute>
            },
            {
                path: '/dashboard/payment',
                element: <PrivetRoute><Payment /></PrivetRoute>
            },
            {
                path: '/dashboard/enrolled-classes',
                element: <PrivetRoute><EnrolledClasses /></PrivetRoute>
            },
            {
                path: '/dashboard/history',
                element: <PrivetRoute><History /></PrivetRoute>
            }, 

            // Instructors area
            {
                path: '/dashboard/add-class',
                element: <PrivetRoute><AddNewClass /></PrivetRoute>
            },
            {
                path: '/dashboard/my-classes',
                element: <InstructorRoute><MyClasses /></InstructorRoute>
            },

            // Admins area 
            {
                path: '/dashboard/menage-classes',
                element: <PrivetRoute><MenageClasses /></PrivetRoute>
            },
            {
                path: '/dashboard/menage-users',
                element: <MenageUsers />
            }
        ]
    }
]);

export default router;
