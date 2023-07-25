import { Navigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

export default function RedirectIfAuthenticate({ children }) {
  const { authenticatedUser } = useAuth();

  if (authenticatedUser && authenticatedUser.status === 'user') {
    return <Navigate to={'/'} />;
  } else if (authenticatedUser && authenticatedUser.status === 'admin') {
    return <Navigate to={'/admin/profile'} />;
  }
  return children;
}
