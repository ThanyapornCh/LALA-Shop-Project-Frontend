import { toast } from 'react-toastify';
import axios from '../../config/axios';
import useLoading from '../../hooks/useLoading';

export default function PaymentConfirmForm({
  file,
  onCancel,
  handlePreviewImage,
  handlePrevious,
  onSuccess,
}) {
  const { startLoading, stopLoading } = useLoading();

  const handleSubmitForm = async e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('slipUrl', file);
    try {
      startLoading();
      await axios.post('/users/slip', formData);
      toast.success('Confirm order to be success!');
      onSuccess();
    } catch (err) {
      console.log(err);
      toast.error('Confirm order is not success.');
    } finally {
      stopLoading();
    }
  };
  return (
    <>
      <form onSubmit={handleSubmitForm}>
        <div className="bg-gray-100 rounded-r-md flex flex-col items-center justify-center py-4">
          <div>
            <label className="flex justify-center items-center  mb-2 text-gray-700 text-md font-medium flex-col w-full h-[300px] border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
              {file ? (
                <img
                  className="w-[180px] h-[250px] border-0"
                  src={file ? URL.createObjectURL(file) : ''}
                />
              ) : (
                <>
                  <p className="text-slate-500 font-normal text-base">
                    Please Upload Slip
                  </p>
                  <input
                    className="hidden"
                    type="file"
                    onChange={handlePreviewImage}
                  />
                </>
              )}
            </label>
            <button
              className="bg-gradient-to-r from-pink-500 via-yellow-400 to-yellow-300 p-0 text-white px-4 py-1 w-full rounded-md"
              onClick={handlePrevious}
            >
              Prev
            </button>
            <button
              className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% p-0 text-white mt-2 px-4 py-1 w-full rounded-md"
              onClick={onCancel}
            >
              Cancel
            </button>
            <button
              className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-0 text-white mt-2 px-4 py-1 w-full rounded-md"
              type="submit"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
