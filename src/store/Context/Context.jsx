import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import { Provider } from 'react-redux';
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import { store } from '@/store/Store/store';
import { productApi } from '@/services/Api';

export default function Contexts({ children }) {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <ApiProvider api={productApi}>
          {children}
        </ApiProvider>
      </Provider>
    </BrowserRouter>
  );
}
