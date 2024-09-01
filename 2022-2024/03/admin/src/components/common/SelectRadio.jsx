import { useEffect, useState } from 'react';

const SelectRadio = ({ ...props }) => {
  const { title, requied, list, checked, onCheck, name } = props;
  console.log(list);
  const [open, setOpen] = useState(false);
  const [check, setCheck] = useState();
  const [selectCheck, setSelectCheck] = useState();
  const handleCheck = (el) => {
    setCheck(el);
  };

  useEffect(() => {
    if (!checked) {
      return;
    }
    console.log('qqqq => ', checked);

    setCheck(checked);
    setSelectCheck(checked);
  }, [checked]);

  return (
    <dl style={{ zIndex: open ? 10 : 0 }}>
      <dt>
        {title} {requied && <sup>*</sup>}
      </dt>
      <dd>
        <div className={`multiSSet ${open ? 'open' : ''}`}>
          <em className="mValue on" onClick={() => setOpen(!open)}>
            {selectCheck ? selectCheck?.title : '선택해주세요'}
          </em>
          <div className="selectArea posBottom on">
            <div className="item">
              {list?.map((e) => {
                return (
                  <span className="radioSet" key={`selectradio-key-${e.key}`}>
                    <input checked={check?.key === e.key} type="radio" id={e.key} onChange={() => handleCheck(e)} />
                    <label htmlFor={e.key}>{e.title}</label>
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
                  onCheck(name, check);
                  setOpen(!open);
                }}
              >
                적용
              </button>
            </div>
          </div>
        </div>
      </dd>
    </dl>
  );
};

export default SelectRadio;
