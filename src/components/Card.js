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
      {/* <div className="flex items-center justify-between"> */}
      {/* </div> */}
    </div>

    // <----->
    // <div class="w-screen h-screen flex justify-center items-center">
    //   <div class="container mx-auto max-w-sm w-full p-4 sm:w-1/2">
    //     <div class="card flex flex-col justify-center p-10 bg-white rounded-lg shadow-2xl">
    //       <div class="prod-title">
    //         <p class="text-2xl uppercase text-gray-900 font-bold">Puma Shoes</p>
    //         <p class="uppercase text-sm text-gray-400">
    //           The best shoes in the marketplace
    //         </p>
    //       </div>
    //       <div class="prod-img">
    //         <img
    //           src="https://unsplash.com/photos/IJjfPInzmdk/download?force=true&w=1920"
    //           class="w-full object-cover object-center"
    //         />
    //       </div>
    //       <div class="prod-info grid gap-10">
    //         <div>
    //           <ul class="flex flex-row justify-center items-center">
    //             <li class="mr-4 last:mr-0">
    //               <span class="block p-1 border-2 border-gray-500 rounded-full transition ease-in duration-300">
    //                 <a
    //                   href="#blue"
    //                   class="block w-6 h-6 bg-blue-900 rounded-full"
    //                 ></a>
    //               </span>
    //             </li>
    //             <li class="mr-4 last:mr-0">
    //               <span class="block p-1 border-2 border-white hover:border-gray-500 rounded-full transition ease-in duration-300">
    //                 <a
    //                   href="#yellow"
    //                   class="block w-6 h-6 bg-yellow-500 rounded-full"
    //                 ></a>
    //               </span>
    //             </li>
    //             <li class="mr-4 last:mr-0">
    //               <span class="block p-1 border-2 border-white hover:border-gray-500 rounded-full transition ease-in duration-300">
    //                 <a
    //                   href="#red"
    //                   class="block w-6 h-6 bg-red-500 rounded-full"
    //                 ></a>
    //               </span>
    //             </li>
    //             <li class="mr-4 last:mr-0">
    //               <span class="block p-1 border-2 border-white hover:border-gray-500 rounded-full transition ease-in duration-300">
    //                 <a
    //                   href="#green"
    //                   class="block w-6 h-6 bg-green-500 rounded-full"
    //                 ></a>
    //               </span>
    //             </li>
    //           </ul>
    //         </div>
    //         <div class="flex flex-col md:flex-row justify-between items-center text-gray-900">
    //           <p class="font-bold text-xl">65 $</p>
    //           <button class="px-6 py-2 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none">
    //             Add to cart
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}
