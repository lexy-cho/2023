import React, { useState } from 'react';
import { getters, actions } from '@store/BrandingStore';
import { TitleRadio } from '@components/common';

const Page = ({ children, title, sectionClass, viewMode = 'write', allList = [], viewId = undefined, onChange }) => {
  const currentMenu = getters.getCurrentMenu();

  const [radioOpen, setRadioOpen] = useState(false);
  const handleClick = () => {
    setRadioOpen(!radioOpen);
  };

  return (
    <section className={sectionClass}>
      <div className="subTit">
        <div>
          <em>{currentMenu?.depth1?.menuName}</em>
          <span>{currentMenu?.depth2?.menuName}</span>
          <span>{currentMenu?.depth3?.menuName}</span>
          {title && <span>{title}</span>}
        </div>
        {viewMode === 'write' && <h2>{title}</h2>}

        {(viewMode === 'view' || viewMode === 'modify') && (
          <>
            <TitleRadio
              isHeader={true}
              isSearch={true}
              title={title}
              checked={allList?.find((e) => e.id === Number(viewId))}
              list={allList}
              onCheck={(check) => {
                onChange(check);
                //view?.handleItemChange('coupon_seq', check.id);
              }}
            />
          </>
        )}
      </div>
      {children}
    </section>
  );
};

export default Page;
