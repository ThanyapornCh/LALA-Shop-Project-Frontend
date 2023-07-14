import CardList from '../features/product/CardList';

export default function Card({ product, id }) {
  return (
    <div className="max-w-sm flex flex-col items-center border border-gray-200  shadow dark:bg-gray-800 dark:border-gray-700 p-3 rounded-lg">
      <CardList product={product} />
    </div>
  );
}
