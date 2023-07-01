import { useContext } from 'react';
import { ClickFileInputContext } from '../contexts/ClickFileInputContext';

export default function useClickFileInput() {
  return useContext(ClickFileInputContext);
}
