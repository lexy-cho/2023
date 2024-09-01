import React, { useEffect, useRef, useState } from 'react';

const DETAIL_NAV = [
  { idx: 0, name: '상품보기', num: null },
  { idx: 1, name: '상품판매자', num: 'Q&A' },
  { idx: 2, name: '리뷰', num: 71 },
];

const DetailNav = ({ scrollRef }) => {
  const [navIndex, setNavIndex] = useState(null);
  const navRef = useRef([]); 

  useEffect(() => {
    scrollRef.current[navIndex]?.scrollIntoView({ behavior: 'smooth' });
    setNavIndex(null);
  }, [scrollRef, navIndex]);

  useEffect(() => {

    const changeNavBtnStyle = () => {
      scrollRef.current.forEach((ref, idx) => {
        if (ref.offsetTop - 180 < window.scrollY) {
          navRef.current.forEach(ref => {
            ref.className = ref.className.replace(' active', '');
          });
          navRef.current[idx].className += ' active';
        }
      });
    };
    window.addEventListener('scroll', changeNavBtnStyle);

    return () => {
      window.removeEventListener('scroll', changeNavBtnStyle);
    };
  }, [scrollRef]);
  // scroll에 따른 네이게이션 :: 참조 - https://velog.io/@seoltang/scroll-navbar-button-useref  
  
  return (
    <nav className='tabNav lCase'>
        <ul>
            {DETAIL_NAV.map(({ idx, name, num }) => (
              <li
                key={idx}
                ref={ref => (navRef.current[idx] = ref)}
              >
                <button 
                  onClick={() => {
                    setNavIndex(idx);
                  }}
                >
                  {name}
                  <em>{num}</em>
                </button>
              </li>
            ))}
        </ul>
    </nav>
  );
};

export default DetailNav;