import React from 'react';
import { dateFormat } from '@utils/DateUtil';
import { SortableContainer } from 'react-sortable-hoc';

const Table = SortableContainer(({ multiRow = false, title, subTitle, onAddBtn, header, data, onSelDelBtn, onRewardBtn, onClickDel, onAllCheck, list, isMultiDel, tableClass }) => {
  const widths = header?.map((el) => {
    return el.width;
  });
  const headerTitles = header?.map((el) => {
    return { title: el.title, subHeader: el.subHeader };
  });

  return (
    <div className="content">
      <article className="lbox listCase">
        <div className="boxTit">
          {subTitle ? (
            <div className={'left'}>
              <h3>{title}</h3>
              {subTitle && <em>{subTitle}</em>}
              <span className="right">
                {onSelDelBtn && isMultiDel && (
                  <button className="btnW ss" onClick={onClickDel} style={{ cursor: 'pointer' }}>
                    선택 삭제
                  </button>
                )}

                {onAddBtn && (
                  <button className="bAdd" onClick={onAddBtn}>
                    추가
                  </button>
                )}
                {onRewardBtn && (
                  <button className="bAdd" onClick={onRewardBtn}>
                    기본 혜택
                  </button>
                )}
              </span>
            </div>
          ) : (
            <>
              <h3>{title}</h3>
              {subTitle && <em>{subTitle}</em>}
              <span className="right">
                {onSelDelBtn && isMultiDel && (
                  <button className="btnW ss" onClick={onClickDel}>
                    선택 삭제
                  </button>
                )}

                {onAddBtn && (
                  <button className="bAdd" onClick={onAddBtn}>
                    추가
                  </button>
                )}
                {onRewardBtn && (
                  <button className="bAdd" onClick={onRewardBtn}>
                    기본 혜택
                  </button>
                )}
              </span>
            </>
          )}
        </div>
        <div className="boxDt">
          <div className={`tls${multiRow ? ' optionList' : ''} ${tableClass}`}>
            <table>
              <colgroup>
                {widths?.map((el, i) => {
                  return <col width={el} key={`table-col-key-${i}`} />;
                })}
              </colgroup>
              <thead>
                <tr>
                  {headerTitles?.map((el, index) => {
                    if (el === 'checkbox') {
                      return (
                        <th key={`header-key-${index + 1}`}>
                          <span className="checkSet">
                            <input type="checkbox" id="" onChange={() => onAllCheck(list)} />
                          </span>
                        </th>
                      );
                    } else {
                      if (el.title === 'arr') {
                        return (
                          <th className="rowDiv">
                            <div className="addRowCol">
                              {el.subHeader?.map((sub, i) => {
                                return <span key={`sub-header-key-${i}`}>{sub.title}</span>;
                              })}
                              {/* <span>옵션 아이템</span>
                              <span>기준</span>
                              <span>수량</span>
                              <span>금액(￦)</span> */}
                            </div>
                          </th>
                        );
                      }
                      if (el.title === 'marketarr') {
                        return (
                          <th className="rowDiv">
                            <div className="addRowCol">
                              <span>마켓 코드</span>
                              <span>비고</span>
                            </div>
                          </th>
                        );
                      } else {
                        return <th key={`header-key-${index + 1}`}>{el.title}</th>;
                      }
                    }
                  })}
                </tr>
              </thead>
              <tbody>
                {data?.length > 0 ? (
                  data
                ) : (
                  <tr>
                    <td colSpan={headerTitles?.length} className="noResult">
                      <div>검색 결과가 없습니다.</div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </article>
    </div>
  );
});

export default Table;
