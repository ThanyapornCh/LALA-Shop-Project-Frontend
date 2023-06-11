import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import HomePage from '../pages/HomePage';
import CartPage from '../pages/CartPage';
import ProfileUserPage from '../pages/ProfieUserPage';
const router = createBrowserRouter([
  {
    path: '/login',
    element: <LoginPage />,
  },
  { path: '/', element: <HomePage /> },
  {
    path: '/cart',
    element: <CartPage />,
  },
  {
    path: '/profileuser',
    element: <ProfileUserPage />,
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
