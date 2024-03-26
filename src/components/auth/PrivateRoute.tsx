import { Navigate } from "react-router-dom";
import { useUserContext } from "../../hooks/use-user-context";

type PrivateRouteProps = {
  children: React.ReactNode;
  redirectTo: string;
  requiredRoles: string[];
};

export const PrivateRoute: React.FC<PrivateRouteProps> = ({
  children,
  redirectTo,
  requiredRoles,
}) => {
  const { user } = useUserContext();

  return user && requiredRoles.includes(user.role) ? (
    children
  ) : (
    <Navigate to={redirectTo} />
  );
};
