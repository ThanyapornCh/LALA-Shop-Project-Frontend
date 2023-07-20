import React, { createContext, useRef, useState } from 'react';
export const ClickFileInputContext = createContext();

export default function ClickFileInputContextProvider({ children }) {
  const [file, setFile] = useState(null);
  const ref = useRef();
  const openFileInput = () => ref.current.click();
  const onChangeFileInput = e => {
    if (e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };
  const onCancel = () => {
    setFile(null);
    ref.current.value = null;
  };
  return (
    <ClickFileInputContext.Provider
      value={{ file, ref, openFileInput, onCancel }}
    >
      {children}
    </ClickFileInputContext.Provider>
  );
}
