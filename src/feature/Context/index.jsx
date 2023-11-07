import { proudctApi } from '@/services/Api';
import { store } from '@/store/Store/store';
import { BrowserRouter } from 'react-router-dom';
import GlobalProvider from './GlobalProvider';
import AuthProvider from './AuthProvider';
import React from 'react';
import { Provider } from 'react-redux';
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';

export default function Contexts({ children }) {
  return (
    <BrowserRouter>
      <GlobalProvider>
        <AuthProvider>
          <Provider store={store}>
            <ApiProvider api={proudctApi}>
              {children}
            </ApiProvider>
          </Provider>
        </AuthProvider>
      </GlobalProvider>
    </BrowserRouter>
  );
}