import { useState, createContext } from 'react';
import * as adminApi from '../apis/admin-api';
import axios from '../config/axios';

export const ProductContext = createContext();

export default function ProductContextProvider({ children }) {
  const [product, setProduct] = useState([]);
  console.log('product');
  const [newProduct, setNewProduct] = useState({
    name: '',
    price: '',
    description: '',
    price: '',
    quantity: '',
  });
  const [newProductImage, setNewProductImage] = useState(null);
  const formData = new FormData();
  formData.append('branId');
  formData.append('categoryId');
  formData.append('image', newProductImage.file);
  formData.append('name', newProduct.name);
  formData.append('price', newProduct.price);
  formData.append('description', newProduct.description);

  const handleCreate = async e => {
    e.preventDefault();
    await axios.post('/admin/create', formData);
  };

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await adminApi.getAllProduct();
      setProduct(res.data.product);
    };
    fetchProduct();
  }, []);

  return (
    <ProductContext.Provider
      vallue={{
        product,
        setProduct,
        newProduct,
        setNewProduct,
        newProductImage,
        setNewProductImage,
        handleCreate,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}
