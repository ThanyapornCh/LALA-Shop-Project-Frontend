import React, { useState, createContext, useEffect, useRef } from 'react';
import * as adminApi from '../apis/admin-api';
import axios from '../config/axios';
import { toast } from 'react-toastify';
import useClickFileInput from '../hooks/useClickFileInput';
import useLoading from '../hooks/useLoading';

export const ProductContext = createContext();

export default function ProductContextProvider({ children }) {
  const [product, setProduct] = useState([]);
  // console.log(product);

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

  const createProduct = newProduct => {
    setProduct([newProduct, ...product]);
  };
  console.log(createProduct);

  // const handleOnChange = () => {
  //   console.log('first');
  // };
  const [error, setError] = useState(false);
  const { startLoading, stopLoading } = useLoading();
  const { onCancel } = useClickFileInput();
  const onClose = () => {
    setOpen(false);
  };
  const onSuccess = () => {
    setOpen(false);
  };

  const handleClickSave = async e => {
    try {
      startLoading();
      e.preventDefault();
      await axios.post('/admin/create', formData);
      stopLoading();
      setNewProduct(newProduct);
      setShow(false);
      onSuccess();
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

  const [brand, setBrand] = useState([]);
  const [options, setOptions] = useState();
  // console.log(options);

  useEffect(() => {
    const fetchBrand = async () => {
      const allBrand = await adminApi.getAllBrand();
      setBrand(allBrand.data.brand);
    };
    fetchBrand();
  }, []);
  // console.log(brand);

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
  const [trigger, setTrigger] = useState(false);
  const [show, setShow] = useState(false);
  const handleClickEdit = async id => {
    formData.append('id', id);
    await axios.put(`/admin/update/${id}`, formData);
    fetchProduct();
    setShow(false);
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
        // createProduct,
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
        handleClickEdit,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}
