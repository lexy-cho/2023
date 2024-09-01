import React, { useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div id="footer">
      <footer>
        <div className='goFBtn'>
          <div className='back'>
            <Link to='/terms'>서비스 이용약관</Link>
            <Link>개인정보 처리방침</Link>
            <Link>입점 문의</Link>
          </div>
        </div>
        <address>
          <div className='back'>
            <span className='flogo'>시스타액츠</span>
            <strong>1234-5678</strong>
            <div className='fInfo'>
              <span>대표이사: OOO</span>
              <span>서울특별시 강남구 태헤란로 OOO</span>
              <span>사업자등록번호: 123-45-67890</span>
              <span>통신판매신고번호: 제2020-서울강남-12345호</span>
              <span>개인정보보호책임자: OOO</span>
              <span>kd.hong@gmail.com</span>
            </div>
          </div>
        </address>
      </footer>
    </div>
  );
};

export default Footer;
