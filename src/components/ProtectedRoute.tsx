import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

interface Props {
    allowedRoles?: string[];
}
const ProtectedRoute = ({allowedRoles}: Props) => {
 const { isAuthenticated, user} = useAuth();
 if(!isAuthenticated) {
    return <Navigate to="/login" replace />
 }
 if(allowedRoles && user && !allowedRoles.includes(user.role)) {
    return <Navigate to="/login" replace />
 }
 return <Outlet/>;
}

export default ProtectedRoute;