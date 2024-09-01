import React, { forwardRef } from "react";
import { Pagenation, BaseButton } from '@components/common';
import sample01 from '@assets/images/sample/sample10.png';

const DetailQna = forwardRef((props, ref) => {
    return (
      <article ref={detailQnaRef => (ref.current[1] = detailQnaRef)}>
        <div className="back qnaCase">
          <div className="sellerProfile">
            <div className="spBack">
              <span className="profileImg"><img src={sample01} /></span>
              <div>
                <strong>홍길동</strong>
                <p>
                  국무회의는 정부의 권한에 속하는 중요한 정책을 심의한다. 국회의원은 법률이 정하는 직을 겸할 수 없다. 국회의원은 현행범인인 경우를 제외하고는 회기중 국회의 동의없이 체포 또는 구금되지 아니한다.<br/>
                  공무원의 신분과 정치적 중립성은 법률이 정하는 바에 의하여 보장된다. 대통령의 임기가 만료되는 때에는 임기만료 70일 내지 40일전에 후임자를 선거한다. 국무회의는 정부의 권한에 속하는 중요한 정책을 심의한다. 국회의원은 법률이 정하는 직을 겸할 수 없다. 회기중 국회의 동의없이 체포되지 아니한다.
                </p>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="qnaList">
            <div className="thead">
              <strong>제목</strong>
              <div>
                <span>작성일</span>
                <span className="name">작성자</span>
                <span>답변상태</span>
              </div>
            </div>
            <div className="tbody">
              <dl>
                <dt>
                  <strong>언제 배송되는 건가요?</strong>
                  <div>
                    <span>2024.04.20</span>
                    <span className="name">username1</span>
                    <span>답변대기</span>
                  </div>
                </dt>
                <dd>
                  <div className="qtxt">
                    언제 배송되는 건가요? 언제 배송되는 건가요? 언제 배송되는 건가요? 언제 배송되는 건가요? 언제 배송되는 건가요? 언제 배송되는 건가요? <br/>
                    언제 배송되는 건가요? 언제 배송되는 건가요? 언제 배송되는 건가요? 언제 배송되는 건가요? 언제 배송되는 건가요? 언제 배송되는 건가요?
                  </div>
                  <div className="modify"><span><BaseButton type='button' label={'수정'} /></span><BaseButton type='button' label={'삭제'} /></div>
                </dd>
              </dl>
              <dl>
                <dt>
                  <strong>언제 배송되는 건가요?</strong>
                  <div>
                    <span>2024.04.20</span>
                    <span className="name">username1</span>
                    <span className="aEnd">완료</span>
                  </div>
                </dt>
                <dd>
                  <div className="qtxt">
                    언제 배송되는 건가요? 언제 배송되는 건가요? 언제 배송되는 건가요? 언제 배송되는 건가요? 언제 배송되는 건가요? 언제 배송되는 건가요? <br/>
                    언제 배송되는 건가요? 언제 배송되는 건가요? 언제 배송되는 건가요? 언제 배송되는 건가요? 언제 배송되는 건가요? 언제 배송되는 건가요?
                  </div>
                  <div className="atxt">
                    <div>리셀러가 남긴 답변</div>
                    <span>2024.04.19</span>
                  </div>
                  <div className="modify"><BaseButton type='button' label={'삭제'} /></div>
                </dd>
              </dl>
            </div>
            <div className='btnArea tr'>
              <BaseButton type='button' className={'btnM'} label={'문의하기'} />
            </div>
          </div>
          {/*  */}
          <Pagenation />
        </div>
      </article>
    );
  });

export default DetailQna;