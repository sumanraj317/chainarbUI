import React, { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [redirectTo, setRedirectTo] = useState('/');
  const navigate = useNavigate();

  const login = (redirectUrl) => {
    setIsAuthenticated(true);
    if (redirectUrl) {
      setRedirectTo(redirectUrl);
      navigate(redirectUrl);
    } else {
      navigate('/dashboard');
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    setRedirectTo('/');
    navigate('/');
  };

  return (
    
    <AuthContext.Provider value={{ isAuthenticated, login, logout, redirectTo, setRedirectTo }}>
      {children}
    </AuthContext.Provider>
    
  );
};

export const useAuth = () => useContext(AuthContext);