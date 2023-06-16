import useAuth from '../../hooks/useAuth';

export default function ProfileForm() {
  const { logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <form>
        <div className="flex flex-col mt-4 space-x-3 md:mt-6  ">
          <div className="mb-1  h-5 w-40">
            <h2 className="font-bold mb-0"> Maria R.</h2>
          </div>
          <div className="flex justify-center items-center my-2">
            <button
              className="w-full font-bold rounded-3xl px-10 py-2 text-white bg-blue-500
              hover:bg-gradient-to-r from-green-400 to-sky-500 hover:drop-shadow-md duration-300 ease-in "
              type="button"
            >
              Order Status
            </button>
          </div>
          <div className="flex justify-center  items-center my-2">
            <button
              className="w-full font-bold rounded-3xl px-10 py-2 text-white bg-sky-500
              hover:bg-gradient-to-r from-green-400 to-sky-500 hover:drop-shadow-md duration-300 ease-in "
              type="button"
            >
              Payment
            </button>
          </div>
          <div className="flex justify-center items-center my-2">
            <button
              className="w-full font-bold rounded-3xl px-10 py-2 text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 duration-300 ease-in "
              type="button"
              onClick={handleLogout}
            >
              Log out
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
