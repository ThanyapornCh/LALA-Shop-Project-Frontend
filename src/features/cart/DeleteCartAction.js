import Modal from '../../components/Modal';
import DeleteCartForm from './DeleteCartForm';

export default function DeleteCartAction({
  open,
  onClose,
  onSuccess,
  handleClickDelete,
}) {
  return (
    <>
      <Modal open={open} onClose={onClose}>
        <DeleteCartForm
          onSuccess={onSuccess}
          handleClickDelete={handleClickDelete}
        />
      </Modal>
    </>
  );
}
