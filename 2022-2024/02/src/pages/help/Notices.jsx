import React, { useEffect } from 'react';
import useNotices from './hooks/useNotices';
import { Pagenation } from '@components/common';
import NoticesItem from './components/NoticesItem';

const Notices = () => {
  const { params, items, total, perPage, currentPage, setCurrentPage } = useNotices();
  return (
    <section>
      <h2>공지사항</h2>
      <article>
        <div className="noticelsBack">
          <div className="noticels">
            <div className="box">
              {items.map((el, idx) => (
                <NoticesItem key={el.bbsNo} element={el} />
              ))}
            </div>
          </div>
          <Pagenation total={total} perPage={perPage} currentPage={currentPage} onPageChange={(page) => setCurrentPage(page)} />
        </div>
      </article>
    </section>
  );
};

export default Notices;
