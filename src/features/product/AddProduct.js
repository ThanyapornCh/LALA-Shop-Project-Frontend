import useClickFileInput from '../../hooks/useClickFileInput';

import * as adminApi from '../../apis/admin-api';
import { createContext } from 'react';
import useProduct from '../../hooks/useProduct';

export default function AddProduct({
  product,
  newProduct,
  newProductImage,
  handleClickSave,
  brand,
  onChangeFileInput,
  handleNewImage,
  setClose,
  setOptions,
}) {
  // const { newProduct, setNewProduct, setNewProductImage, createProduct } =
  //   useProduct();

  const { file, ref, openFileInput, onCancel } = useClickFileInput();

  return (
    <form>
      <div className="flex justify-center items-center">
        <div
          onClick={e => e.stopPropagation()}
          className=" p-1 rounded-lg bg-white max-w-xl"
        >
          <div className="flex flex-col space-y-2">
            <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
              Brand name
              <select
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                onChange={e => setOptions(e.target.value)}
              >
                {/* <option>Choose a brand</option> */}
                {brand.map(el => (
                  <option value={el.id}>{el.brandName}</option>
                ))}
              </select>
            </label>
            <label className="block ">
              <span className="block text-sm font-medium  text-gray-900 ">
                Image
              </span>
              <input
                onChange={handleNewImage}
                value={newProductImage.image}
                ref={ref}
                className="w-full  font-light text-base   text-blue-700  rounded-md bg-white bg-clip-padding    border border-solid border-gray-300   transition  ease-in-out  m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                type="file"
              />
            </label>
            <label className="block">
              <span className="block text-sm font-medium  text-gray-900 ">
                Name
              </span>
              <input
                className="w-full text-black px-2 py-1 rounded-md border border-slate-400"
                type="text"
                placeholder="Enter name"
                name="name"
                value={newProduct.name}
                onChange={onChangeFileInput}
              />
            </label>
            <label className="block">
              <span className="block text-sm font-medium  text-gray-900 ">
                Description
              </span>
              <input
                className="w-full px-2 py-1 text-black rounded-md border border-slate-400"
                type="text"
                placeholder="Enter description"
                name="description"
                value={newProduct.description}
                onChange={onChangeFileInput}
              />
            </label>
            <label className="block">
              <span className="block text-sm font-medium  text-gray-900 ">
                Price
              </span>
              <input
                className="w-full px-2 py-1 text-black rounded-md border border-slate-400"
                type="number"
                placeholder="Enter price"
                name="price"
                value={newProduct.price}
                onChange={onChangeFileInput}
              />
            </label>
            <label className="block ">
              <span className="block  text-sm font-medium  text-gray-900 ">
                Quantity
              </span>
              <input
                className="w-full px-2 py-1 text-black rounded-md border border-slate-400"
                type="number"
                placeholder="Enter quantity"
                name="quantity"
                value={newProduct.quantity}
                onChange={onChangeFileInput}
              />
            </label>
            <div className="grid grid-cols-2 gap-4 place-content-end">
              <>
                <button
                  className="relative rounded-full p-2 bg-gradient-to-br from-green-500 to-sky-500 text-white bold-2 shadow-xl font-medium drop-shadow-xl"
                  type="submit"
                  onClick={handleClickSave}
                >
                  Save
                </button>

                <button
                  className="relative rounded-full p-2 bg-gradient-to-br from-red-600 to-yellow-400 text-white bold-2 shadow-xl font-medium drop-shadow-xl"
                  type="submit"
                  onClick={setClose}
                >
                  Cancel
                </button>
              </>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
