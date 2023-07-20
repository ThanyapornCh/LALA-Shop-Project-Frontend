import React, { useState } from 'react';
import { Edit } from '../../../assets/icon';
import Modal from '../../../components/Modal';
import CoverAdminImageForm from './CoverAdminImageForm';
import ProfileAdminImageForm from './ProfileAdminImageForm';

export default function AdminMeAction({ updateProfileUser }) {
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
      <Modal open={open} onClose={() => setOpen(false)} title="Edit">
        <ProfileAdminImageForm
          onSuccess={() => setOpen(false)}
          updateProfileUser={updateProfileUser}
        />
        <CoverAdminImageForm
          onSuccess={() => setOpen(false)}
          updateProfileUser={updateProfileUser}
        />
      </Modal>
    </>
  );
}
