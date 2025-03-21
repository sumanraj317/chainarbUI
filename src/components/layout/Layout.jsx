import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';


const Layout = ({ children }) => {
  const location = useLocation();
  const hideUI = location.pathname.startsWith('/dashboard');

  return (
    <div>
      {!hideUI && <Header />}
      <main>{children}</main>
  
    </div>
  );
};

export default Layout;
