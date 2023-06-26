export default function AddProduct() {
  return (
    <div className="flex justify-center items-center">
      <form>
        <div
          onClick={e => e.stopPropagation()}
          className=" p-1 rounded-lg bg-white max-w-xl"
        >
          <div className="flex flex-col space-y-2">
            <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
              Brand name
              <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option selected>Choose a brand</option>
                <option>Laneigh</option>
                <option>Etude</option>
                <option>Aness</option>
              </select>
            </label>
            <label className="block ">
              <span className="block text-sm font-medium  text-gray-900 ">
                Image
              </span>
              <input
                className="w-full  font-light text-base   text-blue-700  rounded-md bg-white bg-clip-padding    border border-solid border-gray-300   transition  ease-in-out  m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                type="file"
              />
            </label>
            <label className="block">
              <span className="block text-sm font-medium  text-gray-900 ">
                Name
              </span>
              <input
                className="w-full text-black px-2 py-1 rounded-md border border-slate-400"
                type="text"
                placeholder="Enter name"
                name="name"
              />
            </label>
            <label className="block">
              <span className="block text-sm font-medium  text-gray-900 ">
                Description
              </span>
              <input
                className="w-full px-2 py-1 text-black rounded-md border border-slate-400"
                type="text"
                placeholder="Enter description"
                name="description"
              />
            </label>
            <label className="block">
              <span className="block text-sm font-medium  text-gray-900 ">
                Price
              </span>
              <input
                className="w-full px-2 py-1 text-black rounded-md border border-slate-400"
                type="number"
                placeholder="Enter price"
                name="price"
              />
            </label>
            <label className="block ">
              <span className="block  text-sm font-medium  text-gray-900 ">
                Quantity
              </span>
              <input
                className="w-full px-2 py-1 text-black rounded-md border border-slate-400"
                type="number"
                placeholder="Enter quantity"
                name="quantity"
              />
            </label>
            <button
              className=" rounded-full p-2 bg-gradient-to-br from-green-500 to-sky-500 text-white bold-2 shadow-xl font-medium drop-shadow-xl"
              type="button"
            >
              Confirm
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
