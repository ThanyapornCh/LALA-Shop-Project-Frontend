import useProduct from '../hooks/useProduct';
import { SearchIcon } from '../assets/icon';

export default function Search() {
  const { search, setSearch } = useProduct();

  const handleFilter = e => {
    const newFilter = e.target.value.toLowerCase();
    setSearch(newFilter);
  };

  return (
    <>
      <label htmlFor="default-search" className="sr-only">
        Search
      </label>
      <div className="relative w-full">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <SearchIcon />
        </div>
        <input
          type="search"
          id="search-input"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Enter your keyword to search"
          value={search}
          onChange={handleFilter}
        />
      </div>
    </>
  );
}
