import BrandAdmin from './BrandAdmin';
export default function HeaderAdmin() {
  return (
    <nav className="absolute sticky top-0 w-screen backdrop-blur-md bg-white/40 drop-shadow-lg space-y-5 px-7 py-2 ">
      <div className="flex justify-between my-2 ">
        <BrandAdmin />
      </div>
    </nav>
  );
}
