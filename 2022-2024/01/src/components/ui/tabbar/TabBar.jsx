import React, { useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';

const TabBar = () => {
  return (
    <div id="tabBar">
      <nav>
        <ul>
            <li><Link to='/category'>카테고리</Link></li>
            <li><Link to='/event'>이벤트</Link></li>
            <li className='on'><Link to='/'>메인</Link></li> 
            <li><Link to='/center'>고객센터</Link></li>
            <li><Link to='/myPage'>마이페이지</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default TabBar;
