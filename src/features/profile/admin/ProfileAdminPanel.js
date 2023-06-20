import ProfileAdminInfo from './ProfileAdminInfo';
import ProfileAdminAction from './ProfileAdminAction';

export default function ProfileAdminPanel() {
  return (
    <div className="absolute -mt-12 ml-5">
      <ProfileAdminInfo />
      <ProfileAdminAction />
    </div>
  );
}
