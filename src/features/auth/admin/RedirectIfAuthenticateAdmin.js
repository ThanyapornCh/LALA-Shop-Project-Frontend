import useAuth from '../../../hooks/useAuth';
import { STATUS_ADMIN } from '../../../config/constant';
import { Navigate } from 'react-router-dom';

export default function RedirectIfAuthenticateAdmin({ children }) {
  const { authenticatedUser } = useAuth();
  if (authenticatedUser === STATUS_ADMIN) {
    return <Navigate to={'/profieadmin'} />;
  }

  return children;
}
