import axios from '../config/axios';

export const createProduct = input => axios.post('/admin/create', input);
export const updateProduct = (productId, input) =>
  axios.put(`/admin/update/${productId}`, input);
export const deleteProduct = productId =>
  axios.delete(`/admin/product/${productId}`);

export const getAllProduct = () => axios.get('/admin/product');
export const getAllBrand = () => axios.get('/admin/product/brand');
export const getCheckOrder = () => axios.get('/admin/orders');
