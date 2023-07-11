import useProduct from '../hooks/useProduct';

export default function SearchList({ input, product }) {
  const handleClickSearch = e => {
    alert(`You selected ${product}!`);
  };
  return (
    <>
      <div
        className={`z-10 ${
          input ? 'block' : 'hidden'
        } bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}
      >
        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
          <li>
            <button
              className="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white "
              onClick={handleClickSearch}
            >
              {product.slice(0, 15).map(el => (
                <p
                  key={el.id}
                  className="text-sm text-gray-800 inline-flex items-center"
                >
                  {el.name}
                </p>
              ))}
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}
