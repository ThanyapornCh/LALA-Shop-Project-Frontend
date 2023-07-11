import React, { useState, createContext, useEffect, useRef } from 'react';
import * as adminApi from '../apis/admin-api';
import axios from '../config/axios';
// import useLoading from '../hooks/useLoading';

export const ProductContext = createContext();

export default function ProductContextProvider({ children }) {
  const [product, setProduct] = useState([]);
  console.log(product);

  const fetchProduct = async () => {
    const res = await adminApi.getAllProduct();
    setProduct(res.data.product);
  };
  useEffect(() => {
    fetchProduct();
  }, []);

  const [newProduct, setNewProduct] = useState({
    name: '',
    price: '',
    description: '',
    price: '',
    quantity: '',
  });
  console.log(newProduct);
  const onChangeFileInput = e => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };

  const [newProductImage, setNewProductImage] = useState({
    image: null,
  });
  console.log(newProductImage);

  const formData = new FormData();
  formData.append('brandId', 1);
  formData.append('categoryId', 2);
  formData.append('image', newProductImage);
  formData.append('name', newProduct.name);
  formData.append('price', newProduct.price);
  formData.append('description', newProduct.description);
  console.log(formData);

  // const { startLoading, stopLoading } = useLoading();
  const createProduct = newProduct => {
    setProduct([newProduct, ...product]);
  };
  console.log(createProduct);

  // const handleOnChange = () => {
  //   console.log('first');
  // };
  const handleCreate = async () => {
    await axios.post('/admin/create', formData);

    // setNewProductImage({
    //   image: null,
    // });
    // onSuccess();
  };

  const handleNewImage = e => {
    setNewProductImage(e.target.files[0]);
  };

  const [brand, setBrand] = useState([]);
  const [options, setOptions] = useState();
  console.log(options);

  useEffect(() => {
    const fetchBrand = async () => {
      const allBrand = await adminApi.getAllBrand();
      setBrand(allBrand.data.brand);
    };
    fetchBrand();
  }, []);
  console.log(brand);

  const [open, setOpen] = useState(false);
  // const ref = useRef();

  const handleCancel = e => {
    e.preventDefault();
    setNewProduct({
      name: '',
      price: '',
      description: '',
      price: '',
      quantity: '',
    });
    setNewProductImage({
      image: null,
    });
    // ref.current.value = null;
    setOpen(false);
  };

  const [search, setSearch] = useState('');

  return (
    <ProductContext.Provider
      value={{
        product,
        setProduct,
        newProduct,
        setNewProduct,
        newProductImage,
        setNewProductImage,
        onChangeFileInput,
        handleCreate,
        // createProduct,
        brand,
        setBrand,
        handleNewImage,
        handleCancel,
        options,
        setOptions,
        search,
        setSearch,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}
