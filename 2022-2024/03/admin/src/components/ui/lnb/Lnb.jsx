import React, { useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import useLnb from '../hooks/useLnb';
import menuData from '../../../data/menu.json';
import { getters, actions, subscribeMenu } from '@store/BrandingStore';
import { actions as tabActions } from '@store/TabStore';
import { useLocation, useNavigate } from 'react-router-dom';
import _ from 'lodash';
import './lnb.css';
import './layout.css';
import { CSSTransition } from 'react-transition-group';
const Lnb = ({ lnb }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const menus = getters.getCurrentMenu();
  const depth2Menus = menuData.menus.depth2[menus.depth1.key];

  const { menu, setMenu, menuStatus, setMenuStatus } = useLnb({ depth2Menus });
  const [depth2Menu, setDepth2Menu] = useState();
  const [currentMenu, setCurrentMenu] = useState(getters.getCurrentMenu());

  //const [openMenus, setOpenMenus] = useState([]);

  useEffect(() => {
    // const depth2Menus = menuData.menus.depth2[menus.depth1.key];
    setDepth2Menu(depth2Menus);

    subscribeMenu((state) => {
      const depth2Menus = menuData.menus.depth2[state.currentMenu.depth1.key];
      setDepth2Menu(depth2Menus);
      setCurrentMenu({ ...getters.getCurrentMenu() });
    });

    return () => {};
  }, []);

  const handleDepth2Menu = (el, idx) => {
    setMenuStatus((prevMenuStatus) => {
      const newMenuStatus = [...prevMenuStatus];
      newMenuStatus[idx] = !newMenuStatus[idx];
      return newMenuStatus;
    });
    // console.log('handleDepth2Menu ==> ', el);
    actions.setCurrentMenu({ ...getters.getCurrentMenu(), depth2: el });
    setCurrentMenu({ ...getters.getCurrentMenu(), depth2: el });

    let updatedMenu = depth2Menu.map((el2) => {
      if (el2.key === el.key) {
        el2.open = !el2.open;
      }
      return el2;
    });

    setDepth2Menu(updatedMenu);
  };

  const handleDepth3Menu = (event, el) => {
    event.stopPropagation();
    // console.log('handleDepth3Menu ==> ', el);
    actions.setCurrentMenu({ ...getters.getCurrentMenu(), depth3: el });
    setCurrentMenu({ ...getters.getCurrentMenu(), depth3: el });
    navigate(el.url);
  };

  return (
    <div id="lnb">
      <CSSTransition in={!lnb} timeout={300} classNames="slide-menu">
        <div>
          <nav>
            <ul>
              {depth2Menu
                ?.filter((el) => el.visible === true && (getters.getHotelInfo().is_hotel_property === 0 ? el.isMenuPerm === 1 || el.isMenuPerm === 3 : el.isMenuPerm === 2 || el.isMenuPerm === 3))
                ?.map((el, idx) => {
                  const isOpen = menuStatus[idx];
                  console.log(isOpen);
                  return (
                    <li
                      key={`depth2-${el.key}-${idx}`}
                      style={{ cursor: 'pointer' }}
                      className={isOpen ? 'on' : 'on'}
                      onClick={() => {
                        handleDepth2Menu(el, idx);
                      }}
                    >
                      <strong>{el.menuName}</strong>
                      <CSSTransition key={el.key} in={isOpen} timeout={300} classNames="dropdown-menu" unmountOnExit>
                        <div className={`dropdown-menu`} onClick={(e) => e.stopPropagation()}>
                          {menuData?.menus?.depth3[el.key]
                            ?.filter(
                              (el) => el.visible === true && (getters.getHotelInfo().is_hotel_property === 0 ? el.isMenuPerm === 1 || el.isMenuPerm === 3 : el.isMenuPerm === 2 || el.isMenuPerm === 3)
                            )
                            .map((el, idx) => {
                              return (
                                <ol key={`depth3-${el.key}-${idx}`}>
                                  <li style={{ cursor: 'pointer' }} className={location.pathname.startsWith(el.url) ? 'on' : ''} onClick={(event) => handleDepth3Menu(event, el)}>
                                    <a>{el.menuName}</a>
                                  </li>
                                </ol>
                              );
                            })}
                        </div>
                      </CSSTransition>
                    </li>
                  );
                })}
              {/* <li className="on">
              <strong>상품관리</strong>
              <ol>
                <li className="on">
                  <a href=".html">룸타입 설정</a>
                </li>
                <li>
                  <a href=".html">패키지</a>
                </li>
                <li>
                  <a href=".html">아이템</a>
                </li>
                <li>
                  <a href=".html">옵션</a>
                </li>
              </ol>
            </li>
            <li>
              <strong>설정</strong>
              <ol>
                <li>
                  <a href=".html">호텔 정보</a>
                </li>
                <li>
                  <a href=".html">약관 관리</a>
                </li>
                <li>
                  <a href=".html">계정 관리</a>
                </li>
              </ol>
            </li> */}
            </ul>
          </nav>
        </div>
      </CSSTransition>

      <span className="lnbOpen">
        <button className="btnLnb" onClick={() => tabActions.toggleLnb()}>
          {/* lnb toggle */}
        </button>
        <span></span>
      </span>
      {/* btnLnb 클릭시 <div id="containerWrap" class="lnbClose"> 로 class 토글 되어야 함 */}
    </div>
  );
};

export default Lnb;
