import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { BaseButton, Pagenation } from '@components/common';
import useFaq from '@components/hooks/useFaq';
import FaqItem from './FaqItem';

const Faq = ({ type }) => {
  const { items, fillterItems, tab, selectedTab, setSelectedTab } = useFaq();
  if (type === 'main') {
    return (
      <div className="mainFaq">
        <div className="infoAreaTit">
          <em>더 궁금한 점이 있으신가요?</em>
          <strong>FAQ</strong>
        </div>
        <div className="tabNav mainCase">
          <nav>
            <ul>
              {tab.map((el, idx) => {
                return (
                  <li className={`${selectedTab === el.value ? 'on' : ''}`} key={`selectedTab_${idx}`}>
                    <BaseButton type="button" label={el.title} onClick={() => setSelectedTab(el.value)} />
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
        {/* -- */}
        <div className="fqalsBack">
          <div className="fqals">
            <div>
              {fillterItems?.map((el, idx) => {
                return <FaqItem key={el.bbsNo} element={el} />;
              })}
            </div>
          </div>

          <div className="btn">
            <Link to="/help">더보기</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section>
      <h2>FAQ</h2>
      <article>
        <div className="tabNav">
          <nav>
            <ul>
              {tab.map((el, idx) => {
                return (
                  <li className={`${selectedTab === el.value ? 'on' : ''}`} key={`selectedTab_${idx}`}>
                    <BaseButton type="button" label={el.title} onClick={() => setSelectedTab(el.value)} />
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
        <div className="fqalsBack">
          <div className="fqals">
            <div>
              {fillterItems?.map((el, idx) => {
                return <FaqItem key={el.bbsNo} element={el} />;
              })}
            </div>
          </div>

          <Pagenation />
        </div>
      </article>
    </section>
  );
};

export default Faq;
