import React, { useState } from 'react';
import useProduct from '../hooks/useProduct';
import SearchList from './SearchList';
import { CloseIcon, SearchIcon } from '../assets/icon';

export default function Search() {
  const { product, setProduct, search, setSearch } = useProduct();

  // const handleFilter = e => {
  //   const searchWord = e.target.value;
  //   setSearch(searchWord);
  //   const newFilter = product.filter(el => {
  //     return el.name.toLowerCase().includes(search.toLowerCase());
  //   });

  //   if (searchWord === '') {
  //     setProduct([]);
  //   } else {
  //     setProduct(newFilter);
  //   }
  // };

  const handleFilter = e => {
    const newFilter = e.target.value.toLowerCase();
    setSearch(newFilter);
  };

  // const clearInput = () => {
  //   setProduct([]);
  //   setSearch('');
  // };

  // const handleSubmitForm = e => {
  //   e.preventDefault();
  // };

  return (
    <>
      {/* <form onSubmit={handleSubmitForm}> */}
      <label htmlFor="default-search" className="sr-only">
        Search
      </label>
      <div className="relative w-full">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          {/* {product.length == 0 ? ( */}
          <SearchIcon />
          {/* ) : (
              <button
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                type="button"
                onClick={clearInput}
              >
                <div className="text-pink-500 h-5 w-5">
                  <CloseIcon />
                </div>
              </button>
            )} */}
        </div>
        <input
          type="search"
          id="search-input"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Enter your keyword to search"
          value={search}
          onChange={handleFilter}
        />

        {product && product.length !== 0 && <SearchList product={product} />}

        <button
          type="submit"
          id="search"
          className="absolute inset-y-0 right-0 inline-flex items-center py-2.5 px-3 ml-2 text-sm font-medium text-white bg-pink-600 
          hover:bg-gradient-to-r from-green-400 to-blue-500 hover:drop-shadow-md duration-300 ease-in rounded-lg "
        >
          Search
        </button>
      </div>
      {/* </form> */}
    </>
  );
}
