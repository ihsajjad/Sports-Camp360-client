import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate } from "react-router-dom";
import Spinner from "../components/Spinner";


const PrivetRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return <div className="min-h-screen flex items-center justify-center"><Spinner /></div>
    }
    if (user) {
        return children;
    }

    return <Navigate to='/login' state={{from: location}} replace/>
};

export default PrivetRoute;