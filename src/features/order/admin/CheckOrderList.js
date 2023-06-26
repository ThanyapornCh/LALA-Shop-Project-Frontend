export default function CheckOrderList() {
  return (
    <>
      <tbody>
        <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
          <td className="pl-7 selection:pr-32 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
            1
          </td>
          <td className="pl-10 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
            2
          </td>
          <td className="pl-7 py-2  text-sm text-blue-700 hover:underline dark:text-blue-500">
            1000 Bath
          </td>
          <td className="pl-10 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
            Paid
          </td>
        </tr>
      </tbody>
    </>
  );
}
