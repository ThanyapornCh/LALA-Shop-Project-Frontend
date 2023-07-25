import { Navigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { STATUS_ADMIN } from '../../../config/constant';

export default function RedirectIfAuthenticateAdmin({ children }) {
  const { authenticatedUser } = useAuth();

  if (authenticatedUser === STATUS_ADMIN) {
    return <Navigate to={'/admin/profie'} />;
  }

  return children;
}
