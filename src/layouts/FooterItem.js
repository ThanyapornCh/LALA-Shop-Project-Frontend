import { Link } from 'react-router-dom';
import { BagShop, Cash, Home, User } from '../assets/icon';

export default function FooterItem() {
  return (
    <>
      <Link to="/">
        <button className="flex-col m-2 p-2 text-3xl ">
          <div className="w-[30px] h-[30px] fill-pink-500 mx-3">
            <Home />
          </div>
        </button>
      </Link>

      <Link to="/user/cart">
        <button className="flex-col m-2 p-2 text-3xl ">
          <div className="w-[30px] h-[30px] fill-pink-500 mx-3">
            <BagShop />
          </div>
        </button>
      </Link>
      <Link to="/user/payment">
        <button className="flex-col m-2 p-2 text-3xl ">
          <div className="w-[30px] h-[30px] fill-pink-500 mx-3">
            <Cash />
          </div>
        </button>
      </Link>
      <Link to="/user/profile">
        <button className="flex-col m-2 p-2 text-3xl ">
          <div className="w-[30px] h-[30px] fill-pink-500 mx-3">
            <User />
          </div>
        </button>
      </Link>
    </>
  );
}
