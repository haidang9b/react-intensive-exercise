// import { useLocation, Navigate, Outlet } from "react-router-dom";
// import { useAuth } from "../../hooks/useAuth";

// interface RequireAuthProps {
//     allowedRoles: string[];
// }

// const RequireAuth: React.FC<RequireAuthProps> = ({ allowedRoles }) => {
//     const { user } = useAuth();
//     const location = useLocation();
//     return allowedRoles.includes(user?.role) ? (
//         <Outlet/>
//     )
//     : user ? <Navigate to="/unauthorized" state={{ from: location }} replace />
//     : <Navigate to="/login" state={{ from: location }} replace />
// }

// export default RequireAuth;
