import { useState } from 'react';
import * as adminApi from '../apis/admin-api';

export default function ProductContextProvider({ children }) {
  const [product, setProduct] = useState();
  const [newProduct, setNewProduct] = useState({
    name: '',
    price: '',
    description: '',
  });
  const [newProductImage, setNewProductImage] = useState(null);
  const formData = new FormData();
  formData.append('branId');
  formData.append('categoryId');
  formData.append('image', newProductImage.file);
  formData.append('name', newProduct.name);
  formData.append('price', newProduct.price);
  formData.append('description', newProduct.description);

  const handleCreate = async () => {
    await adminApi.post(formData);
  };
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
