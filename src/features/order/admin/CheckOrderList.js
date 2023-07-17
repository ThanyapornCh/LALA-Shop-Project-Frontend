export default function CheckOrderList({ checkOrder, idx }) {
  return (
    <>
      <tbody>
        <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
          <td className="pl-7 selection:pr-32 py-2 whitespace-nowrap text-sm font-medium text-gray-400">
            {idx + 1}
          </td>
          <td className="pl-10 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
            {checkOrder.userId}
          </td>
          <td className="pl-7 py-2  text-sm text-blue-700 hover:underline dark:text-blue-500">
            THB {checkOrder.totalPrice}
          </td>
          <td
            className={`pl-10 py-2 whitespace-nowrap text-sm font-medium ${
              checkOrder.orderStatus === 'paid'
                ? 'text-green-500'
                : 'text-red-500'
            } uppercase`}
          >
            {checkOrder.orderStatus}
          </td>
        </tr>
      </tbody>
    </>
  );
}
