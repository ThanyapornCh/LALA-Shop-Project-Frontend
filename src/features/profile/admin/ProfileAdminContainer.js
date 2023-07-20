import React, { useState } from 'react';
import { STATUS_ADMIN } from '../../../config/constant';
import useAuth from '../../../hooks/useAuth';
import ProfileAdminCover from './ProfileAdminCover';
import ProfileAdminForm from './ProfileAdminForm';
import ProfileAdminPanel from './ProfileAdminPanel';

export default function ProfileAdminContainer() {
  const [profileUser, setProfileUser] = useState({});
  const [statusWithAuthUser, setStatusWithAuthUser] = useState(STATUS_ADMIN);
  const { authenticatedUser } = useAuth();

  const updateProfileUser = value => {
    setProfileUser({ ...profileUser, ...value });
  };
  return (
    <>
      <div className="bg-white block ">
        <div className="max-w-2xl mx-auto">
          <div className="w-full">
            <ProfileAdminCover coverImage={authenticatedUser.coverImage} />
            <ProfileAdminPanel
              profileUser={profileUser}
              updateProfileUser={updateProfileUser}
              statusWithAuthUser={statusWithAuthUser}
              setStatusWithAuthUser={setStatusWithAuthUser}
            />
          </div>
          <div className="bg-white border border-gray-200  shadow dark:bg-gray-800 dark:border-gray-700  rounded-b-lg p-5 pt-12 flex flex-col">
            <ProfileAdminForm />
          </div>
        </div>
      </div>
    </>
  );
}
