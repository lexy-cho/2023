import { React, useState, useRef, useEffect, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { EnvConfig } from '@constants/EnvConfig';
import 'react-modern-drawer/dist/index.css';

import menuData from '@data/menu.json';
import { getters, actions, subscribeMenu } from '@store/BrandingStore';
import useUiMutate from '../service/useUiMutate';
import { SearchHotelRadio, SearchLangRadio } from '@components/common';
import codeJson from '@data/code.json';
import { useOutSide } from '../../common/hooks/useOutSide';
const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  //const { openMenu } = useContext(MenuContext);
  const hotelCheck = useRef();
  const langCheck = useRef();
  const [isOpen, setisOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);

  const [hotelSeq, setHotelSeq] = useState();
  const [current, setCurrent] = useState('/');
  const [currentMenu, setCurrentMenu] = useState(getters.getCurrentMenu());
  const headerGnb = (flag) => {
    if (flag) {
      document.getElementById('header').classList.add('on');
      document.querySelectorAll('.gnb ul > li').forEach((item) => {
        item.classList.remove('on');
      });
      setIsHeaderOn(flag);
    } else {
      document.getElementById('header').classList.remove('on');
      document.querySelectorAll('.gnb ul > li').forEach((item) => {
        item.classList.remove('on');
      });
      setIsHeaderOn(flag);
    }
  };

  useEffect(() => {
    // console.log(location.pathname); // 현재 URL 경로
    // console.log(location.search); // 현재 쿼리 문자열

    setCurrent(location.pathname);
  }, []);

  useEffect(() => {
    // console.log(location.pathname); // 현재 URL 경로
    // console.log(location.search); // 현재 쿼리 문자열

    setCurrent(location.pathname);
  }, [location.pathname]);

  const { mutateLogout } = useUiMutate();

  const handleLogout = async () => {
    const userInfo = getters.getUserInfo();
    const p = {
      company_seq: userInfo?.user_info_data?.company_seq,
      hotel_seq: userInfo?.user_info_data?.hotel_seq,
      login_id: userInfo?.user_info_data?.login_id,
    };
    const result = await mutateLogout(p);
    await actions.setUserInfo(undefined);
    await actions.setCurrentMenu({ depth1: '', depth2: '', depth3: '' });
    navigate('/', { replace: true });
  };

  const handleMenuClick = (menu) => {
    // console.log(menu);
    const depth2 = menuData.menus.depth2[menu.key].filter((el) => el.visible === true)[0];
    const depth3 = menuData.menus.depth3[menuData.menus.depth2[menu.key].filter((el) => el.visible === true)[0]?.key].filter((el) => el.visible === true)[0];
    actions.setCurrentMenu({
      ...getters.getCurrentMenu(),
      depth1: menu,
      depth2: depth2,
      depth3: depth3,
    });
    setCurrentMenu({ ...getters.getCurrentMenu(), depth1: menu });
  };

  const handleRadioCancel = () => {
    setisOpen(false);
  };

  const handlePropertie = (el) => {
    console.log(el);

    setHotelSeq(el.hotel_seq);
    //setisOpen(!isOpen);
  };

  const handleSavePropertie = () => {
    actions.setHotel(getters.getPropertieList().filter((el) => el.hotel_seq === hotelSeq)[0]);
    setisOpen(!isOpen);
  };

  const properties = getters?.getPropertieList()?.map((el) => {
    return { id: el.hotel_seq, title: el.hotel_name };
  });

  const handleMenInit = () => {
    // const depth1 = menuData.menus.depth1.filter((el) => el.visible === true)[0];
    // const depth2 = menuData.menus.depth2[depth1.key].filter((el) => el.visible === true)[0];
    // const depth3 = menuData.menus.depth3[menuData.menus.depth2[depth1.key].filter((el) => el.visible === true)[0]?.key].filter((el) => el.visible === true)[0];
    actions.setCurrentMenu({ depth1: '', depth2: '', depth3: '' });
    navigate('/dashboard', { replace: true });
  };

  //console.log(getters.getHotelInfo());

  const handleIcon = (key) => {
    switch (key) {
      case 'reservation':
        return 1;
      case 'price':
        return 2;
      case 'content':
        return 3;
      case 'settings':
        return 7;
      case 'coupon':
        return 4;
      case 'reward':
        return 5;
      case 'statistics':
        return 6;
    }
  };

  console.log('getHotelInfo ==> ', getters.getHotelInfo());

  return (
    <>
      <div id="header">
        <header>
          <div className="ppchoice">
            <h1>DOWHAT CRS</h1>
            <div>
              <strong>DOWHAT CRS</strong>
              <span className="luChoice" onClick={() => setisOpen(!isOpen)}>
                <em>{getters.getHotelInfo()?.hotel_name || '브랜딩'}</em>
              </span>
              <SearchHotelRadio
                ref={hotelCheck}
                open={isOpen}
                onCancel={handleRadioCancel}
                value={getters.getHotelInfo()?.hotel_seq}
                onConfirm={() => {
                  console.log('ok');
                  setisOpen(!isOpen);
                  //navigate('/main-manager');
                  handleMenInit();
                  window.location.reload();
                }}
              />
            </div>
          </div>
          <div className="gnb">
            <ul style={{ justifyContent: 'center' }}>
              {menuData.menus.depth1
                //.filter((el) => el.visible && !el.dev)
                .filter((el) => el.visible && (getters.getHotelInfo()?.is_hotel_property === 0 ? el.isMenuPerm === 1 || el.isMenuPerm === 3 : el.isMenuPerm === 2 || el.isMenuPerm === 3))
                .map((el, i) => {
                  return (
                    <li
                      key={`header-menu-key-${i}`}
                      style={{ cursor: 'pointer' }}
                      className={`gnb${handleIcon(el.key)} ${currentMenu?.depth1?.key === el.key ? 'on' : ''}`}
                      onClick={() => handleMenuClick(el)}
                    >
                      <a>{el.menuName}</a>
                    </li>
                  );
                })}
              {/* <li className="gnb1 on"><a href="">예약</a></li>
							<li className="gnb2"><a href="">요금</a></li>
							<li className="gnb3"><a href="">콘텐츠</a></li>
							<li className="gnb4"><a href="">쿠폰</a></li>
							<li className="gnb5"><a href="">리워즈</a></li>
							<li className="gnb6"><a href="">통계</a></li>
							<li className="gnb7"><a href="">설정</a></li> */}
            </ul>
          </div>
          <span className="adminUtil">
            <div className="luChoiceBack">
              <span className={`luChoice ${isLangOpen ? 'on' : ''}`} onClick={() => setIsLangOpen(!isLangOpen)}>
                <em>{getters.getLang()}</em>
              </span>
              <SearchLangRadio
                ref={langCheck}
                open={isLangOpen}
                list={codeJson?.langType}
                onCancel={() => setIsLangOpen(!isLangOpen)}
                value={getters.getLang()}
                onConfirm={() => {
                  console.log('ok');
                  setIsLangOpen(!isLangOpen);
                }}
              />
            </div>

            <strong>{getters.getUserInfo()?.user_info_data?.user_id}</strong>
            <a style={{ cursor: 'pointer' }} onClick={handleLogout}>
              로그아웃
            </a>
          </span>
        </header>
      </div>
    </>
  );
};

export default Header;
