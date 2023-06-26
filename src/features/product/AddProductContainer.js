import { useState } from 'react';
import { PlusCircle } from '../../assets/icon';
import Modal from '../../components/Modal';
import AddProduct from './AddProduct';
import AddProductList from './AddProductList';

export default function AddProductContainer() {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex flex-col">
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
                  {/* <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Price
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Quantity
                  </th> */}
                  {/* <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Action
                  </th> */}
                </tr>
              </thead>
              <tbody>
                <AddProductList />
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
        <AddProduct onSuccess={() => setOpen(true)} />
      </Modal>
    </div>
  );
}
