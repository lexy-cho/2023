import React from 'react';
import { getters, actions } from '@store/BrandingStore';
const SettingPage = ({ children, title, sectionClass, isViewPage = false }) => {
  const currentMenu = getters.getCurrentMenu();
  //console.log(currentMenu);

  return (
    <section className={sectionClass}>
      <div className="subTit">
        <div>
          <em>{currentMenu?.depth1?.menuName}</em>
          <span>{currentMenu?.depth2?.menuName}</span>
          <span>{currentMenu?.depth3?.menuName}</span>
          {title && <span>{title}</span>}
        </div>
        {isViewPage ? (
          <div className="multiSSet h2Case">
            <em className="mValue on">패키지</em>
            <div className="selectArea">
              <div className="item">
                <span className="radioSet">
                  <input type="radio" id="" />
                  <label htmlFor="">First checkbox</label>
                </span>
                <span className="radioSet">
                  <input type="" id="" />
                  <label htmlFor="two2">Second checkbox</label>
                </span>
                <span className="radioSet">
                  <input type="radio" id="" />
                  <label htmlFor="">Third checkbox</label>
                </span>
              </div>
              <div className="bLine">
                <button className="btnL">취소</button>
                <button className="btnB">적용</button>
              </div>
            </div>
          </div>
        ) : (
          <h2>{title}</h2>
        )}
      </div>
      {children}
    </section>
  );
};

export default SettingPage;
