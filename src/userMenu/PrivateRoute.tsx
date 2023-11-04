import { Navigate, Outlet, useLocation } from "react-router";
import { useAppSelector } from "../redux/hooks";
import { getIsLoggedIn, getIsRefreshing } from "../redux/auth/authSlice";

export const PrivateRoute = () => {
  const location = useLocation();
  const isRefreshing = useAppSelector(getIsRefreshing);
  const isLoggedIn = useAppSelector(getIsLoggedIn);
  return isLoggedIn && !isRefreshing ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={location} />
  );
};
