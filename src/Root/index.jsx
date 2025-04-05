import React from 'react';
import { Header } from '../components/layout';
import { Routes, Route } from 'react-router-dom';
import { AboutUsPage, HomePage, ContactPage, ShopingPage } from '../pages';
import { Footer } from '../components/sections';
import { Toaster } from 'sonner';

const Root = () => {
  return (
    <>
      <Toaster />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path= "/about" element={<ShopingPage />}/> 
      </Routes>
      <Footer />
    </>
  );
};

export default Root;
