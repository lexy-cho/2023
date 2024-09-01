import React, { useState, forwardRef, useImperativeHandle, useRef, useEffect } from 'react';
import { getters, actions } from '@store/BrandingStore';
import { useOutSide } from './hooks/useOutSide';
const SearchHotelRadio = forwardRef(({ onConfirm, onCancel, value, open }, ref) => {
  const [hotelSeq, setHotelSeq] = useState(value);

  useImperativeHandle(ref, () => ({
    clear: () => {
      setCheck([]);
    },
  }));

  const handleSavePropertie = () => {
    actions.setHotel(getters.getAllHotelList().filter((el) => el.hotel_seq === hotelSeq)[0]);

    onConfirm();
  };

  //const list = getters.getPropertieList().map();
  const radioRef = useRef();
  const handleClickOutside = (event) => {
    if (radioRef?.current && !radioRef?.current?.contains(event.target)) {
      //onCancel();
    }
  };

  useEffect(() => {
    //if (dropdownRef.current) {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
    // }
  }, [radioRef?.current]);
  // useOutSide(radioRef, () => {
  //   onCancel();
  // });

  return (
    <>
      <div className="after" style={{ display: `${open ? 'block' : 'none'}` }} ref={radioRef}>
        <div className="multiSSet item">
          <div className="selectArea">
            <div className="item">
              {getters.getAllHotelList()?.map((el) => {
                return (
                  <span className="radioSet" key={`propertie-key-${el.hotel_seq}`}>
                    <input type="radio" value={el.hotel_seq} checked={hotelSeq === el.hotel_seq} id="one2" onChange={(e) => setHotelSeq(el.hotel_seq)} />
                    <label htmlFor="one2" style={{ color: 'black' }}>
                      {el.hotel_name}
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
                  onCancel(), setHotelSeq(value);
                }}
              >
                취소
              </button>
              <button className="btnB" onClick={() => handleSavePropertie()}>
                적용
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});

SearchHotelRadio.defaultProps = {
  isChipCase: false,
};
export default SearchHotelRadio;
