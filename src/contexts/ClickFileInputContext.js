import React, { createContext, useRef, useState } from 'react';
export const ClickFileInputContext = createContext();

export default function ClickFileInputContextProvider({ children }) {
  const [file, setFile] = useState(null);
  const ref = useRef();
  const openFileInput = () => ref.current.click();
  const handleChangeFile = e => {
    if (e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };
  const handlePreviewImage = e => {
    setFile(e.target.files[0]);
  };
  const onCancel = () => {
    setFile(null);
    ref.current.value = null;
  };
  const [response, setResponse] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  return (
    <ClickFileInputContext.Provider
      value={{
        file,
        setFile,
        ref,
        openFileInput,
        onCancel,
        handlePreviewImage,
        response,
        loading,
        error,
      }}
    >
      {children}
    </ClickFileInputContext.Provider>
  );
}
