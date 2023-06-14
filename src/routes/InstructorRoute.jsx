import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate } from "react-router-dom";
import Spinner from "../components/Spinner";
import useDashboardAccess from "../hooks/useDashboardAccess";


const InstructorRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const {dashboardUser, isDashboardUserLoading} = useDashboardAccess();

    if (loading || isDashboardUserLoading) {
        return <div className="min-h-screen flex items-center justify-center"><Spinner /></div>
    }
    if (user && dashboardUser) {
        return children;
    }

    return <Navigate to='/' state={{from: location}} replace/>
};

export default InstructorRoute;