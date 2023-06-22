import useAuth from '../../../hooks/useAuth';
import { STATUS_ADMIN } from '../../../config/constant';
import { Navigate } from 'react-router-dom';

export default function ProtectedRouteAdmin({ children }) {
  const { authenticatedUser } = useAuth();
  // const { status } = authenticatedUser;
  if (authenticatedUser === 'admin') {
    return <Navigate to={'/profileadmin'} />;
  } else if (!authenticatedUser) {
    return <Navigate to={'/login'} />;
  }
  // else if (authenticatedUser !== 'admin') {
  //   return <Navigate to={'/'} />;
  // }

  return children;
}
