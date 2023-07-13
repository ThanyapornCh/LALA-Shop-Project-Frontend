export default function Counter({ order, handleUpdateCart }) {
  const handleClickIncrement = () => {
    handleUpdateCart(order.id, { method: 'add' }, order.quantity);
  };

  const handleClickDecrement = () => {
    handleUpdateCart(order.id, { method: 'minus' }, order.quantity);
  };
  return (
    <>
      <div className="flex justify-evenly py-2">
        <button
          type="button"
          className="flex justify-center items-center w-5 h-5 mx-2 bg-red-600 text-white font-medium text-lg rounded-sm"
          onClick={handleClickDecrement}
        >
          -
        </button>
        {order.quantity}
        <button
          type="button"
          className="flex justify-center items-center  w-5 h-5 mx-2 bg-green-600 text-white font-medium text-lg rounded-sm"
          onClick={handleClickIncrement}
        >
          +
        </button>
      </div>
    </>
  );
}
