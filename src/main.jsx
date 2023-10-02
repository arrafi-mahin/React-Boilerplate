import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './store/Store/store.js'
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react/';
import { proudctApi } from './services/Api.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <ApiProvider api={proudctApi}>
      <App />
    </ApiProvider>
  </Provider>
)
