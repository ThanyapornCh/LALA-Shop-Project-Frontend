import { ProductContext } from '../contexts/ProductContext';
import { useContext } from 'react';

export default function useProduct() {
  return useContext(ProductContext);
}
