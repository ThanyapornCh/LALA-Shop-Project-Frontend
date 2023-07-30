import React, { useState, createContext, useEffect } from 'react';
import { toast } from 'react-toastify';
import useLoading from '../hooks/useLoading';
import * as adminApi from '../apis/admin-api';
import axios from '../config/axios';

export const ProductContext = createContext();

export default function ProductContextProvider({ children }) {
  const [product, setProduct] = useState([]);
  // console.log(product);
  const [newProduct, setNewProduct] = useState({
    name: '',
    price: '',
    description: '',
    price: '',
    quantity: '',
  });
  // console.log(newProduct);
  const [newProductImage, setNewProductImage] = useState({
    image: null,
  });
  // console.log(newProductImage);
  const [error, setError] = useState(false);
  const [brand, setBrand] = useState([]);
  const [options, setOptions] = useState();
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');

  const { startLoading, stopLoading } = useLoading();

  const formData = new FormData();
  formData.append('brandId', 1);
  formData.append('categoryId', 2);
  formData.append('image', newProductImage);
  formData.append('name', newProduct.name);
  formData.append('price', newProduct.price);
  formData.append('description', newProduct.description);
  // console.log(formData);

  const fetchProduct = async () => {
    const res = await adminApi.getAllProduct();
    setProduct(res.data.product);
  };
  useEffect(() => {
    fetchProduct();
  }, []);

  useEffect(() => {
    const fetchBrand = async () => {
      const allBrand = await adminApi.getAllBrand();
      setBrand(allBrand.data.brand);
    };
    fetchBrand();
  }, []);

  const onChangeFileInput = e => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };

  const handleChangeFileInput = e => {
    setNewProduct(newProduct => ({
      ...newProduct,
      [e.target.name]: e.target.value,
    }));
  };

  const onClose = () => {
    setOpen(false);
  };

  const handleClickSave = async () => {
    try {
      startLoading();
      await axios.post('/admin/create', formData);
      setNewProduct(newProduct);
      stopLoading();
      toast.success('Add product to be success');
      fetchProduct();
    } catch (err) {
      console.log(err);
      toast.error('Add product is not success.');
    } finally {
      stopLoading();
    }
  };

  const handleNewImage = e => {
    setNewProductImage(e.target.files[0]);
  };

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

    setOpen(false);
  };

  const handleClickEdit = async productId => {
    try {
      startLoading();
      await axios.put(`/admin/product/update/${productId}`, formData);
      setNewProduct(newProduct);
      console.log(newProduct);
      stopLoading();
      toast.success('Update product to be success');
      fetchProduct();
    } catch (err) {
      toast.error('Update product is not success.');
      console.log(err);
    } finally {
      stopLoading();
    }
  };

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
        handleClickSave,
        fetchProduct,
        brand,
        setBrand,
        handleNewImage,
        handleCancel,
        options,
        setOptions,
        search,
        setSearch,
        error,
        setError,
        onClose,
        handleClickEdit,
        handleChangeFileInput,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}
