import React, { useState, useEffect } from 'react';
import Select from './Select';
const Pagenation = ({ total, maxPage, perPage, onChangePage, onCountChange, cPage = 0 }) => {
  // const [count, setCount] = useState([
  //   { id: 20, title: '20' },
  //   { id: 50, title: '50' },
  //   { id: 100, title: '100' },
  // ]);
  const [count, setCount] = useState([20, 50, 100]);
  const [curPage, setCurPage] = useState(1);
  let page = [];

  if (maxPage === 0) {
    page.push(1);
  } else {
    for (let i = 0; i < maxPage; i++) {
      page.push(i + 1);
    }
  }
  useEffect(() => {
    onChangePage(curPage);
  }, [curPage]);

  const handlePrevPage = () => {
    if (curPage <= 1) {
      return;
    }
    setCurPage(curPage - 1);
  };

  const handleNextPage = () => {
    if (curPage >= maxPage) {
      return;
    }

    setCurPage(curPage + 1);
  };

  useEffect(() => {
    if (cPage > 0) setCurPage(cPage);
  }, [cPage]);

  return (
    <div className="paginate">
      <span>
        {maxPage > 5 && (
          <a
            className="first"
            onClick={() => {
              setCurPage(1);
            }}
          >
            처음
          </a>
        )}

        <a className="prev" onClick={() => handlePrevPage()}>
          이전
        </a>
        {page.map((el, index) => {
          return (
            <a
              onClick={() => {
                setCurPage(el);
              }}
              className={el === curPage ? 'on' : ''}
              key={`pagenation-key-${el}`}
            >
              {el}
            </a>
          );
        })}
        <a className="next" onClick={() => handleNextPage()}>
          다음
        </a>
        {maxPage > 5 && (
          <a
            className="last"
            onClick={() => {
              setCurPage(maxPage);
            }}
          >
            마지막
          </a>
        )}
      </span>
      {/* <Select list={count} onHandleSelect={(v) => console.log(v)} value={perPage} /> */}
      <span className="selectSet">
        <select name="" id="" onChange={onCountChange}>
          {count.map((e) => {
            return <option key={`select-option-key-${e}`} value={Number(e)} selected={perPage === e}>{`${e}개씩 보기`}</option>;
          })}
        </select>
      </span>
    </div>
  );
};

export default Pagenation;
