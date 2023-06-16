import { useState } from 'react';
import Modal from '../../components/Modal';
import CoverImageForm from './CoverImageForm';
import ProfileImageForm from './ProfileImageForm';
import { Edit } from '../../assets/icon';

export default function MeAction() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        className="bottom-0 left-11 absolute bg-white hover:bg-gray-100  border border-slate-300 hover:border-sky-300 m-2 p-2 rounded-full  "
        type="button"
        onClick={() => setOpen(true)}
      >
        <div className="fill-sky-500 text-sm">
          <Edit />
        </div>
      </button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <ProfileImageForm onSuccess={() => setOpen(false)} />
        <CoverImageForm />
      </Modal>
    </>
  );
}
