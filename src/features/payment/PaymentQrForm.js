import Qrpayment from '../../assets/images/Qrpayment.jpg';

export default function PaymentQrForm({ downloadImage, handleClickNext }) {
  return (
    <>
      <form>
        <div className="bg-gray-100 rounded-r-md flex flex-col items-center justify-center py-4">
          <div>
            <img
              className="w-[200px] h-[300px] border-0"
              src={Qrpayment}
              alt="qrCode"
            />
            <button
              className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-white mt-2 px-4 py-1 w-full rounded-md"
              onClick={downloadImage}
              type="button"
            >
              Download
            </button>
            <button
              className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white mt-2 px-4 py-1 w-full rounded-md"
              type="button"
              onClick={handleClickNext}
            >
              Next
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
