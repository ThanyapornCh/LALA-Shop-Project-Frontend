import useAuth from '../../../hooks/useAuth';
import { STATUS_ADMIN } from '../../../config/constant';
import { Route, Navigate, redirect } from 'react-router-dom';

export default function ProtectedRouteAdmin({ children }) {
  const { authenticatedUser } = useAuth();

  if (authenticatedUser.status !== 'admin') {
    return <Navigate to={'/login'} />;
  }
  return children;
}
