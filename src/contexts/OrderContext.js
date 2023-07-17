import React, { createContext, useEffect, useState } from 'react';
import * as orderApi from '../apis/order-api';
import * as adminApi from '../apis/admin-api';
import axios from '../config/axios';

export const OrderContext = createContext();

export default function OrderContextProvider({ children }) {
  const [order, setOrder] = useState([]);

  const fetchOrder = async () => {
    const res = await orderApi.getOrder();
    setOrder(res.data.orders.OrderItems);
    console.log(res.data.orders.OrderItems);
  };
  useEffect(() => {
    fetchOrder();
  }, []);

  const handleAddCart = async productId => {
    const res = await axios.post(`/order/${productId}`);
    const newOrder = res.data.OrderItems;
    setOrder(newOrder);
  };

  const handleUpdateCart = async (orderItemId, input) => {
    const res = await axios.put(`/order/${orderItemId}`, input);
    setOrder(res.data.order.OrderItems);
  };

  const handleDeleteCart = async (orderId, productId) => {
    await axios.delete(`/order/${orderId}/product/${productId}`);
    fetchOrder();
  };

  const [checkOrder, setCheckOrder] = useState([]);

  useEffect(() => {
    const fetchCheckOrder = async () => {
      const res = await adminApi.getCheckOrder();
      setCheckOrder(res.data.checkOrder);
      console.log(res.data.checkOrder);
    };
    fetchCheckOrder();
  }, []);

  return (
    <OrderContext.Provider
      value={{
        order,
        setOrder,
        handleAddCart,
        handleUpdateCart,
        handleDeleteCart,
        fetchOrder,
        checkOrder,
        setCheckOrder,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}
