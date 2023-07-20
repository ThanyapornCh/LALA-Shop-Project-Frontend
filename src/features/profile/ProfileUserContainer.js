import React, { useState } from 'react';
import { STATUS_ME } from '../../config/constant';
import useAuth from '../../hooks/useAuth';
import ProfileCover from './ProfileCover';
import ProfileForm from './ProfileForm';
import ProfilePanel from './ProfilePanel';

export default function ProfileUserContainer() {
  const [profileUser, setProfileUser] = useState({});
  const [statusWithAuthUser, setStatusWithAuthUser] = useState(STATUS_ME);
  const { authenticatedUser } = useAuth();

  const updateProfileUser = value => {
    setProfileUser({ ...profileUser, ...value });
  };
  return (
    <>
      <div className="bg-white block ">
        <div className="max-w-2xl mx-auto">
          {/* <!--Profile banner and avatar--> */}
          <div className="w-full">
            <ProfileCover coverImage={authenticatedUser.coverImage} />
            <ProfilePanel
              profileUser={profileUser}
              statusWithAuthUser={statusWithAuthUser}
              setStatusWithAuthUser={setStatusWithAuthUser}
              updateProfileUser={updateProfileUser}
            />
          </div>

          {/* <!-- Profile general information--> */}
          <div className="bg-white border border-gray-200  shadow dark:bg-gray-800 dark:border-gray-700 rounded-b-lg p-5 pt-12 flex flex-col">
            <ProfileForm />
          </div>
        </div>
      </div>
    </>
  );
}
