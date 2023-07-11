export default function SearchList({ product: { name } }) {
  return (
    <>
      <div className="flex justify-center items-center bg-white">
        <p className="text-sm text-gray-800">{name}</p>
      </div>
    </>
  );
}
