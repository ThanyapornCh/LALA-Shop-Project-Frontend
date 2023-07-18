import ItemCart from './ItemCart';
import Search from './Search';

export default function Header() {
  return (
    <nav className="relative absolute sticky  top-0 h-fit w-screen backdrop-blur-md bg-white/40 drop-shadow-lg space-y-5 px-7 py-2 ">
      <div className=" flex justify-between my-2 ">
        <Search />
        <ItemCart />
      </div>
    </nav>
  );
}
