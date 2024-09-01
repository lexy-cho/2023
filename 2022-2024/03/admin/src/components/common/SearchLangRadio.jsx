import React, { useState, forwardRef, useImperativeHandle } from 'react';
import { getters, actions } from '@store/BrandingStore';
const SearchLangRadio = forwardRef(({ onConfirm, onCancel, value, open, list }, ref) => {
  const [lang, setLang] = useState(value);

  useImperativeHandle(ref, () => ({
    clear: () => {
      setCheck([]);
    },
  }));

  const handleSave = () => {
    //actions.setHotel(getters.getAllHotelList().filter((el) => el.hotel_seq === hotelSeq)[0]);
    console.log(lang);
    actions.setLang(lang);
    onConfirm();
  };

  return (
    <>
      <div className="after" style={{ display: `${open ? 'block' : 'none'}` }}>
        <div className="multiSSet item">
          <div className="selectArea">
            <div className="item">
              {list?.map((el) => {
                return (
                  <span className="radioSet" key={`lang-radio-key-${el.key}`}>
                    <input type="radio" value={el.key} checked={lang === el.key} id="langradio" onChange={(e) => setLang(el.key)} />
                    <label htmlFor="langradio" style={{ color: 'black' }}>
                      {el.title}
                    </label>
                  </span>
                );
              })}
            </div>
            <div className="bLine">
              <button
                className="btnL"
                style={{ color: 'black' }}
                onClick={() => {
                  onCancel(), setLang(value);
                }}
              >
                취소
              </button>
              <button className="btnB" onClick={() => handleSave()}>
                적용
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});

SearchLangRadio.defaultProps = {
  isChipCase: false,
};
export default SearchLangRadio;
