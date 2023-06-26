import CheckOrderList from './CheckOrderList';

export default function CheckOrder() {
  return (
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
            User Id
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
      <CheckOrderList />
    </table>
  );
}
