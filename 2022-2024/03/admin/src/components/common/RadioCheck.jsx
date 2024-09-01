import React, { useEffect, useState, forwardRef, useImperativeHandle } from 'react';

const RadioCheck = forwardRef(({ title, list, isReset = false, onCheck, checked, isAll, onChangeCheck = () => {}, isSearch, readOnly, isHeader, addClass }, ref) => {
  const [open, setOpen] = useState(false);

  const [itemOpen, setItemOpen] = useState(false);
  const [data, setData] = useState(list || []);

  const [check, setCheck] = useState();
  const [selectCheck, setSelectCheck] = useState();

  const handleAllCheck = (isChecked) => {
    if (isChecked) {
      setCheck(data);
    } else {
      setCheck([]);
    }
  };

  const handleCheck = (el) => {
    setCheck(el);
    // let checks = [...check];
    // const isDup = checks.some((check) => check.id === el.id);
    // if (isDup) {
    //   setCheck(checks.filter((check) => check.id !== el.id));
    // } else {
    //   setCheck([...checks, el]);
    // }
  };

  const handleDelete = (el, event) => {
    event.stopPropagation();

    let checks = [...check];
    setCheck(checks.filter((e) => e.id !== el.id));
    if (onCheck) onCheck(checks.filter((e) => e.id !== el.id));
  };

  useImperativeHandle(ref, () => ({
    clear: () => {
      console.log('clear');
      setCheck();
      setSelectCheck();
    },
    open: () => {
      setOpen(!open);
    },
  }));

  useEffect(() => {
    if (!checked) {
      if (isReset) {
        setSelectCheck(undefined);
        setCheck(undefined);
      }
      return;
    }

    setCheck(checked);
    setSelectCheck(checked);
  }, [checked]);

  useEffect(() => {
    onChangeCheck(check);
  }, [check]);

  useEffect(() => {
    setData(list);
  }, [list]);

  return (
    <div className={`multiSSet item ${addClass ? addClass : ''} ${open ? 'open' : ''}`} ref={ref}>
      <em className={`mValue on`} onClick={() => !readOnly && setOpen(!open)}>
        {/* {check?.length > 0 ? check[0].title : title || '프로퍼티'} <i>{check.length}</i> */}
        {isHeader && selectCheck ? selectCheck?.title : title || '프로퍼티'}
      </em>

      <div className="selectArea">
        <div className="item">
          {isAll && (
            <span className="radioSet">
              <input checked={selectCheck.length === data.length} type="radio" id={'ALL'} onChange={(e) => handleAllCheck(e.target.checked)} />
              <label htmlFor={'ALL'}>{'전체'}</label>
            </span>
          )}
          {data?.map((el, i) => {
            return (
              <span className="radioSet" key={`check-item-key-${i}`} style={{ zIndex: i + 10 - i * 2 }}>
                <input checked={check?.id === el.id} type="radio" id={`radio-${el.id}-key-${i}`} onChange={() => handleCheck(el)} />
                {isSearch ? (
                  <label htmlFor={`radio-${el.id}-key-${i}`}>{el.title}</label>
                ) : (
                  <label htmlFor={`radio-${el.id}-key-${i}`}>
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

RadioCheck.defaultProps = {
  isChipCase: false,
  isSearch: true,
  isHeader: false,
  readOnly: false,
};
export default RadioCheck;
