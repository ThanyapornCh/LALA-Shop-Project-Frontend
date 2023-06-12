import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
export default function AuthLayout() {
  return (
    <>
      <Header />
      <div className="px-2 py-4">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
