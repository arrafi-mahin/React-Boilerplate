import React, { Suspense, lazy } from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
const Home = lazy(() => import('../pages/Home'));
const Login = lazy(() => import('../pages/Login'));
const Payment = lazy(() => import('../pages/Payment'));
const Shop = lazy(() => import('../pages/Shop'));
const SignUp = lazy(() => import('../pages/SignUp'));
const ErrorPage = lazy(() => import('../pages/ErrorPage'));
const Layout = lazy(() => import('../layout/Layout'));
const Loading = lazy(()=> import('../pages/Loading'))
function Routers() {
  return (
    <div>
      <Router>
        <Suspense fallback={<Loading />} >
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
        </Suspense>
      </Router>
    </div>
  );
}

export default Routers;
