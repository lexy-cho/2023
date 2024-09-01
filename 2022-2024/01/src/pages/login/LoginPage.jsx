import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Link, Outlet } from 'react-router-dom';
const LoginPage = ({onLayoutTitleChange}) => {
  useEffect(() => {
    onLayoutTitleChange('로그인');
  });
  return (
    <>
      <Outlet />
    </>
  );
};

export default LoginPage;
