export default function Counter() {
  return (
    <>
      <div className="flex justify-evenly py-2">
        <button
          type="button"
          className="flex justify-center items-center w-5 h-5 mx-2 bg-red-600 text-white font-medium text-lg rounded-sm"
        >
          -
        </button>
        0
        <button
          type="button"
          className="flex justify-center items-center  w-5 h-5 mx-2 bg-green-600 text-white font-medium text-lg rounded-sm"
        >
          +
        </button>
      </div>
    </>
  );
}
