import React from 'react';
import ReactDOM from 'react-dom/client';
import 'react-toastify/dist/ReactToastify.css';
import 'tw-elements';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AuthContextProvider from './contexts/AuthContext';
import LoadingContextProvider from './contexts/LoadingContext';
import ClickFileInputContextProvider from './contexts/ClickFileInputContext';
import ProductContextProvider from './contexts/ProductContext';
import OrderContextProvider from './contexts/OrderContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <AuthContextProvider>
    <ClickFileInputContextProvider>
      <LoadingContextProvider>
        <OrderContextProvider>
          <ProductContextProvider>
            <App />
          </ProductContextProvider>
        </OrderContextProvider>
      </LoadingContextProvider>
    </ClickFileInputContextProvider>
  </AuthContextProvider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
