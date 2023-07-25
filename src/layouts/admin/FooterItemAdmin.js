import { Link } from 'react-router-dom';
import { User, Cash } from '../../assets/icon';
export default function FooterItemAdmin() {
  return (
    <>
      <Link to="/admin/mybalance">
        <button className="flex-col m-2 p-2 text-3xl ">
          <div className="w-[30px] h-[30px] fill-purple-800 mx-3">
            <Cash />
          </div>
        </button>
      </Link>
      <Link to="/admin/profile">
        <button className="flex-col m-2 p-2 text-3xl ">
          <div className="w-[30px] h-[30px] fill-purple-800 mx-3">
            <User />
          </div>
        </button>
      </Link>
    </>
  );
}
