import React, { useEffect, useState } from 'react';
import * as adminApi from '../../apis/admin-api';
import { PlusCircle } from '../../assets/icon';
import useProduct from '../../hooks/useProduct';
import Modal from '../../components/Modal';
import AddProduct from './AddProduct';
import AddProductList from './AddProductList';
import useClickFileInput from '../../hooks/useClickFileInput';

export default function AddProductContainer() {
  const [open, setOpen] = useState(false);

  // const ctx = useProduct();

  const {
    product,
    setProduct,
    newProduct,
    setNewProduct,
    newProductImage,
    setNewProductImage,
    createProduct,
    brand,
    setBrand,
    handleCreate,
    onChangeFileInput,
    handleNewImage,
    handleCancel,
    setOptions,
  } = useProduct();

  return (
    <div className="flex flex-col pb-8">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full">
              <thead className="bg-white border-b">
                <tr>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-5 py-4 text-left"
                  >
                    Orders
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-5 py-4 text-center"
                  >
                    Products
                  </th>
                </tr>
              </thead>
              <tbody>
                {product.map((el, index) => (
                  <AddProductList
                    key={el.id}
                    product={el}
                    setProduct={setProduct}
                  />
                ))}
              </tbody>
            </table>
            <div className="w-full py-8 flex justify-center items-center">
              <button className="text-xl" onClick={() => setOpen(true)}>
                <div className="h-[20px] w-[20px] fill-green-500 mx-3">
                  <PlusCircle />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Modal open={open} onClose={() => setOpen(false)}>
        <AddProduct
          onSuccess={() => setOpen(true)}
          product={product}
          setProduct={setProduct}
          newProduct={newProduct}
          setNewProduct={setNewProduct}
          newProductImage={newProductImage}
          setNewProductImage={setNewProductImage}
          createProduct={createProduct}
          brand={brand}
          setBrand={setBrand}
          onChangeFileInput={onChangeFileInput}
          handleNewImage={handleNewImage}
          setClose={handleCancel}
          handleCreate={handleCreate}
          setOptions={setOptions}
        />
      </Modal>
    </div>
  );
}
