import { LoadingContext } from '../contexts/LoadingContext';
import { useContext } from 'react';

export default function useLoading() {
  return useContext(LoadingContext);
}
