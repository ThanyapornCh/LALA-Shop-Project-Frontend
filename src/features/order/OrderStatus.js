import useOrder from '../../hooks/useOrder';
import OrderStatusList from './OrderStatusList';

export default function OrderStatus() {
  // const {  order } = useOrder();
  return (
    <>
      <table className="min-w-full">
        <thead className="bg-white border-b">
          <tr>
            <th
              scope="col"
              className="text-sm font-medium text-gray-900 pl-6 py-4 text-left"
            >
              Orders
            </th>
            <th
              scope="col"
              className="text-sm font-medium text-gray-900 pl-6 py-4 text-left"
            >
              Product
            </th>

            <th
              scope="col"
              className="text-sm font-medium text-gray-900 pl-6 py-4 text-left"
            >
              Total Price
            </th>
            <th
              scope="col"
              className="text-sm font-medium text-gray-900 pl-6 py-4 text-left"
            >
              Order Status
            </th>
          </tr>
        </thead>

        <OrderStatusList />
      </table>
    </>
  );
}
