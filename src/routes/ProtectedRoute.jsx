import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

function ProtectedRoute() {
  const location = useLocation();
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to={`/login?redirectTo=${location.pathname}`} replace />;
  }
  return <Outlet />;
}

export default ProtectedRoute;
