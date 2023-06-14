import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate } from "react-router-dom";
import Spinner from "../components/Spinner";
import useAdmin from "../hooks/useAdmin";


const AdminRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = useAdmin();

    if (loading || isAdminLoading) {
        return <div className="min-h-screen flex items-center justify-center"><Spinner /></div>
    }
    if (user && isAdmin) {
        return children;
    }

    return <Navigate to='/login' state={{from: location}} replace/>
};

export default AdminRoute;