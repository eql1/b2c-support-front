import { Navigate, Outlet } from "react-router-dom";
import Login from "./Login";
import useAuth from "../hooks/useAuth";

interface ProtectedRoutesProps {
  isAuthAllowed: boolean;
  navigate?: string;
}

const ProtectedRoutes: React.FC<ProtectedRoutesProps> = ({
  isAuthAllowed,
  navigate,
}) => {
  const isAuth = useAuth().loggedIn();
  if (isAuthAllowed) {
    return isAuth ? <Outlet /> : <Login />;
  } else {
    if (navigate) {
      return isAuth ? <Navigate to={navigate} /> : <Outlet />;
    } else {
      console.log(
        "'navigate' must be provided with navigate when 'IsAuthAllowed' is false"
      );
      return null;
    }
  }
};

export default ProtectedRoutes;
