import { useDispatch, useSelector } from "react-redux";
import {
  logOut,
  getAuthToken,
  getCurrentUser,
  getIsAuthenticated,
} from "../pages/Auth/authSlice";

export function useAuth() {
  const dispatch = useDispatch();
  const user = useSelector(getCurrentUser);
  const token = useSelector(getAuthToken);
  const isAuthenticated = useSelector(getIsAuthenticated);

  return { user, token, isAuthenticated, logout: () => dispatch(logOut()) };
}
