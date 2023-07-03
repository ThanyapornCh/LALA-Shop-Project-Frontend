import { ClickFileInputContext } from '../contexts/ClickFileInputContext';
import { useContext } from 'react';

export default function useClickFileInput() {
  return useContext(ClickFileInputContext);
}
