import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const PublicRoute = () => {
    const { isAuthenticated, user } = useAuth();
    if (isAuthenticated && user) {
        if(user.role === 'Admin') return <Navigate to="/admin" replace />;
        if(user.role === 'Instructor') return <Navigate to="/instructor" replace />;
        return <Navigate to="/dashboard" replace />;
    }
    return <Outlet />;
};

export default PublicRoute;