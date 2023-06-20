import { Link } from 'react-router-dom';

export default function ProfileAdminForm() {
  return (
    <>
      <form>
        <div className="flex flex-col mt-4 space-x-3 md:mt-6  ">
          <div className="mb-2  h-5 w-40">
            <h2 className="font-bold mb-0">Admin Book</h2>
          </div>
          <div className="flex justify-center items-center my-2">
            <Link to="/checkorder">
              <button
                className=" font-bold rounded-3xl px-10 py-2 text-white bg-blue-500
                hover:bg-gradient-to-r from-green-400 to-sky-500 hover:drop-shadow-md duration-300 ease-in "
                type="button"
              >
                Order Status
              </button>
            </Link>
          </div>
          <div className="flex justify-center  items-center my-2">
            <Link to="/addproduct">
              <button
                className="font-bold rounded-3xl px-10 py-2 text-white bg-sky-500
                hover:bg-gradient-to-r from-green-400 to-sky-500 hover:drop-shadow-md duration-300 ease-in "
                type="button"
              >
                Add Product
              </button>
            </Link>
          </div>
          <div className="flex justify-center items-center my-2">
            <button
              className=" font-bold rounded-3xl px-10 py-2 text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 duration-300 ease-in "
              type="button"
            >
              Log out
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
