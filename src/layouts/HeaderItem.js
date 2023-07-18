import Brand from './Brand';

export default function HeaderItem() {
  return (
    <>
      {/* ถ้าไปที่หน้าcart ให้โชว์ Brand แทน Search */}
      <Brand />
      <div className="rounded-full p-2 m-1 bg-gradient-to-br from-pink-500 to-yellow-500 text-white bold-2 shadow-xl font-medium drop-shadow-xl">
        Add To Cart
      </div>
    </>
  );
}
