import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';


const Layout = ({ children }) => {
  const location = useLocation();

  // Hide Header & AIChatbot on ALL "/dashboard/*" routes
  const hideUI = location.pathname.startsWith('/dashboard');

  return (
    <div>
      {!hideUI && <Header />}
      <main>{children}</main>
  
    </div>
  );
};

export default Layout;
