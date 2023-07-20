import React, { useState } from 'react';
import * as adminApi from '../../apis/admin-api';
import Modal from '../../components/Modal';
import Image from '../../assets/images/sun_cream.jpg';
import EditProduct from './EditProduct';

export default function AddProductList({
  product: { id, image, name, description, price },
  fetchProduct,
  handleClickEdit,
  brand,
  setOptions,
  handleNewImage,
  onChangeFileInput,
  newProduct,
  setNewProduct,
  newProductImage,
  handleChangeFileInput,
}) {
  const [open, setOpen] = useState(false);

  const handleClickDelete = async id => {
    await adminApi.deleteProduct(id);
    fetchProduct();
  };

  return (
    <tr className=" bg-white border-b transition duration-300 py-4 ease-in-out hover:bg-gray-100">
      <td className=" py-4 whitespace-normal">
        <p className="flex justify-center items-center text-lg font-light text-gray-900">
          {id}
        </p>
      </td>

      <td className="text-sm text-gray-900 font-light px-2 py-2.5 whitespace-nowrap">
        <img
          className="flex justify-center object-contain h-96 w-72 "
          src={image || Image}
        />
      </td>
      <td className="whitespace-prewrap">
        <div className="flex flex-col p-2.5">
          <h1 className=" text-lg font-semibold text-slate-900 m-2">{name}</h1>
          <p className="text-sm font-light text-slate-900 m-2">{description}</p>
          <p className="text-sm font-light text-slate-900 m-2">
            Price: THB {price}
          </p>
          <p className="text-sm font-light text-slate-900 m-2">Quantity: 18</p>
          <div className="flex flex-row p-2">
            <button
              type="button"
              onClick={() => setOpen(true)}
              className=" inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
            >
              <span className=" px-4 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Edit
              </span>
            </button>
            <Modal open={open} onClose={() => setOpen(false)}>
              <EditProduct
                onSuccess={() => setOpen(false)}
                id={id}
                handleClickEdit={handleClickEdit}
                brand={brand}
                setOptions={setOptions}
                handleNewImage={handleNewImage}
                onChangeFileInput={onChangeFileInput}
                newProduct={newProduct}
                setNewProduct={setNewProduct}
                newProductImage={newProductImage}
                handleChangeFileInput={handleChangeFileInput}
              />
            </Modal>

            <button
              type="button"
              className="inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800"
              onClick={() => handleClickDelete(id)}
            >
              <span className="px-4 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Delete
              </span>
            </button>
          </div>
        </div>
      </td>
    </tr>
  );
}
