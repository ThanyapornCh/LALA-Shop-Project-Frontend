import CoverImage from '../../components/CoverImage';

export default function ProfileCover({ coverImage }) {
  return (
    <>
      <div className=" rounded-t-lg">
        <CoverImage src={coverImage} />
      </div>
    </>
  );
}
