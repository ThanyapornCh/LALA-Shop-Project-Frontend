import CoverImage from '../../../components/CoverImage';

export default function ProfileAdminCover({ coverImage }) {
  return (
    <>
      <div className=" rounded-t-lg">
        <CoverImage src={coverImage} />
      </div>
    </>
  );
}
