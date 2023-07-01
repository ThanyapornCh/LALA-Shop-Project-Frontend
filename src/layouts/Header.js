import HeaderItem from './HeaderItem';

export default function Header() {
  return (
    <nav className="relative absolute sticky  top-0  w-screen backdrop-blur-md bg-white/40 drop-shadow-lg space-y-5 px-7 py-2 ">
      <HeaderItem />
    </nav>
  );
}
