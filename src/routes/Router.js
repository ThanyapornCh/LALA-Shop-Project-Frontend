import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import HomePage from '../pages/HomePage';
import CartPage from '../pages/CartPage';
import ProfileUserPage from '../pages/ProfieUserPage';
import RedirectIfAuthenticate from '../features/auth/RedirectIfAuthenticate';
import ProtectedRoute from '../features/auth/ProtectedRoute';
import AuthLayout from '../layouts/AuthLayout';
import OrderStatusPage from '../pages/OrderStatusPage';
import ProfileAdminPage from '../pages/admin/ProfileAdminPage';
import ProtectedRouteAdmin from '../features/auth/admin/ProtectedRouteAdmin';
import AuthLayoutAdmin from '../layouts/admin/AuthLayoutAdmin';
import LoginAdminPage from '../pages/admin/LoginAdminPage';
import RedirectIfAuthenticateAdmin from '../features/auth/admin/RedirectIfAuthenticateAdmin';
import PaymentPage from '../pages/admin/PaymentPage';
import AddProductPage from '../pages/admin/AddProductPage';
import CheckOrderPage from '../pages/admin/CheckOrderPage';
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
  // {
  //   path: '/loginadmin',
  //   element: (
  //     <RedirectIfAuthenticateAdmin>
  //       <LoginAdminPage />
  //     </RedirectIfAuthenticateAdmin>
  //   ),
  // },
  {
    element: (
      <ProtectedRouteAdmin>
        <AuthLayoutAdmin />
      </ProtectedRouteAdmin>
    ),
    children: [
      {
        path: '/profieadmin',
        element: <ProfileAdminPage />,
      },
      {
        path: '/addproduct',
        element: <AddProductPage />,
      },
      {
        path: '/checkorder',
        element: <CheckOrderPage />,
      },
      {
        path: '/payment',
        element: <PaymentPage />,
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
