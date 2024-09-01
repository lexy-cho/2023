import React from 'react';
import { SearchInput, InputDate, SearchCheck, DragableTable, DragableItem, ModalFormButton } from '@components/common';
import useModalPackageMain, { useModalPackageMainApi } from './hooks/useModalPackageMain';
const PackageMain = ({ onClose }) => {
  const { packageMain } = useModalPackageMain();
  const { api } = useModalPackageMainApi({ packageMain, onClose });

  return (
    <div className="fullPop packageMainPop" id="packageMainPop" style={{ display: 'block' }}>
      <button className="btnPClose" onClick={() => onClose()}>
        닫기
      </button>
      <h1 className="pt">메인 설정</h1>
      <div className="pBack">
        <p className="noti">홈페이지 메인 패키지에 대표로 노출시킬 4개 항목을 선택합니다. 위에서 아래로 순서대로 노출됩니다.</p>
        {/**/}
        <div className="mainSetList">
          <article className="lbox listCase">
            <div className="boxTit">
              <div className="left">
                <h3>패키지 목록</h3>
                <SearchInput
                  onHandleSearch={() => {
                    handleSearch();
                  }}
                  defaultValue={packageMain?.keyword}
                  placeholder={'프로모션 검색'}
                  onHandleChange={(e) => packageMain?.setKeyword(e)}
                />
              </div>
            </div>
            <div className="boxDt scroll">
              <div className="tls">
                <DragableTable
                  isModal={true}
                  isShiftDrag={false}
                  header={packageMain?.headers}
                  list={packageMain?.list?.all_package_list}
                  ItemComponent={DragableItem}
                  RowComponent={LeftItem}
                  onAllCheck={packageMain?.handleAllCheck}
                  onChange={packageMain?.handleCheck}
                  checkList={packageMain?.mainList?.main_package_list}
                />
              </div>
            </div>
          </article>
          <button className="move">이동</button>
          <article className="lbox listCase">
            <div className="boxTit">
              <h3>메인 설정 목록</h3>
            </div>
            <div className="boxDt scroll">
              <div className="tls">
                <DragableTable
                  isModal={true}
                  isShiftDrag={false}
                  header={packageMain?.mainHeaders}
                  list={packageMain?.mainList?.main_package_list}
                  ItemComponent={DragableItem}
                  RowComponent={RightItem}
                  onSortEnd={packageMain.handleSortEnd}
                  helperClass={'row-class-equal dragProList'}
                  onDelete={packageMain?.handleDelete}
                />
              </div>
            </div>
          </article>
        </div>
      </div>
      <ModalFormButton isSubmit={api.isSubmit} onCancel={() => onClose()} onSave={() => api?.handleSave()} />
    </div>
  );
};

export const LeftItem = ({ ...props }) => {
  const { num, index, el, DragHandler, onMouseDown, onMouseOver, isSelect, onChange, checkList } = props;

  return (
    <tr key={`package-modal-key-${num + 1}`}>
      <td>
        <span className="checkSet">
          <input type="checkbox" checked={checkList?.some((e) => e.package_seq === el.package_seq)} id="" onChange={(e) => onChange(el, e)} />
        </span>
      </td>
      <td>{el.title}</td>
      <td>{el.tag_hotel_list?.map((el) => el.hotel_name).join(',')}</td>
    </tr>
  );
};

export const RightItem = ({ ...props }) => {
  const { num, index, el, DragHandler, onMouseDown, onMouseOver, isSelect, onDelete } = props;
  return (
    <tr>
      <td>
        <DragHandler />
      </td>

      <td>{el.title}</td>
      <td>{el.tag_hotel_list.map((el) => el.hotel_name).join(',')}</td>
      <td>
        <button className="bEX" onClick={() => onDelete(el)}>
          Del
        </button>
      </td>
    </tr>
  );
};

export default PackageMain;
