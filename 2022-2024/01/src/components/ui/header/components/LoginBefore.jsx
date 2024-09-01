import React, { useContext, useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';

const LoginBefore = () => {
  return (
    <div className="loginBefore" style={{ display: 'inline-flex' }}>
      <Link to="/login">
        로그인
      </Link>
      <span>
        <Link to="/login/join">
          회원가입
        </Link>
      </span>
    </div>
  );
};

export default LoginBefore;
