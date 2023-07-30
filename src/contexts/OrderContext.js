import React, { createContext, useEffect, useState } from 'react';
import * as orderApi from '../apis/order-api';
import * as adminApi from '../apis/admin-api';
import axios from '../config/axios';

export const OrderContext = createContext();

export default function OrderContextProvider({ children }) {
  const [order, setOrder] = useState([]);
  const [checkOrder, setCheckOrder] = useState([]);

  const fetchOrder = async () => {
    const res = await orderApi.getOrder();
    setOrder(res.data.orders.OrderItems);
    // console.log(res.data.orders.OrderItems);
  };
  useEffect(() => {
    fetchOrder();
  }, []);

  useEffect(() => {
    const fetchCheckOrder = async () => {
      const result = await adminApi.getCheckOrder();
      setCheckOrder(result.data.checkOrder);
      // console.log(result.data.checkOrder);
    };
    fetchCheckOrder();
  }, []);

  const handleAddCart = async productId => {
    const res = await axios.post(`/order/${productId}`);
    const newOrder = res.data.OrderItems;
    setOrder(newOrder);
    // console.log(newOrder);
  };

  const handleUpdateCart = async (orderItemId, input) => {
    const res = await axios.put(`/order/${orderItemId}`, input);
    setOrder(res.data.order.OrderItems);
  };

  const handleDeleteCart = async (orderId, productId) => {
    await axios.delete(`/order/${orderId}/product/${productId}`);
    fetchOrder();
  };

  return (
    <OrderContext.Provider
      value={{
        order,
        setOrder,
        fetchOrder,
        handleAddCart,
        handleUpdateCart,
        handleDeleteCart,
        checkOrder,
        setCheckOrder,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}
