import React, { useState } from 'react';
import { timeSince } from '../../utils/date-format';
import SlipPayment from './SlipPayment';
import Modal from '../../components/Modal';

export default function HistoryList({
  checkOrder: { userId, totalPrice, orderStatus, slipUrl, createdAt },
}) {
  const [open, setOpen] = useState(false);
  return (
    <>
      {orderStatus === 'paid' ? (
        <button
          className="w-full border-gray-200  shadow dark:bg-gray-800 dark:border-gray-700 hover:border-indigo-300  border-2  rounded-lg my-2"
          onClick={() => setOpen(true)}
        >
          <span className="flex flex-wrap items-center text-gray-600 font-medium text-base p-2 ">
            <h2 className="font-base text-gray-600 pl-1 pr-8">{userId}</h2>
            <div className="flex flex-col px-2">
              <h1 className="font-base text-green-500 uppercase">
                {orderStatus}
              </h1>
              <p className="font-light text-gray-400">{timeSince(createdAt)}</p>
            </div>
            <p className="text-sm teaxt-gray-600 font-normal pl-16">
              THB {totalPrice}
            </p>
          </span>
        </button>
      ) : (
        ''
      )}
      <Modal open={open} onClose={() => setOpen(false)}>
        <SlipPayment onSuccss={() => setOpen(false)} slipUrl={slipUrl} />
      </Modal>
    </>
  );
}
