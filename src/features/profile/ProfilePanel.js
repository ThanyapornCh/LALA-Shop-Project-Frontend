import ProfileAction from './ProfileAction';
import ProfileInfo from './ProfileInfo';

export default function ProfilePanel({
  profileUser,
  statusWithAuthUser,
  setStatusWithAuthUser,
  updateProfileUser,
}) {
  return (
    <div className="absolute -mt-12 ml-5">
      <ProfileInfo
        profileUser={profileUser}
        statusWithAuthUser={statusWithAuthUser}
      />
      <ProfileAction
        statusWithAuthUser={statusWithAuthUser}
        updateProfileUser={updateProfileUser}
        setStatusWithAuthUser={setStatusWithAuthUser}
      />
    </div>
  );
}
