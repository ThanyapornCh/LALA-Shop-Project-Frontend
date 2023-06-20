import { Link } from 'react-router-dom';
import { User, Cash } from '../../assets/icon';
export default function FooterItemAdmin() {
  return (
    <>
      <Link to="/payment">
        <button className="flex-col m-2 p-2 text-3xl ">
          <div className="w-[30px] h-[30px] fill-pink-500 mx-3">
            <Cash />
          </div>
        </button>
      </Link>
      <Link to="/profieadmin">
        <button className="flex-col m-2 p-2 text-3xl ">
          <div className="w-[30px] h-[30px] fill-pink-500 mx-3">
            <User />
          </div>
        </button>
      </Link>
    </>
  );
}
