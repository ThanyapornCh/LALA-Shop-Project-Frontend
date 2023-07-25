import { Link } from 'react-router-dom';

export default function Totalprice({ order }) {
  function calTotal(lists) {
    let totalprice = 0;
    for (let product of lists) {
      let price = Number(product.Product.price);
      let quantity = product.quantity;
      totalprice += price * quantity;
      console.log(price, quantity);
    }
    return totalprice;
  }
  let total = calTotal(order);
  return (
    <>
      <h5 className=" text-gray-900 text-xl leading-tight font-medium mb-2">
        Total
      </h5>
      <p> THB {total} </p>

      <Link to="/user/payment">
        <button
          type="button"
          className=" rounded-full py-2 px-3 m-1 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-green-400 hover:to-blue-500 text-white bold-2 shadow-xl font-medium drop-shadow-xl"
        >
          Buy Now
        </button>
      </Link>
    </>
  );
}
