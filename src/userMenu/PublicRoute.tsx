import { Navigate, Outlet, useLocation } from "react-router";
// import { getAccessToken } from "../redux/auth/authSlice";
import { useAppSelector } from "../redux/hooks";
// import { IRouteProps } from "../types";
import { getIsLoggedIn } from "../redux/auth/authSlice";

export const PublicRoute = () => {
  const location = useLocation();
  // const isRefreshing = useAppSelector(getIsRefreshing);
  const isLoggedIn = useAppSelector(getIsLoggedIn);
  return !isLoggedIn ? (
    <Outlet />
  ) : (
    <Navigate to={location.state ? location.state : "schemes"} />
  );
};
