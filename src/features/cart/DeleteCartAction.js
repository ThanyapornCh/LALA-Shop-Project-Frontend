import Modal from '../../components/Modal';
import DeleteCartForm from './DeleteCartForm';

export default function DeleteCartAction({
  open,
  onClose,
  onSuccess,
  handleDeleteCart,
}) {
  return (
    <>
      <Modal open={open} onClose={onClose}>
        <DeleteCartForm
          onSuccess={onSuccess}
          handleDeleteCart={handleDeleteCart}
        />
      </Modal>
    </>
  );
}
