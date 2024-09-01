import { React, useState, useRef, useEffect, useContext } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { BaseButton } from '@components/common';
// // import sampleProfile from '@assets/images/sample/sample1.jpeg';
import Drawer from 'react-modern-drawer';
import { useHeader } from './hooks/useHeader';
import 'react-modern-drawer/dist/index.css';
import LoginAfter from './components/LoginAfter';
import LoginBefore from './components/LoginBefore';

const Header = ({title}) => {
  const { t, i18n } = useTranslation();
  const { location, navigate, lognin, isOpen, setisOpen, toggleDrawer } = useHeader();
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const handleScroll = () => {
    if (window.scrollY > 68) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  const [notiVisible, setNotiVisible] = useState(false);

  return (
    <>
      <div id='header'>
        {/* 메인, 리셀러메인만 <div id='header' style={isVisible === true ? { background: 'rgba(255,255,255,1)' } : { background: 'rgba(255,255,255,0.7)' }}> */}
        <header className='pcHeader'>
          <h1>
            <Link to='/'>the Ippo</Link>
          </h1>
          <ul>
            <li>
              <Link to='/'>메인</Link>
            </li>
            <li>
              <Link to='/event'>이벤트</Link>
            </li>
            <li>
              <Link to='/center'>고객센터</Link>
            </li>
          </ul>
          <div className='myBtn'>
            <span className='pcMy'>
              {/* 로그인 전 */}
              {!lognin && <LoginBefore />}
              {/* 로그인 후 */}
              {lognin && <LoginAfter />}
            </span>
            <span className='topNotiy'>
              <button className='bCart' onClick={() => navigate('/cart')}>
                <em>장바구니</em>
                <i>8</i> 
                {/* 장바구니 없는 경우 i 삭제 */}
              </button>
              <button className="bNoty p" onClick={() => setNotiVisible(!notiVisible)}>
                <em>알림</em>
                <i>8</i> {/* 알림 없는 경우 i 삭제 */}
              </button>
              <button className="bNoty m" onClick={() => navigate('/notiy')}>
                <em>알림</em>
                <i>8</i> {/* 알림 없는 경우 i 삭제 */}
              </button>
            </span>
            <div className='headNotiPop' style={{display: `${notiVisible ? 'block' : 'none'}`}}>
                <div className='pBack'>
                  <strong className='pt'>
                    알림
                    <a className="bMR" href="/notiy">전체 보기</a>
                  </strong>
                  <div>
                    <dl className='new'>
                      <dt>공지사항 제목</dt>
                      <dd>공지사항 내용입니다. 공지사항 내용입니다. 공지사항 내용입니다.</dd>
                    </dl>
                    <dl className='new'>
                      <dt>공지사항 제목</dt>
                      <dd>공지사항 내용입니다. 공지사항 내용입니다. 공지사항 내용입니다.</dd>
                    </dl>
                    <dl>
                      <dt>공지사항 제목</dt>
                      <dd>공지사항 내용입니다. 공지사항 내용입니다. 공지사항 내용입니다.</dd>
                    </dl>
                    <dl>
                      <dt>공지사항 제목</dt>
                      <dd>공지사항 내용입니다. 공지사항 내용입니다. 공지사항 내용입니다.</dd>
                    </dl>
                    <dl>
                      <dt>공지사항 제목</dt>
                      <dd>공지사항 내용입니다. 공지사항 내용입니다. 공지사항 내용입니다.</dd>
                    </dl>
                    <dl>
                      <dt>공지사항 제목</dt>
                      <dd>공지사항 내용입니다. 공지사항 내용입니다. 공지사항 내용입니다.</dd>
                    </dl>
                    <dl>
                      <dt>공지사항 제목</dt>
                      <dd>공지사항 내용입니다. 공지사항 내용입니다. 공지사항 내용입니다.</dd>
                    </dl>
                    <dl>
                      <dt>공지사항 제목</dt>
                      <dd>공지사항 내용입니다. 공지사항 내용입니다. 공지사항 내용입니다.</dd>
                    </dl>
                    <dl>
                      <dt>공지사항 제목</dt>
                      <dd>공지사항 내용입니다. 공지사항 내용입니다. 공지사항 내용입니다.</dd>
                    </dl>
                    <dl>
                      <dt>공지사항 제목</dt>
                      <dd>공지사항 내용입니다. 공지사항 내용입니다. 공지사항 내용입니다.</dd>
                    </dl>
                  </div>
                </div>
                <div className='pBtn'>
                    <BaseButton label={'닫기'} onClick={() => setNotiVisible(!notiVisible)} />
                </div>
            </div>
            <div>
            </div>
          </div>
        </header>
        <header className='mSubHeader'>
          <BaseButton className="btnMPrev" label={'이전'} onClick={() => navigate(1)} />
          <h2>{title}</h2>
        </header>
      </div>
    </>
  );
};

export default Header;
