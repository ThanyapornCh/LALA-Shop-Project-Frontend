// import image from '../../assets/images/sun_cream.jpg';

export default function OrderStatusList({ order, idx }) {
  return (
    <>
      <tbody>
        <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
          <td className="pl-7 selection:pr-32 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
            {idx + 1}
          </td>
          <td className="pl-5 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
            <img
              className="flex justify-center object-cover"
              src={order.Product.image}
              width="60px"
            />
            <p className="text-gray-600 text-sm">{order.Product.name}</p>
          </td>

          <td className="pl-7 py-2  text-sm text-blue-700 hover:underline dark:text-blue-500">
            THB {order.Product.price}
            <p className="text-xs text-gray-400 font-light">
              x {order.quantity} items
            </p>
          </td>
          <td className="pl-7 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
            <span className="text-sm font-medium text-red-500 uppercase">
              Cart
            </span>
          </td>
        </tr>
      </tbody>
    </>
  );
}
