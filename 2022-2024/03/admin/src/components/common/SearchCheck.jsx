import React, { useEffect, useState, forwardRef, useImperativeHandle, useRef } from 'react';

const SearchCheck = forwardRef(({ title, list, onCheck, isCheckSync = false, checked, isAll, isChipCase, onChangeCheck = () => {}, isSearch, readOnly, isHeader, isFilter = false }, ref) => {
  const [open, setOpen] = useState(false);

  const [itemOpen, setItemOpen] = useState(false);
  const [data, setData] = useState(list || []);

  const [check, setCheck] = useState([]);
  const [selectCheck, setSelectCheck] = useState([]);

  const handleAllCheck = (isChecked) => {
    if (isChecked) {
      setCheck(data);
    } else {
      setCheck([]);
    }
  };

  const handleCheck = (el) => {
    let checks = [...check];
    const isDup = checks.some((check) => check.id === el.id);
    if (isDup) {
      setCheck(checks.filter((check) => check.id !== el.id));
    } else {
      setCheck([...checks, el]);
    }
  };

  const handleDelete = (el, event) => {
    event.stopPropagation();

    let checks = [...check];
    setCheck(checks.filter((e) => e.id !== el.id));
    if (onCheck) onCheck(checks.filter((e) => e.id !== el.id));
    setSelectCheck(checks.filter((e) => e.id !== el.id));
  };

  useImperativeHandle(ref, () => ({
    clear: () => {
      setCheck([]);
      setSelectCheck([]);
    },
    open: () => {
      setOpen(!open);
    },
  }));

  useEffect(() => {
    //if (!data) return;
    const checks = data?.filter((hotel) => {
      return checked?.some((item) => item.seq === hotel.id);

      // const mutHotel = hotel;
      // if (typeof hotel?.id === 'string' && hotel?.id?.includes('_')) {
      //   mutHotel.id = parseInt(mutHotel?.id?.split('_')[1]);
      // }
      // return checked?.some((item) => item.seq === mutHotel.id);
    });

    setCheck(checks);
    setSelectCheck(checks);
  }, [checked]);
  // }, [checked, data]);

  useEffect(() => {
    onChangeCheck(check);

    if (isCheckSync) setSelectCheck(check);
  }, [check]);

  useEffect(() => {
    setData(list);
  }, [list]);

  const checkRef = useRef();
  const handleClickOutside = (event) => {
    if (checkRef?.current && !checkRef?.current?.contains(event.target)) {
      //onCancel();
      // setOpen(!open);
      // setCheck(selectCheck);
    }
  };

  useEffect(() => {
    //if (dropdownRef.current) {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
    // }
  }, [checkRef?.current]);

  return (
    <div className={`multiSSet ${isChipCase ? 'chipCase' : ''} ${open ? 'open' : ''}`} ref={ref} style={{ zIndex: open ? 20 : 0 }}>
      {isChipCase ? (
        <div className="chipArea" onClick={(e) => !readOnly && setOpen(!open)}>
          <em style={{ display: `${selectCheck?.length > 0 ? 'none' : 'block'}` }}>선택하세요</em>
          {selectCheck?.map((el, i) => {
            return (
              <button key={`check-chiparea-key-${i}`} onClick={(e) => !readOnly && handleDelete(el, e)}>
                {el.title}
              </button>
            );
          })}
        </div>
      ) : (
        <em className={`mValue on`} onClick={() => !readOnly && setOpen(!open)}>
          {/* {check?.length > 0 ? check[0].title : title || '프로퍼티'} <i>{check.length}</i> */}
          {isFilter
            ? title
            : isHeader && selectCheck?.length > 0
            ? selectCheck.length > 4
              ? `${selectCheck
                  .slice(0, 4)
                  .map((e) => e.title)
                  .join(',')}..`
              : selectCheck.map((e) => e.title).join(',')
            : `${title}` || '프로퍼티'}{' '}
          {/* {isHeader  && selectCheck?.length > 0
            ? selectCheck.length > 4
              ? `${selectCheck
                  .slice(0, 4)
                  .map((e) => e.title)
                  .join(',')}..`
              : selectCheck.map((e) => e.title).join(',')
            : `${title}11` || '프로퍼티'}{' '} */}
          {!isFilter && selectCheck?.length > 0 && <i>{selectCheck?.length}</i>}
        </em>
      )}

      <div className="selectArea">
        <div className="item">
          {isAll && (
            <span className="checkSet">
              <input checked={check?.length === data?.length} type="checkbox" id={'ALL'} onChange={(e) => handleAllCheck(e.target.checked)} />
              <label htmlFor={'ALL'}>{'전체'}</label>
            </span>
          )}
          {data?.map((el, i) => {
            return (
              <span className="checkSet" key={`check-item-key-${i}`}>
                <input checked={check.some((el2) => el2.id === el.id)} type="checkbox" id={el.id} onChange={() => handleCheck(el)} />
                {isSearch ? (
                  <label htmlFor={el.id}>{el.title}</label>
                ) : (
                  <label htmlFor={el.id}>
                    {/* <span>DET</span>
                    <em>DOBULE DELUXE ROOM</em> */}
                    <span>{el.title}</span>
                    <em>{''}</em>
                  </label>
                )}
              </span>
            );
          })}
        </div>
        <div className="bLine">
          <button
            className="btnL"
            onClick={() => {
              setOpen(!open);
              setCheck(selectCheck);
            }}
          >
            취소
          </button>
          <button
            className="btnB"
            onClick={() => {
              setSelectCheck(check);
              onCheck(check);
              setOpen(!open);
            }}
          >
            적용
          </button>
        </div>
      </div>
    </div>
  );
});

SearchCheck.defaultProps = {
  isChipCase: false,
  isSearch: true,
  isHeader: false,
  readOnly: false,
};
export default SearchCheck;
