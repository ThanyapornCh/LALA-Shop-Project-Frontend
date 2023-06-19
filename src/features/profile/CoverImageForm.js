import { useRef, useState } from 'react';
import CoverImage from '../../components/CoverImage';
import useAuth from '../../hooks/useAuth';
import useLoading from '../../hooks/useLoading';
import * as userApi from '../../apis/user-api';

export default function CoverImageForm({ onSuccess, updateProfileUser }) {
  const { authenticatedUser, updateProfile } = useAuth();
  const { coverImage } = authenticatedUser;
  const { startLoading, stopLoading } = useLoading();

  const [file, setFile] = useState(null);
  const inputE1 = useRef();

  const handleClickSave = async () => {
    startLoading();
    const formData = new FormData();
    formData.append('coverImage', file);
    const res = await userApi.updateProfile(formData);
    updateProfile(res.data);
    updateProfileUser(res.data);
    stopLoading();
    setFile(null);
    onSuccess();
  };
  return (
    <>
      <div className=" flex flex-col items-center">
        <div>
          <h5 className="mb-0">Cover Photo</h5>
          <input
            type="file"
            ref={inputE1}
            onChange={e => {
              if (e.target.files[0]) {
                setFile(e.target.files[0]);
              }
            }}
            className="block w-full text-sm text-slate-500 border border-slate-400 rounded-md
          file:mr-4 file:py-1 file:px-4
          file:rounded-full file:border-0
          file:text-sm file:font-semibold
          file:bg-violet-50 file:text-violet-700
          hover:file:bg-violet-100"
          />
        </div>
        <div className="flex flex-wrap">
          {file && (
            <>
              <button
                className="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 rounded-md p-2 m-2 text-white"
                onClick={handleClickSave}
              >
                Save
              </button>
              <button
                className="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 rounded-md p-2 m-2 text-white"
                onClick={() => {
                  setFile(null);
                  inputE1.current.value = null;
                }}
              >
                Cancel
              </button>
            </>
          )}
          <button
            className="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 rounded-md p-2 m-2 text-white"
            onClick={() => inputE1.current.click()}
          >
            Edit
          </button>
        </div>
      </div>
      <div className=" text-center mt-3">
        <span onClick={() => inputE1.current.click()}>
          <CoverImage src={file ? URL.createObjectURL(file) : coverImage} />
        </span>
      </div>
    </>
  );
}
