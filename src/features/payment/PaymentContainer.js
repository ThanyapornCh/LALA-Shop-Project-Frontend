import PaymentAction from './PaymentAction';

export default function PaymentContainer() {
  return (
    <>
      <div className="flex flex-col">
        <h1 className="flex justify-center items-center bg-clip-text text-transparent  bg-gradient-to-r from-purple-500 to-pink-500  font-medium text-xl py-3">
          Payment
        </h1>
        <div className="block w-full border border-gray-200  shadow dark:bg-gray-800 dark:border-gray-700 p-3 rounded-lg ">
          <p className="text-gray-700 text-base font-normal pb-2">
            Select payment method
          </p>
          <PaymentAction />
        </div>
      </div>
    </>
  );
}
