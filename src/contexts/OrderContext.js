import React, { createContext, useEffect, useState } from 'react';
import * as orderApi from '../apis/order-api';
import * as adminApi from '../apis/admin-api';
import axios from '../config/axios';

export const OrderContext = createContext();

export default function OrderContextProvider({ children }) {
  const [order, setOrder] = useState([]);

  const fetchOrder = async () => {
    const res = await orderApi.getOrder();
    setOrder(res.data?.orders.OrderItems);
    console.log(res.data?.orders.OrderItems);
  };
  useEffect(() => {
    fetchOrder();
  }, []);

  const handleAddCart = async productId => {
    const res = await axios.post(`/order/${productId}`);
    const newOrder = res.data.OrderItems;
    setOrder(newOrder);
    console.log(newOrder);
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
      const result = await adminApi.getCheckOrder();
      setCheckOrder(result.data.checkOrder);
      console.log(result.data.checkOrder);
    };
    fetchCheckOrder();
  }, []);

  // const [status, setStatus] = useState([]);
  // console.log(status);

  // const fetchStatus = async () => {
  //   const res = await orderApi.getOrderStatus();
  //   setStatus(res.data);
  //   console.log(res.data);
  // };
  // useEffect(() => {
  //   fetchStatus();
  // }, []);

  // const [orderItem, setOrderItem] = useState([]);
  // console.log(orderItem);

  // const fetchOrderItem = async () => {
  //   const res = await orderApi.getOrder();
  //   setOrderItem(res.data.orders);
  //   console.log(res.data.orders);
  // };
  // useEffect(() => {
  //   fetchOrderItem();
  // }, []);

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
        // status,
        // orderItem,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}
