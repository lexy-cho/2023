import { useState } from 'react';
import codeData from '@data/code.json';
const AutoLang = ({ onClose, lang, onResult }) => {
  const langList = codeData.langType.filter((e) => e.key !== lang);

  const [checks, setChecks] = useState([]);

  const handleCheck = (checked, key) => {
    console.log(checked, key);
    if (key === 'all') {
      if (checked) setChecks([...langList.map((e) => e.key)]);
      else setChecks([]);
    } else {
      if (checked) {
        let newList = [...checks];
        newList.push(key);
        setChecks(newList);
      } else {
        setChecks(checks.filter((e) => e !== key));
      }
    }
  };

  return (
    <div className="basicPop autoLangPop" id="autoLangPop" style={{ display: 'block', height: 240 }}>
      <h1 className="pt">자동 번역 될 언어를 선택해주세요.</h1>
      <div className="pBack">
        <p className="sNoti">선택된 언어는 저장 시 자동으로 번역되어 저장됩니다.</p>
        <article className="boxDt mt24">
          <dl>
            <dt>
              다국어 선택 <em>( 기준 : {codeData?.langType?.find((e) => e.key === lang)?.title} )</em>
            </dt>
            <dd>
              <span className="checkSet">
                <input
                  checked={langList.length === checks.length}
                  type="checkbox"
                  id="all"
                  onChange={(e) => {
                    handleCheck(e.target.checked, 'all');
                  }}
                />
                <label htmlFor="all">전체</label>
              </span>

              {langList.map((el) => {
                return (
                  <span className="checkSet" key={`lang-key-${el.key}`}>
                    <input
                      checked={checks.some((e) => e === el.key)}
                      type="checkbox"
                      id={`${el.key}`}
                      onChange={(e) => {
                        handleCheck(e.target.checked, el.key);
                      }}
                    />
                    <label htmlFor={`${el.key}`}>{el.title}</label>
                  </span>
                );
              })}
            </dd>
          </dl>
        </article>
      </div>
      <div className="pBtn">
        <span className="fr">
          <button className="btnL sm" onClick={() => onClose()}>
            닫기
          </button>
          <button
            className="btnB sm"
            onClick={() => {
              onResult(checks), onClose();
            }}
          >
            저장 후 닫기
          </button>
        </span>
      </div>
    </div>
  );
};

export default AutoLang;
