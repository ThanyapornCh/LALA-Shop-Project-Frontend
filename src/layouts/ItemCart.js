import { Cart } from '../assets/icon';
import useOrder from '../hooks/useOrder';

export default function ItemCart() {
  const { order } = useOrder();
  const countorder = order.length;
  return (
    <>
      <div className="flex flex-row text-xl w-fit h-fit py-2  mx-2 border-2 border-slate-300 hover:border-pink-300 rounded-full relative">
        <div className=" fill-pink-500 mx-3  ">
          <Cart />
        </div>
        <div className="absolute -top-2 -right-1.5 bottom-auto left-auto w-6 h-6 py-1 px-1 leading-none text-center whitespace-nowrap align-baseline font-bold bg-pink-500  text-white  text-sm rounded-full">
          {countorder}
        </div>
      </div>
    </>
  );
}
