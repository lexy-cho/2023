import React from 'react';
import { DatePicker } from '@components/common';

const SRWriteBasic = () => {
  const { dpMin, dpMax } = DatePicker();
  return (
    <div className="contentBack">
      <div className="content scroll">
        <div className="grid">
          <div>
            <article className="lbox">
              <div className="boxTit">
                <h3>기본 정보</h3>
                <span className="toggleSet">
                  <label>노출</label>
                  <input type="checkbox" />
                </span>
              </div>
              <div className="boxDt">
                <div className="grid">
                  <dl>
                    <dt>
                      아이템 이름 <sup>*</sup>
                    </dt>
                    <dd>
                      <input type="text" placeholder="아이템 이름 입력" />
                    </dd>
                  </dl>
                  <dl>
                    <dt>
                      아이템 타입 <sup>*</sup>
                    </dt>
                    <dd>
                      <input type="text" placeholder="Ex)AAA" />
                    </dd>
                  </dl>
                </div>
                <dl className="mt24">
                  <dt>설명</dt>
                  <dd>
                    <input type="text" placeholder="설명 입력" />
                  </dd>
                </dl>
                <div className="grid case3_1 mt24">
                  <dl>
                    <dt>PMS 코드</dt>
                    <dd>
                      <input type="text" placeholder="PMS 코드 입력" />
                    </dd>
                  </dl>
                  <dl>
                    <dt>Seq</dt>
                    <dd>
                      <input type="text" placeholder="Seq 입력" />
                    </dd>
                  </dl>
                  <div></div>
                </div>
              </div>
            </article>
            <article className="lbox">
              <div className="boxTit">
                <h3>룸 타입 선택</h3>
              </div>
              <div className="boxDt">
                <div className="multiSSet chipCase">
                  <div className="chipArea">
                    <em>선택하세요</em>
                    <div style={{ display: 'none' }}>
                      <button>DET</button>
                      <button>DET</button>
                      <button>DET</button>
                      <button>DET</button>
                      <button>DET</button>
                      <button>DET</button>
                    </div>
                  </div>
                  <div className="selectArea">
                    <div className="item">
                      <span className="checkSet">
                        <input type="checkbox" id="chip01" />
                        <label htmlFor="chip01">
                          <span>DET</span>
                          <em>DOBULE DELUXE ROOM</em>
                        </label>
                      </span>
                      <span className="checkSet">
                        <input type="checkbox" id="chip02" />
                        <label htmlFor="chip02">
                          <span>DET</span>
                          <em>DOBULE DELUXE ROOM</em>
                        </label>
                      </span>
                      <span className="checkSet">
                        <input type="checkbox" id="chip03" />
                        <label htmlFor="chip03">
                          <span>DET</span>
                          <em>DOBULE DELUXE ROOM</em>
                        </label>
                      </span>
                    </div>
                    <div className="bLine">
                      <button className="btnL">취소</button>
                      <button className="btnB">적용</button>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
          <div>
            <article className="lbox">
              <div className="boxTit">
                <h3>노출 기간</h3>
              </div>
              <div className="boxDt">
                <div className="grid">
                  <dl>
                    <dt>
                      시작 날짜 <sup>*</sup>
                    </dt>
                    <dd>
                      <input type="text" className="cal" placeholder="2024.01.01" id="datepicker1" onClick={() => dpMin.show()} />
                    </dd>
                  </dl>
                  <dl>
                    <dt>
                      종료 날짜 <sup>*</sup>
                    </dt>
                    <dd>
                      <input type="text" className="cal" placeholder="2024.01.01" id="datepicker2" onClick={() => dpMax.show()} />
                    </dd>
                  </dl>
                </div>
                <div className="grid case3_1 mt24">
                  <dl>
                    <dt>성인</dt>
                    <dd>
                      <input type="text" placeholder="Ex)0" />
                    </dd>
                  </dl>
                  <dl>
                    <dt>어린이</dt>
                    <dd>
                      <input type="text" placeholder="Ex)0" />
                    </dd>
                  </dl>
                  <dl>
                    <dt>1일 구매 가능 수량</dt>
                    <dd>
                      <input type="text" placeholder="Ex)0" />
                    </dd>
                  </dl>
                </div>
              </div>
            </article>
            <article className="lbox">
              <div className="boxTit">
                <h3>판매 옵션 설정</h3>
                <span className="toggleSet">
                  <label>사용</label>
                  <input type="checkbox" />
                </span>
              </div>
              <div className="boxDt">
                <div className="grid">
                  <dl>
                    <dt>선 판매 아이템</dt>
                    <dd>
                      <span className="selectSet">
                        <select name="" id="">
                          <option>선택하세요</option>
                        </select>
                      </span>
                    </dd>
                  </dl>
                  <dl>
                    <dt>
                      사용 가능일 <sup>*</sup>
                    </dt>
                    <dd>
                      <span className="selectSet">
                        <select name="" id="">
                          <option>선택하세요</option>
                          <option defaultValue="">당일 (마지막 날은 선택되지 않음)</option>
                          <option defaultValue="">익일 (첫째날은 선택되지 않음)</option>
                          <option defaultValue="">첫날만 사용</option>
                          <option defaultValue="">마지막 날만 사용</option>
                        </select>
                      </span>
                    </dd>
                  </dl>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
      <div className="bArea">
        <button className="btnL">취소하기</button>
        <button className="btnB">저장하기</button>
      </div>
    </div>
  );
};

export default SRWriteBasic;
