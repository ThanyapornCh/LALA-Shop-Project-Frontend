export default function SlipPayment({ slipUrl }) {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <img
          className="object-center object-scale-down h-80 w-48 "
          src={slipUrl}
        />
        <div className="text-blue-500 font-light text-lg ">
          Slip URL from user to be successfully!
        </div>
      </div>
    </>
  );
}
