import React, { useState } from 'react';
import { Card } from '../../assets/icon';
import Modal from '../../components/Modal';
import CheckoutCreditCardForm from './CheckoutCreditCardForm';

export default function CheckoutCreditCard() {
  const [open, setOpen] = useState();
  return (
    <>
      <div className="py-2">
        <button
          className="flex justify-start w-full    border-gray-200  shadow dark:bg-gray-800 dark:border-gray-700 hover:border-indigo-300  border-2 p-3 rounded-lg"
          onClick={() => setOpen(true)}
        >
          <div className=" fill-gray-400 text-lg mx-3 border-gray-600 border-1 mr-2 py-2">
            <Card />
          </div>
          <span className="text-gray-600 font-medium text-base p-2 ml-6">
            Pay with credit card
          </span>
        </button>
        <Modal open={open} onClose={() => setOpen(false)}>
          <CheckoutCreditCardForm onSuccess={() => setOpen(false)} />
        </Modal>
      </div>
    </>
  );
}
