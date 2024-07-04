import React from 'react';
import { Outlet } from 'react-router-dom'
import { Footer } from 'widgets/footer';
import { Header } from 'widgets/header';

export const Layout = () => {
  return (
    <div className="full-wrapper">
      <Header />

      <main className='page'>
          <Outlet />
      </main>

      <Footer />
    </div>
  );
};

