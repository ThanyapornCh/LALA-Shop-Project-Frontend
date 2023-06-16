import Avatar from '../../components/Avatar';

export default function ProfileImageForm() {
  return (
    <>
      <div className=" flex flex-col items-center">
        <div>
          <h5 className="mb-1">Profile Picture</h5>
          <input
            type="file"
            className="block w-full text-sm text-slate-500 border border-slate-400 rounded-md
          file:mr-4 file:py-1 file:px-4
          file:rounded-full file:border-0
          file:text-sm file:font-semibold
          file:bg-violet-50 file:text-violet-700
          hover:file:bg-violet-100"
          />
        </div>
        <div className="flex flex-wrap">
          <button className="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 rounded-md p-2 m-2 text-white">
            Save
          </button>
          <button className="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 rounded-md p-2 m-2 text-white">
            Cancel
          </button>
          <button className="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 rounded-md p-2 m-2 text-white">
            Edit
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center text-center mt-3">
        <span>
          <Avatar />
        </span>
      </div>
    </>
  );
}
