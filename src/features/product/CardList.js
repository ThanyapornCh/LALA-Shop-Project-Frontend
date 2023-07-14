import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import useOrder from '../../hooks/useOrder';

export default function CardList({
  product: { id, name, image, price, description },
}) {
  const { handleAddCart } = useOrder();
  const [addCart, setAddCart] = useState('');
  const navigate = useNavigate();

  const handleClickAdd = () => {
    handleAddCart(id);
    setAddCart(true);
    navigate('/cart');
  };
  return (
    <>
      <div className="bg-white max-w-sm  max-h-64">
        <div className="p-2">
          <p className="text-base uppercase text-gray-900 font-bold m-2">
            {name}
          </p>

          <p className="text-xs text-gray-300 mb-4">{description}</p>
          <img
            className="flex justify-center items-center z-index-[-10] w-40  object-contain  object-center  p-1"
            src={image}
            alt="product"
          />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center  pt-10">
        <p className="text-gray-700 text-sm font-semibold m-2 ">THB {price} </p>

        <button
          className="transition ease-in-out delay-200 p-2 w-full  m-2 bg-gradient-to-br from-purple-500 to-pink-500 hover:drop-shadow-md duration-300  text-white bold-3  rounded-full shadow-xl  text-sm "
          onClick={handleClickAdd}
        >
          Add To Cart
        </button>
      </div>
    </>
  );
}
