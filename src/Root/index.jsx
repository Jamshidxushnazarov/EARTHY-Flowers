import React from 'react';
import { Header } from '../components/layout';
import { Routes, Route, useLocation } from 'react-router-dom';
import {
  AboutUsPage,
  HomePage,
  ContactPage,
  ShopingPage,
  CardAdd,
  AdminPage,
} from '../pages';
import { Footer } from '../components/sections';
import { Toaster } from 'sonner';
import SignIn from '../auth/login';
import SignUp from '../auth/register';

const Root = () => {
  const location = useLocation();
  console.log(location.pathname);
  const hideLayout =
    location.pathname === '/login' ||
    location.pathname === '/register' ||
    location.pathname === '/cart/add';

  return (
    <>
      <Toaster />
      {!hideLayout && <Header />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/about" element={<ShopingPage />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/cart/add" element={<CardAdd />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
      {!hideLayout && <Footer />}
    </>
  );
};

export default Root;
