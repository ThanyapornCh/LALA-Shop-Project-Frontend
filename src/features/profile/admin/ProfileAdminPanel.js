import ProfileAdminInfo from './ProfileAdminInfo';
import ProfileAdminAction from './ProfileAdminAction';

export default function ProfileAdminPanel({
  profileUser,
  updateProfileUser,
  statusWithAuthUser,
  setStatuWithAuthUser,
}) {
  return (
    <div className="absolute -mt-12 ml-5">
      <ProfileAdminInfo
        profileUser={profileUser}
        statusWithAuthUser={statusWithAuthUser}
      />
      <ProfileAdminAction
        updateProfileUser={updateProfileUser}
        statusWithAuthUser={statusWithAuthUser}
        setStatuWithAuthUser={setStatuWithAuthUser}
      />
    </div>
  );
}
