import image from '../assets/images/sun_cream.jpg';

export default function Card() {
  return (
    <div className="flex flex-col items-center border border-gray-200  shadow dark:bg-gray-800 dark:border-gray-700 p-3 rounded-lg">
      <div className="bg-white max-w-sm  max-h-64">
        <div className="p-2">
          <p className="text-base uppercase text-gray-900 font-bold m-2">
            Sleeping Mask
          </p>

          <p className="text-xs text-gray-300 mb-4"> Lorem jcdcndjcndjndvnu</p>
          <img
            className="flex justify-center items-center z-index-[-10]   object-center  p-1"
            src={image}
            alt="product"
          />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center  pt-10">
        <p className="text-gray-700 text-sm font-semibold m-2 ">THB 500 </p>
        <button className="transition ease-in-out delay-200 p-2 w-full  m-2 bg-gradient-to-br from-purple-500 to-pink-500 hover:drop-shadow-md duration-300  text-white bold-3  rounded-full shadow-xl  text-sm ">
          Add To Cart
        </button>
      </div>
    </div>
  );
}
