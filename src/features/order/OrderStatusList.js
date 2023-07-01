import image from '../../assets/images/sun_cream.jpg';

export default function OrderStatusList() {
  return (
    <>
      <tbody>
        <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
          <td className="pl-7 selection:pr-32 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
            1
          </td>
          <td className="pl-5 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
            <img
              className="flex justify-center object-cover"
              src={image}
              width="60px"
            />
            <p className="text-gray-600 text-sm">Cream</p>
          </td>

          <td className="pl-7 py-2  text-sm text-blue-700 hover:underline dark:text-blue-500">
            THB 2000
            <p className="text-xs text-gray-400 font-light"> 2 items</p>
          </td>
          <td className="pl-7 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
            <span className="text-sm font-medium text-green-500"> Paid </span>
          </td>
        </tr>
      </tbody>
    </>
  );
}
