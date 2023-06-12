import { useState } from 'react';
import RegisterForm from './RegisterForm';
import Modal from '../../components/Modal';

export default function RegisterContainer() {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex justify-center mt-2">
      <button
        data-modal-target="defaultModal"
        data-modal-toggle="defaultModal"
        className=" bg-[#F67280]-500 hover:bg-[#F67280]-700 text-white rounded-x1 flex justify-center no-underline hover:underline"
        onClick={() => setOpen(true)}
      >
        Create New Account
      </button>
      <Modal open={open} onClose={() => setOpen(false)} title="Register">
        <RegisterForm onClose={() => setOpen(false)} />
      </Modal>
    </div>
  );
}
