import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Contexts from './store/Context/Context';
import Toast from './lib/Toaster/Toast';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Contexts>
    <App />
    <Toast />
  </Contexts>,
);
