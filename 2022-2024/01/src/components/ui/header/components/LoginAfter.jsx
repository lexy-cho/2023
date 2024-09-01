import React, { useContext, useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
// import sampleProfile from '@assets/images/sample/sample1.jpeg';

const LoginAfter = () => {
  return (
    <div className="loginAfter" style={{ display: 'inline-flex' }}>
      <Link to="/apply" className='bCReseller'>리셀러 신청</Link>
      <span className="userInfo">
        <span className="profileImg">
          {/* <img src={sampleProfile} /> */}
        </span>
        <em>선미니</em>
        <Link to="/point">10,000P</Link>
      </span>
    </div>
  );
};

export default LoginAfter;
