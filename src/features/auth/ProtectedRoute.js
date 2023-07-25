import { Navigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

export default function ProtectedRoute({ children }) {
  const { authenticatedUser } = useAuth();

  if (authenticatedUser.status !== 'user') {
    return <Navigate to={'/login'} />;
  }
  return children;
}
