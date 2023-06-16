import ProfileAction from './ProfileAction';
import ProfileInfo from './ProfileInfo';

export default function ProfilePanel() {
  return (
    <div className="absolute -mt-12 ml-5">
      <ProfileInfo />
      <ProfileAction />
    </div>
  );
}
