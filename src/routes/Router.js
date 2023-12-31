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
import PaymentPage from '../pages/PaymentPage';
import AddProductPage from '../pages/admin/AddProductPage';
import CheckOrderPage from '../pages/admin/CheckOrderPage';
import MyBalancePage from '../pages/admin/MyBalancePage';
import AccountPage from '../pages/AccountPage';
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
        path: '/user/cart',
        element: <CartPage />,
      },
      {
        path: '/user/orderstatus',
        element: <OrderStatusPage />,
      },
      {
        path: '/user/payment',
        element: <PaymentPage />,
      },
      {
        path: '/user/myaccount',
        element: <AccountPage />,
      },
      {
        path: '/user/profile',
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
      // <ProtectedRoute>
      <ProtectedRouteAdmin>
        <AuthLayoutAdmin />
      </ProtectedRouteAdmin>
      // </ProtectedRoute>
    ),
    children: [
      {
        path: '/admin/profile',
        element: <ProfileAdminPage />,
      },
      {
        path: '/admin/product',
        element: <AddProductPage />,
      },
      {
        path: '/admin/checkorder',
        element: <CheckOrderPage />,
      },
      {
        path: '/admin/mybalance',
        element: <MyBalancePage />,
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
