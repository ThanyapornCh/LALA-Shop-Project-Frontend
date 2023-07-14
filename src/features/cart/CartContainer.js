import CartList from './CartList';
import TotalPrice from './TotalPrice';
import useOrder from '../../hooks/useOrder';

export default function CartContainer() {
  const { order, handleUpdateCart, handleDeleteCart, fetchOrder } = useOrder();

  return (
    <>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8 mb-80 ">
            <div className="overflow-hidden">
              <table className="min-w-full">
                <thead className="bg-white border-b">
                  <tr>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Orders
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Products
                    </th>
                    {/* <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Price
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Quantity
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Action
                    </th> */}
                  </tr>
                </thead>
                <tbody>
                  {order.map((el, idx) => (
                    <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {idx + 1}
                      </td>
                      <CartList
                        key={el.id}
                        order={el}
                        handleUpdateCart={handleUpdateCart}
                        handleDeleteCart={handleDeleteCart}
                        fetchOrder={fetchOrder}
                      />
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="flex justify-end p-4 ">
                <div className="block p-6 rounded-lg w-full border border-gray-200  shadow dark:bg-gray-800 dark:border-gray-700 bg-white max-w-xl">
                  <div className="col-1 text-right">
                    <TotalPrice order={order} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
