import OrderStatus from './OrderStatus';

export default function OrderStatusContainer() {
  return (
    <>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8 ">
            <div className="overflow-hidden">
              <OrderStatus />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
