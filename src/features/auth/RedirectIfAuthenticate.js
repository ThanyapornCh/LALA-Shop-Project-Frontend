import { Navigate } from 'react-router-dom';
import { STATUS_ADMIN, STATUS_USER } from '../../config/constant';
import useAuth from '../../hooks/useAuth';

export default function RedirectIfAuthenticate({ children }) {
  const { authenticatedUser } = useAuth();
  if (authenticatedUser) {
    return <Navigate to={'/'} />;
  }
  // else if (authenticatedUser === 'admin') {
  //   return <Navigate to={'/profieadmin'} />;
  // }
  return children;
}
