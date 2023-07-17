import background from '../../assets/images/sea.jpg';
import useOrder from '../../hooks/useOrder';

export default function MyBalanceCover() {
  const { checkOrder } = useOrder();

  function calTotal(lists) {
    let totalprice = 0;
    for (let checkOrder of lists) {
      if (checkOrder.orderStatus === 'paid') {
        let price = Number(checkOrder.totalPrice);
        totalprice += price;
      }
    }
    return totalprice;
  }
  let total = calTotal(checkOrder);
  return (
    <>
      <div className="top-0">
        <img className="w-full h-48 rounded-t-lg " src={background} />
        <div className="flex flex-col items-center absolute -mt-32 ml-32 bg-white/80  rounded-full px-6 py-5">
          <p className="text-gray-800 font-medium text-md z-20">THB {total}</p>
          <p className="text-gray-600 font-light text-sm z-20">my balance</p>
        </div>
      </div>
    </>
  );
}
