import { useState } from 'react';
import Image from '../../assets/images/sun_cream.jpg';
import Modal from '../../components/Modal';
import EditProduct from './EditProduct';
export default function AddProductList() {
  const [open, setOpen] = useState(false);
  return (
    <tr className=" bg-white border-b transition duration-300 py-4 ease-in-out hover:bg-gray-100">
      <td className=" py-4 whitespace-nowrap ">
        <p className="flex justify-center items-center text-lg font-light text-gray-900">
          1
        </p>
      </td>

      <td className="text-sm text-gray-900 font-light px-2 py-2.5 whitespace-nowrap">
        <img
          className="flex justify-center h-full w-full object-cover"
          src={Image}
        />
      </td>
      <td className="whitespace-nowrap">
        {/* <div className="flex flex-wrap"> */}
        <div className="flex flex-col p-2.5">
          <h1 className=" text-lg font-semibold text-slate-900 m-2">Cream </h1>
          <p className="text-sm font-light text-slate-900 m-2">Lorem</p>
          <p className="text-sm font-light text-slate-900 m-2">
            Price: 200 Bath
          </p>
          <p className="text-sm font-light text-slate-900 m-2">Quantity: 3</p>
          <div className="flex flex-row p-2">
            <button
              type="button"
              onClick={() => setOpen(true)}
              //   className="inline-block px-4 py-2.5 mr-2 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-800 hover:shadow-lg focus:bg-blue-800 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
            >
              <span className="relative px-4 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Edit
              </span>{' '}
            </button>

            <Modal open={open} onClose={() => setOpen(false)}>
              <EditProduct onSuccess={() => setOpen(true)} />
            </Modal>
            <button
              type="button"
              //   className="inline-block px-4 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
              className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800"
            >
              <span className="relative px-4 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Delete
              </span>{' '}
            </button>
          </div>
        </div>
        {/* </div> */}
      </td>
    </tr>
  );
}
