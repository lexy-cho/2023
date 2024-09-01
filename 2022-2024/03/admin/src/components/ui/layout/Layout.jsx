import React, { useState, useEffect } from 'react';
// import Lnb from '../lnb/Lnb';
import { Outlet } from 'react-router-dom';
import { ModalTabPresent, BaseModal } from '@components/common';
const Header = React.lazy(() => import('../header/Header'));
const Lnb = React.lazy(() => import('../lnb/Lnb'));
import routes from '../../../router/routes';

import { getters, actions, subscribeTabComponent } from '@store/TabStore';
import { getters as brGetter, actions as brActions } from '@store/BrandingStore';
import menuData from '@data/menu.json';
import { useLocation, useNavigate } from 'react-router-dom';
const Layout = ({ children }) => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [mouseOver, setMouseOver] = useState();
  const [depth2MouseOver, setDepth2MouseOver] = useState();
  const [depth3MouseOver, setDepth3MouseOver] = useState();
  const [tabComponent, setTabComponent] = useState(getters.getTabComponent());

  const [lnb, setLnb] = useState(getters.getLnb());
  //const lnbO = location.pathname !== '/' && location.pathname !== '/dashboard';
  //const [lnb, setLnb] = useState(lnbO && getters.getLnb());

  const handleMouseOver = (key) => {
    setMouseOver(key);
  };
  const handleDepth2MouseOver = (key) => {
    setDepth2MouseOver(key);
  };

  const handleDepth3MouseOver = (key) => {
    setDepth3MouseOver(key);
  };

  const handleAddComponent = (el) => {
    const tabComponent = getters.getTabComponent();
    if (tabComponent?.some((some) => el.key === some.key)) return;
    if (tabComponent?.length >= 4) {
      alert('더이상 추가할수 없습니다.');
      return;
    }
    console.log(routes.filter((e) => e.path === `${el.url}`)[0].path);
    actions.addViewComponent(el.key, routes.filter((e) => e.path === `${el.url}`)[0].path, {}, true, el.menuName);
    setMenuOpen(!menuOpen);
  };

  const handleUpdateComponent = (el) => {
    actions.updateViewComponent(el.key, el.component, el.stat, true, el.props);
  };

  const handleUpdateMinimal = (el) => {
    actions.updateViewComponent(el.key, el.component, el.stat, false, el.props);
  };

  const handleDeleteComponent = (el) => {
    actions.deleteViewComponent(el.key);
  };

  useEffect(() => {
    subscribeTabComponent((state) => {
      setLnb(state.lnb);
      console.log('subscribeTabComponent', state.tabComponent);
      setTabComponent(state.tabComponent);
    });
  }, []);

  const [modalTab, setModalTab] = useState([]);

  const [tabOpen, setTabOpen] = useState(false);

  const handleOpen = (tab, component) => {
    const route = routes.filter((el) => el.name === tab)[0];

    setTabComponent(`/#${route.path}`);
    setTabOpen(true);
  };

  //const lnbO = location.pathname !== '/' && location.pathname.contains('dashboard');

  return (
    <div id="wrap">
      <Header />

      <div id="containerWrap" className={lnb ? '' : 'lnbClose'}>
        <Lnb lnb={lnb} />
        <div id="container">
          <div className={`dualArea ${menuOpen ? 'on' : ''}`}>
            {/* 메뉴 선택 시 <div className="dualArea on"> 추가 */}
            <div className="dtab">
              {tabComponent.map((el) => {
                return (
                  <span key={`menu-key-${el.key}`}>
                    {el.menuName}
                    <button type="button" onClick={() => handleUpdateComponent(el)}>
                      열기
                    </button>
                    <button onClick={() => handleDeleteComponent(el)}>삭제</button>
                  </span>
                );
              })}

              {/* <span>
                프로모션 <button onClick={() => handleOpen()}>열기</button>
                <button>삭제</button>
              </span> */}
              {/* 메뉴 선택 시 span 통으로 추가 */}
            </div>
            <button className="btnDual" onClick={() => setMenuOpen(!menuOpen)}>
              dual Add
            </button>
            <div
              className="duallist"
              onMouseOut={() => {
                handleMouseOver(''), handleDepth2MouseOver('');
              }}
            >
              <ul>
                {menuData.menus.depth1
                  ?.filter((e) => e.visible === true && (brGetter?.getHotelInfo()?.is_hotel_property === 0 ? e?.isMenuPerm === 1 || e?.isMenuPerm === 3 : e?.isMenuPerm === 2 || e?.isMenuPerm === 3))
                  ?.map((el, i) => {
                    return (
                      <li key={`menu-1depth-key-${el.key}-${i}`} onMouseOver={() => handleMouseOver(el.key)} className={`${el.key === mouseOver ? 'choice' : ''}`}>
                        <span>{el.menuName}</span>
                        <ol>
                          {menuData.menus.depth2[el.key]
                            ?.filter(
                              (el) =>
                                el.visible === true && (brGetter?.getHotelInfo()?.is_hotel_property === 0 ? el?.isMenuPerm === 1 || el?.isMenuPerm === 3 : el?.isMenuPerm === 2 || el?.isMenuPerm === 3)
                            )
                            ?.map((el2, i2) => {
                              return (
                                <li key={`menu-2depth-key-${el2.key}-${i2}`} className={`${el2.key === depth2MouseOver ? 'choice' : ''}`} onMouseOver={() => handleDepth2MouseOver(el2.key)}>
                                  <span>{el2.menuName}</span>
                                  <ol className="last">
                                    {menuData.menus.depth3[el2.key]
                                      .filter(
                                        (el) =>
                                          el.visible === true &&
                                          (brGetter?.getHotelInfo()?.is_hotel_property === 0 ? el.isMenuPerm === 1 || el.isMenuPerm === 3 : el.isMenuPerm === 2 || el.isMenuPerm === 3)
                                      )
                                      .map((el3, i3) => {
                                        return (
                                          <li
                                            key={`menu-3depth-key-${el3.key}-${i3}`}
                                            className={`${tabComponent.some((some) => el3.key === some.key) ? 'choice' : ''}`}
                                            style={{ cursor: 'pointer' }}
                                            onClick={() => handleAddComponent(el3)}
                                          >
                                            <span>{el3.menuName}</span>
                                          </li>
                                        );
                                      })}
                                  </ol>
                                </li>
                              );
                            })}
                        </ol>
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>
          {/* {children} */}
          <Outlet />
        </div>
      </div>

      {tabComponent?.map((el) => {
        console.log('tab--> ', el);
        const component = routes.filter((e) => e.path === el.component)[0];
        console.log('component =--> ', component);
        return (
          <div id="modal-root-tab" key={`tab-modal-key-${el.key}`} style={{ display: `${el.visible ? 'block' : 'none'}` }}>
            <div className="popTDim">
              <div className="tabPop">
                <div className="pt">
                  <button className="btnPTMini" onClick={() => handleUpdateMinimal(el)}>
                    최소화
                  </button>
                  <button className="btnPTClose" onClick={() => handleDeleteComponent(el)}>
                    닫기
                  </button>
                </div>
                <div className="pBack">
                  <component.component {...el.props} />
                </div>
              </div>
            </div>
          </div>

          // <BaseModal isOpen={el.visible} onMinimal={() => handleUpdateMinimal(el)} onClose={() => handleDeleteComponent(el)} key={`tab-modal-key-${el.key}`}>
          //   <component.component {...el.props} />
          // </BaseModal>
        );
      })}
    </div>
  );
};

export default Layout;
