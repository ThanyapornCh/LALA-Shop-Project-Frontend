export default function MyBalanceForm() {
  return (
    <>
      <div className="flex  flex-col">
        <h1 className="text-gray-600 font-medium text-lg py-2">History</h1>
        <button className="flex flex-wrap w-full    border-gray-200  shadow dark:bg-gray-800 dark:border-gray-700 hover:border-indigo-300  border-2 p-3 rounded-lg">
          <span className=" text-gray-600 font-medium text-base p-2 ml-6">
            <h2 className="font-base text-gray-600">1</h2>
            <div className="flex flex-col">
              <h1 className="font-base text-gray-600">Sala fetdrek</h1>
              <p className="font-light text-gray-300">25 Month </p>
            </div>
            <p className="text-base teaxt-gray-600 font-normal">THB 1500</p>
          </span>
        </button>
      </div>
    </>
  );
}
