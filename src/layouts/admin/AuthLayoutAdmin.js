import { Outlet } from 'react-router-dom';
import HeaderAdmin from './HeaderAdmin';
import FooterAdmin from './FooterAdmin';

export default function AuthLayoutAdmin() {
  return (
    <>
      <HeaderAdmin />
      <div className="px-2 py-4">
        <Outlet />
      </div>
      <FooterAdmin />
    </>
  );
}
