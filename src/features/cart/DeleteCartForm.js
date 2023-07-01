export default function DeleteCartForm() {
  return (
    <>
      <div className="flex flex-col whitespace-pre-wrap ">
        <p className="items-center text-gray-600 font-semibold text-xl  py-2 ">
          What would you need to delete this item?
        </p>
        <div className="flex justify-end  place-content-end">
          <button
            className=" rounded-md p-2 m-2 bg-gradient-to-br from-red-600 to-red-500 text-white bold-1 shadow-xl font-medium drop-shadow-xl"
            type="button"
          >
            Delete
          </button>
          <button
            className=" rounded-md p-2 m-2 bg-gradient-to-br from-orange-600 to-yellow-400 text-white bold-1 shadow-xl font-medium drop-shadow-xl"
            type="button"
          >
            Cancel
          </button>
        </div>
      </div>
    </>
  );
}
