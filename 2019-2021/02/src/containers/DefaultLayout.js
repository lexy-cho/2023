import React, { Suspense, useEffect, useState, useContext } from 'react';
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';

import routes from '../routes/routes';

import DefaultHeader from './DefaultHeader';
import DefaultFooter from './DefaultFooter';

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init()

const DefaultLayout = () => {
  const [ScrollY, setScrollY] = useState(0);
  const [BtnStatus, setBtnStatus] = useState(false); // 버튼 상태

  const handleFollow = () => {
    setScrollY(window.pageYOffset);
    if(ScrollY > 100) {
      // 100 이상이면 버튼이 보이게
      setBtnStatus(true);
    } else {
      // 100 이하면 버튼이 사라지게
      setBtnStatus(false);
    }
  }
  const handleTop = () => {  // 클릭하면 스크롤이 위로 올라가는 함수
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
    setScrollY(0);  // ScrollY 의 값을 초기화
    setBtnStatus(false); // BtnStatus의 값을 false로 바꿈 => 버튼 숨김
  }
  useEffect(() => {
    const watch = () => {
      window.addEventListener('scroll', handleFollow)
    }
    watch();
    return () => {
      window.removeEventListener('scroll', handleFollow)
    }
  })
  return (
    <div className="app">

      <div id="wrap">
        <DefaultHeader scroll={ScrollY}/>

        <div className="app-body">
          <Switch>
            {routes.map((route, idx) => {
              return route.component ? (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  render={props => (
                    <route.component {...props} />
                  )} />
              ) : (null);
            })}
          </Switch>
          { BtnStatus && <button className="btnTop" onClick={handleTop}>TOP</button> }
        </div>
        <DefaultFooter/>

      </div>

    </div>
  )
}

export default DefaultLayout;
