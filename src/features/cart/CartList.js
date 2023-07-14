import { Trash } from '../../assets/icon';
import Counter from '../../components/Counter';
import { useState } from 'react';
// import image from '../../assets/images/sun_cream.jpg';
// import DeleteCartAction from './DeleteCartAction';

export default function CartList({
  order,
  handleUpdateCart,
  handleDeleteCart,
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        <img
          className="flex justify-center object-cover"
          src={order.Product.image}
          width="60px"
        />
      </td>
      <td className=" whitespace-nowrap">
        <div className="flex flex-col p-2.5">
          <h1 className=" text-lg font-semibold text-slate-900 m-2">
            {order.Product.name}
          </h1>
          <p className="text-sm font-light text-slate-900 m-2">
            Price: THB {order.Product.price}
          </p>
          <Counter order={order} handleUpdateCart={handleUpdateCart} />
          <div className="flex justify-end">
            <button
              type="button"
              // onClick={() => setOpen(true)}
              onClick={() => handleDeleteCart(order.orderId, order.productId)}
              className="w-[30px] h-[30px] py-2 px-2 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              <div className="h-4 w-4 fill-white flex justify-center items-center">
                <Trash />
              </div>
            </button>
            {/* <DeleteCartAction
              open={open}
              onClose={() => setOpen(false)}
              onSuccess={() => setOpen(true)}
              handleDeleteCart={handleDeleteCart} 
            /> */}
          </div>
        </div>
      </td>
    </>
  );
}
