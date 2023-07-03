import FooterItemAdmin from './FooterItemAdmin';

export default function FooterAdmin() {
  return (
    <footer
      className="fixed w-full h-16 z-20 bg-white border-t border-gray-200
              left-0 bottom-0 right-0 text-2xl   md:items-center md:justify-between"
    >
      <div className="flex justify-around ">
        <FooterItemAdmin />
      </div>
    </footer>
  );
}
