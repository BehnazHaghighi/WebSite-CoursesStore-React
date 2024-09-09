import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const AuthProvider = ({ children }) => {
  const isLogin = useSelector((state) => state.auth.token);

  return <>{children}</>;
};

export default AuthProvider;
