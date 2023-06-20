import LoginAdminForm from '../../features/auth/admin/LoginAdminForm';
import RegisterContainer from '../../features/auth/RegisterContainer';
import LalaShopLogo from '../../icons';

export default function LoginAdminPage() {
  return (
    <div
      className="w-screen h-screen flex justify-center items-center
  bg-gradient-to-br from-purple-700 to-amber-700"
    >
      <div className="bg-pink rounded-xl ">
        <div className="max-w-sm mx-auto p-10 bg-white rounded-xl drop-shadow-lg space-y-5 m-md">
          <div className="flex justify-center">
            <LalaShopLogo />
          </div>
          <LoginAdminForm />
        </div>
        <RegisterContainer />
      </div>
    </div>
  );
}
