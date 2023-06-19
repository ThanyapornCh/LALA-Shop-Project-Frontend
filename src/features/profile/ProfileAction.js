import { STATUS_ME } from '../../config/constant';
import MeAction from './MeAction';

export default function ProfileAction({
  statusWithAuthUser,
  setStatusWithAuthUser,
  updateProfileUser,
}) {
  return (
    <>
      {statusWithAuthUser === STATUS_ME && (
        <MeAction updateProfileUser={updateProfileUser} />
      )}
    </>
  );
}
