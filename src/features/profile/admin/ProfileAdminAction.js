import { STATUS_ADMIN } from '../../../config/constant';
import AdminMeAction from './AdminMeAction';

export default function ProfileAdminAction({
  statusWithAuthUser,
  setStatusWithAuthUser,
  updateProfileUser,
}) {
  return (
    <>
      {statusWithAuthUser === STATUS_ADMIN && (
        <AdminMeAction updateProfileUser={updateProfileUser} />
      )}
    </>
  );
}
