import Avatar from '../../../components/Avatar';

export default function ProfileAdminInfo({ profileUser: { profileImage } }) {
  return (
    <div className="flex flex-wrap items-center h-28 w-40   ">
      <Avatar size="20" src={profileImage} />
    </div>
  );
}
