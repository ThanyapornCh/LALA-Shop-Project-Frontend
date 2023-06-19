import background from '../assets/images/sea.jpg';

export default function CoverImage({ src }) {
  return <img className="w-full  h-48 " src={src || background} alt="cover" />;
}
