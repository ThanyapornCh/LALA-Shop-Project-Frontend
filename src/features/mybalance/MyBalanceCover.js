import CoverImage from '../../components/CoverImage';
import background from '../../assets/images/sea.jpg';

export default function MyBalanceCover() {
  return (
    <>
      <div className="top-0">
        <img className="w-full h-48 rounded-t-lg " src={background} />
        <div className="flex flex-col items-center absolute -mt-32 ml-32 bg-white/80  rounded-full px-6 py-5">
          <p className="text-gray-800 font-medium text-md z-20">THB 1500</p>
          <p className="text-gray-600 font-light text-sm z-20">my balance</p>
        </div>
      </div>
    </>
  );
}
