import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate } from "react-router-dom";


const PrivetRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return <h2>Loading...</h2>
    }
    if (user) {
        return children;
    }

    return <Navigate to="/login" replace />
};

export default PrivetRoute;