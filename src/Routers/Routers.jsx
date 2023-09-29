import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { Home, Login, Payment, Shop, SignUp, ErrorPage } from '@/pages';
import { Layout } from '@/layout';

function Routers() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/sign-up" element={<SignUp />} />
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default Routers;
