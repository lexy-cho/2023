import React, { useEffect, useState } from 'react';
import Footer from '../footer/Footer';
import TabBar from '../tabbar/TabBar';

const Header = React.lazy(() => import('../header/Header'));

const Layout = ({ className = 'mSubCase', children }) => {
  const [title, setTitle] = useState('');
  const onLayoutTitleChange = (title) => {
    setTitle(title);
  }
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const handleScroll = () => {
    if (window.scrollY > 60) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const addPropsToChildren = (children) => {
    if (Array.isArray(children)) {
      return React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { onLayoutTitleChange });
        }
        return child;
      });
    } else if (React.isValidElement(children)) {
      return React.cloneElement(children, { onLayoutTitleChange });
    }
    return children;
  };
  
  return (
    <div id="wrap" className={className}>
      {/* 메인, 리셀러메인만 <div id='wrap' className='mainCase'>  */}
      {/* 로그인, 상세 페이지등 에서는 <div id='wrap' className='mSubCase'> */}
      {/* 마이페이지 전체 에서는 <div id='wrap' className='mSubCase my'> */}
      <Header title={title}/>
      <div id="container">
          {addPropsToChildren(children)}
          <button
            className="btnTop"
            style={isVisible === true ? { opacity: '1' } : { opacity: '0' }}
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: 'smooth',
              });
            }}
          >
            Top
          </button>
      </div>
      <Footer />
      <TabBar />
    </div>
  );
};

export default Layout;
