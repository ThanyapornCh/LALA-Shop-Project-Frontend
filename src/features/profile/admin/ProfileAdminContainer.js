import ProfileAdminCover from './ProfileAdminCover';
import ProfileAdminForm from './ProfileAdminForm';
import ProfileAdminPanel from './ProfileAdminPanel';

export default function ProfileAdminContainer() {
  return (
    <>
      <div className="bg-white block ">
        <div className="max-w-2xl mx-auto">
          <div className="w-full">
            <ProfileAdminCover />
            <ProfileAdminPanel />
          </div>
          <div className="bg-primary border border-primary rounded-b-lg p-5 pt-12 flex flex-col">
            <ProfileAdminForm />
          </div>
        </div>
      </div>
    </>
  );
}
