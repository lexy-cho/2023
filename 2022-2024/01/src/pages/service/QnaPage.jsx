import React, { useState } from 'react';
import { Pagenation, BaseButton } from '@components/common';
import { Link } from 'react-router-dom';
import sample01 from '@assets/images/sample/sample10.png';
import sample02 from '@assets/images/sample/sample6.png';
import QnaModal from '../../components/ui/modal/QnaModal';
import {ModalPresent} from '@components/common';

const QnaPage = () => {
  const [isModal, setIsModal] = useState(false);

  return (
    <>
      <article>
        <h2>1:1 문의</h2>
        <div className="qnaList">
          <div className="thead">
            <strong>제목</strong>
            <div>
              <span>작성일</span>
              <span>답변상태</span>
            </div>
          </div>
          <div className="tbody">
            {/* Loop */}
            <dl>
              <dt>
                <strong>언제 배송되는 건가요?</strong>
                <div>
                  <span>2024.04.20</span>
                  <span className="aEnd">답변완료</span>
                </div>
              </dt>
              <dd>
                <div className="img">
                  <ol>
                    <li><img src={sample02} /></li>
                    <li><img src={sample02} /></li>
                    <li><img src={sample02} /></li>
                    <li><img src={sample02} /></li>
                    <li><img src={sample02} /></li>
                    <li><img src={sample02} /></li>
                    <li><img src={sample02} /></li>
                    <li><img src={sample02} /></li>
                  </ol>
                </div>
                <div className="qtxt">
                  언제 배송되는 건가요? 언제 배송되는 건가요? 언제 배송되는 건가요? 언제 배송되는 건가요? 언제 배송되는 건가요? 언제 배송되는 건가요? <br/>
                  언제 배송되는 건가요? 언제 배송되는 건가요? 언제 배송되는 건가요? 언제 배송되는 건가요? 언제 배송되는 건가요? 언제 배송되는 건가요?
                </div>
                <div className="atxt">
                  <div>리셀러가 남긴 답변</div>
                  <span>2024.04.19</span>
                </div>
                <div className="modify"><span><BaseButton type='button' label={'수정'} /></span><BaseButton type='button' label={'삭제'} /></div>
              </dd>
            </dl>
            {/* end Loop */}
            <dl>
              <dt>
                <strong>언제 배송되는 건가요?</strong>
                <div>
                  <span>2024.04.20</span>
                  <span className="aEnd">답변대기</span>
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
          </div>
          <div className='btnArea tr'>
            <BaseButton type='button' className={'btnM'} label={'문의하기'} onClick={() => setIsModal(true)} />
          </div>
        </div>
        <Pagenation />
      </article>
      {isModal && 
        <ModalPresent >
          <QnaModal onClose={() => {setIsModal(false)}}/>
        </ModalPresent>
      }
    </>
  );
};

export default QnaPage;