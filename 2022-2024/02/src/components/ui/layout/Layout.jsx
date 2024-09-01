import React, { useEffect, useState } from 'react';
import Footer from '../footer/Footer';

const Header = React.lazy(() => import('../header/Header'));

const Layout = ({ children }) => {
  return (
    <div id="wrap">
      <Header />
      <div id="container">
          {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
