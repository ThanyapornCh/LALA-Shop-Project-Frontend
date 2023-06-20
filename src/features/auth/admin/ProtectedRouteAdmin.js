import useAuth from '../../../hooks/useAuth';
import { STATUS_ADMIN } from '../../../config/constant';
import { Navigate } from 'react-router-dom';

export default function ProtectedRouteAdmin({ children }) {
  const { authenticatedUser } = useAuth();
  if (authenticatedUser === 'user') {
    return <Navigate to={'/login'} />;
  }
  return children;
}
