import React from 'react';
import { Outlet } from 'react-router-dom';

const TabLayout = ({ children }) => {
  return (
    // {children}
    <Outlet />
  );
};

export default TabLayout;
