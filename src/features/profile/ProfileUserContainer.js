import { useEffect, useState } from 'react';
import { STATUS_ME } from '../../config/constant';
import ProfileCover from './ProfileCover';
import ProfileForm from './ProfileForm';
import ProfilePanel from './ProfilePanel';
import { useParams } from 'react-router-dom';
import * as userApi from '../../apis/user-api';
import useAuth from '../../hooks/useAuth';

export default function ProfileUserContainer() {
  const [profileUser, setProfileUser] = useState({});
  const [statusWithAuthUser, setStatusWithAuthUser] = useState(STATUS_ME);
  const { authenticatedUser } = useAuth();

  // const { userId } = useParams();
  // console.log(userId);

  // useEffect(() => {
  //   const fetchProfileUser = async () => {
  //     const res = await userApi.getProfileUser(userId);
  //     setProfileUser(res.data.user);
  //     setStatusWithAuthUser(res.data.statusWithAuthUser);
  //   };
  //   fetchProfileUser();
  // }, [userId]);

  const updateProfileUser = value => {
    setProfileUser({ ...profileUser, ...value });
  };
  return (
    <>
      <div className="bg-white block ">
        <div className="max-w-2xl mx-auto">
          {/* <!--
            ! ------------------------------------------------------------
            ! Profile banner and avatar
            ! ------------------------------------------------------------
            !--> */}
          <div className="w-full">
            <ProfileCover coverImage={authenticatedUser.coverImage} />
            <ProfilePanel
              profileUser={profileUser}
              statusWithAuthUser={statusWithAuthUser}
              setStatusWithAuthUser={setStatusWithAuthUser}
              updateProfileUser={updateProfileUser}
            />
          </div>

          {/* <!--
            ! ------------------------------------------------------------
            ! Profile general information
            ! ------------------------------------------------------------
            !--> */}
          <div className="bg-primary border border-primary rounded-b-lg p-5 pt-12 flex flex-col">
            {/* <div className="mb-1 bg-gray-200 border border-gray-300 h-5 w-40"></div>
            <div className="mb-1 bg-gray-200 border border-gray-300 h-5 w-96"></div>
            <div className="text-sm mt-2 text-gray-200">
              <div className="flex flex-row ml-auto space-x-2 items-center">
                <div className="mb-1 bg-gray-200 border border-gray-300 h-5 w-20"></div>
                <div className="bg-blue-200 rounded-full h-1 w-1"></div>
                <div className="mb-1 bg-gray-200 border border-gray-300 h-5 w-20"></div>
              </div>
            </div>

            <div className="pt-8 flex gap-8">
              <div className="flex flex-col">
                <div className="mb-1 bg-gray-200 border border-gray-300 h-5 w-20"></div>
                <div className="mb-1 bg-gray-200 border border-gray-300 h-5 w-20"></div>
              </div>
              <div className="flex flex-col">
                <div className="mb-1 bg-gray-200 border border-gray-300 h-5 w-20"></div>
                <div className="mb-1 bg-gray-200 border border-gray-300 h-5 w-20"></div>
              </div>
              <div className="flex flex-col">
                <div className="mb-1 bg-gray-200 border border-gray-300 h-5 w-20"></div>
                <div className="mb-1 bg-gray-200 border border-gray-300 h-5 w-20"></div>
              </div>
              <div className="flex flex-col">
                <div className="mb-1 bg-gray-200 border border-gray-300 h-5 w-20"></div>
                <div className="mb-1 bg-gray-200 border border-gray-300 h-5 w-20"></div>
              </div>
            </div>
            <div className="py-5 break-all bbcode">
              <div className="mb-1 bg-gray-200 border border-gray-300 h-5 w-44"></div>
              <div className="mb-1 bg-gray-200 border border-gray-300 h-5 w-full "></div>
            </div> */}
            <ProfileForm />
          </div>
        </div>
      </div>
    </>
  );
}
