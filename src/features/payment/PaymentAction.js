import { QrCode } from '../../assets/icon';

export default function PaymentAction() {
  return (
    <>
      <div>
        <button className="flex justify-start w-full    border-gray-200  shadow dark:bg-gray-800 dark:border-gray-700 hover:border-indigo-300  border-2 p-3 rounded-lg">
          <div className=" fill-gray-400 text-lg mx-3 border-gray-600 border-1 mr-2 py-2">
            <QrCode />
          </div>
          <span className="text-gray-600 font-medium text-base p-2 ml-6">
            Qr code payment
          </span>
        </button>
      </div>
    </>
  );
}
