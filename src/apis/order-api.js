import axios from '../config/axios';

export const addOrder = productId => axios.post(`/order/${productId}`);
export const updateOrder = (orderItemId, input) =>
  axios.put(`/order/${orderItemId}`, input);
export const deleteOrder = (orderId, productId) =>
  axios.delete(`/order/${orderId}/product/${productId}`);

export const getOrder = () => axios.get('/order');
export const getOrderStatus = () => axios.get('/order/orderstatus');
