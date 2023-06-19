import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import HomePage from '../pages/HomePage';
import CartPage from '../pages/CartPage';
import ProfileUserPage from '../pages/ProfieUserPage';
import RedirectIfAuthenticate from '../features/auth/RedirectIfAuthenticate';
import ProtectedRoute from '../features/auth/ProtectedRoute';
import AuthLayout from '../layouts/AuthLayout';
import OrderStatusPage from '../pages/OrderStatusPage';
const router = createBrowserRouter([
  {
    path: '/login',
    element: (
      <RedirectIfAuthenticate>
        <LoginPage />
      </RedirectIfAuthenticate>
    ),
  },

  {
    element: (
      <ProtectedRoute>
        <AuthLayout />
      </ProtectedRoute>
    ),
    children: [
      { path: '/', element: <HomePage /> },
      {
        path: '/cart',
        element: <CartPage />,
      },
      {
        path: '/orderstatus',
        element: <OrderStatusPage />,
      },
      {
        path: '/profileuser', ///profileuser/:userId
        element: <ProfileUserPage />,
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
