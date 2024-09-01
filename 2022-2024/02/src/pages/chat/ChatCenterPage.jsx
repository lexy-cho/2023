import React, { useEffect, useRef, useState, useCallback } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import sampleProfile from '@assets/images/sample/sample3.png';
import sampleProfile2 from '@assets/images/sample/sample7.png';
import { Link } from 'react-router-dom';
import { BaseButton, ItemTag, PostsMore } from '@components/common';
import LeaveAlert from '../../components/ui/modal/LeaveAlert';
import BlockAlert from '../../components/ui/modal/BlockAlert';
import ReportModal from '../../components/ui/modal/ReportModal';
import {ModalAlertPresent} from '@components/common';
import {ModalPresent} from '@components/common';

const ChatCenterPage = ({}) => {
  const [isModal, setIsModal] = useState(false);
  const [isModal2, setIsModal2] = useState(false);
  const [isModal3, setIsModal3] = useState(false);
  const [listEditor, setListEditor] = useState(false);
  const [chatDetail, setChatDetail] = useState(false);
  const moreItems = [
      {
          name: '나가기',
          onClick: () => {
              setIsModal(true);
          },
      },
      {
          name: '차단하기',
          onClick: () => {
              setIsModal2(true);
          },
      },
      { name: '신고하기',
          onClick: () => {
              setIsModal3(true);
          },
      },
  ];

  return (
    <>
        {/* 목록 */}
        <article style={{display: `${chatDetail ? 'none' : 'block'}`}}>
            <div className='listTopSorting chatCase'>
                <div>
                    <span>
                        <span className='checkSet' style={{display: `${listEditor ? 'inline-flex' : 'none'}`}}>
                            <input type='checkbox' id='checkbox' />
                            <label htmlFor='checkbox'>전체 선택</label>
                        </span>
                    </span>
                    <span className='postEdit'>
                        <BaseButton label='채팅 편집' style={{display: `${listEditor ? 'none' : 'inline-flex'}`}} onClick={() => {setListEditor(true);}} />
                        <BaseButton label='선택한 채팅방 나가기' style={{display: `${listEditor ? 'inline-flex' : 'none'}`}} onClick={() => {setListEditor(false);}} />
                    </span>
                </div>
            </div>
            <div className='listBox'>
                <div className='chatList'>
                    <ul>
                    <li>
                        <input type='checkbox' id='check01' style={{display: `${listEditor ? 'inline-flex' : 'none'}`}} />
                        <div className='chatInfo' onClick={() => {setChatDetail(true);}}>
                            <span className='profileImg'>
                                <img src={sampleProfile} />
                            </span>
                            <div className='listD'>
                                <strong className='nickName'>
                                    Apple 치카푸카
                                    <em>오후 6:10</em>
                                </strong>
                                <span className='localTag blue'>
                                    <em>대전</em>
                                </span>
                                <div>
                                    <p>
                                    안녕하세요. <br/>
                                    문의 가능한 시간은 평일 오전 9시부터 입니다. 문의해주시면 평일 오전 9시부터 오후 6시까지 평균 24시간 내 답변드립니다.
                                    </p>
                                    <span><em>+99</em></span>
                                </div>
                            </div>
                            <span className='right'>
                                <PostsMore items={moreItems} />
                            </span>
                        </div>
                    </li>
                    <li>
                        <input type='checkbox' id='check01'  style={{display: `${listEditor ? 'inline-flex' : 'none'}`}} />
                        <div className='chatInfo'>
                            <span className='profileImg'>
                                <img src={sampleProfile} />
                            </span>
                            <div className='listD'>
                                <strong className='nickName'>
                                    Apple 치카푸카
                                    <em>오후 6:10</em>
                                </strong>
                                <span className='localTag blue'>
                                    <em>대전</em>
                                </span>
                                <div>
                                    <p>
                                    안녕하세요. <br/>
                                    문의 가능한 시간은 평일 오전 9시부터 입니다. 문의해주시면 평일 오전 9시부터 오후 6시까지 평균 24시간 내 답변드립니다.
                                    </p>
                                    <span><em>10</em></span>
                                </div>
                            </div>
                            <span className='right'>
                                <PostsMore items={moreItems} />
                            </span>
                        </div>
                    </li>
                    <li>
                        <input type='checkbox' id='check01'  style={{display: `${listEditor ? 'inline-flex' : 'none'}`}} />
                        <div className='chatInfo'>
                            <span className='profileImg'>
                                <img src={sampleProfile} />
                            </span>
                            <div className='listD'>
                                <strong className='nickName'>
                                    네이처치과치과기공소
                                    <em>오후 6:10</em>
                                </strong>
                                <span className='localTag blue'>
                                    <em>부산/울산/경남</em>
                                </span>
                                <div>
                                    <p>네, 확인해보고 다시 말씀 드릴게요.</p>
                                    <span><em>2</em></span>
                                </div>
                            </div>
                            <span className='right'>
                                <PostsMore items={moreItems} />
                            </span>
                        </div>
                    </li>
                    <li>
                        <input type='checkbox' id='check01'  style={{display: `${listEditor ? 'inline-flex' : 'none'}`}} />
                        <div className='chatInfo'>
                            <span className='profileImg'>
                                <img src={sampleProfile} />
                            </span>
                            <div className='listD'>
                                <strong className='nickName'>
                                    네이처치과치과기공소
                                    <em>오후 6:10</em>
                                </strong>
                                <span className='localTag blue'>
                                    <em>부산/울산/경남</em>
                                </span>
                                <div>
                                    <p>네, 확인해보고 다시 말씀 드릴게요.</p>
                                </div>
                            </div>
                            <span className='right'>
                                <PostsMore items={moreItems} />
                            </span>
                        </div>
                    </li>
                    </ul>
                </div>
                <BaseButton label='더보기' className='listMore' />
            </div>
        </article>
        <article style={{display: `${chatDetail ? 'block' : 'none'}`}}>
            <div className='chatDetail'>
                <div className='back'>
                    <div className='chatInfo'>
                        <span className='profileImg'>
                            <img src={sampleProfile} />
                        </span>
                        <div className='listD'>
                            <strong className='nickName'>Apple 치카푸카</strong>
                            <span className='localTag blue'>
                                <em>대전</em>
                            </span>
                        </div>
                        <span className='right'>
                            <input type='checkbox' className='likeSet' />
                            <PostsMore items={moreItems} />
                        </span>
                    </div>
                    <div className='chatData'>
                        <div className='cDate'><em>2024년 5월 1일</em></div>
                        <div className='dialogBack'>
                            <div className='dialog'>
                                <ul>
                                    <li>
                                        <strong className='nickName'>네이처치과치과기공소</strong>
                                        <p>안녕하세요, 진행 전 안내사항 첨부파일 보내드립니다.</p>
                                    </li>
                                    <li>
                                        <strong className='nickName'>네이처치과치과기공소</strong>
                                        <span className='fileLoad'>
                                            <span>
                                                진행_전_안내사항.pdf
                                                <em>328.36 mb</em>
                                            </span>
                                            <button className='bFD'>Download</button>
                                        </span>
                                        <p>
                                            내용 상세히 살펴보시고, 필수사항 꼭 참고해주세요!<br/>
                                            문의 사항이 있으시면 편하게 문의주세요 ^^<br/>
                                            감사합니다.
                                        </p>
                                    </li>
                                </ul>
                                <span className='cTime'>
                                    <strong>읽음</strong>
                                    <span>오전 09:31</span>
                                </span>
                            </div>
                            <div className='dialog'>
                                <ul>
                                    <li>
                                        <strong className='nickName'>네이처치과치과기공소</strong>
                                        <p>안녕하세요, 진행 전 안내사항 첨부파일 보내드립니다.</p>
                                    </li>
                                    <li>
                                        <strong className='nickName'>네이처치과치과기공소</strong>
                                        <span className='fileLoad'>
                                            <span>
                                                진행_전_안내사항.pdf
                                                <em>328.36 mb</em>
                                            </span>
                                            <button className='bFD'>Download</button>
                                        </span>
                                        <span className='fileImg'>
                                            <span><img src={sampleProfile2} /></span>
                                        </span>
                                        <p>
                                            내용 상세히 살펴보시고, 필수사항 꼭 참고해주세요!<br/>
                                            문의 사항이 있으시면 편하게 문의주세요 ^^<br/>
                                            감사합니다.
                                        </p>
                                    </li>
                                </ul>
                                <span className='cTime'>
                                    <strong>읽음</strong>
                                    <span>오전 09:31</span>
                                </span>
                            </div>
                        </div>
                        <div className='dialogBack me'>
                            <div className='dialog'>
                                <ul className='dt'>
                                    <li>
                                        <p>안녕하세요, 진행 전 안내사항 첨부파일 보내드립니다.</p>
                                    </li>
                                    <li>
                                        <span className='fileLoad'>
                                            <span>
                                                진행_전_안내사항.pdf
                                                <em>328.36 mb</em>
                                            </span>
                                            <button className='bFD'>Download</button>
                                        </span>
                                        <span className='fileImg'>
                                            <span><img src={sampleProfile2} /></span>
                                        </span>
                                        <p>
                                            내용 상세히 살펴보시고, 필수사항 꼭 참고해주세요!<br/>
                                            문의 사항이 있으시면 편하게 문의주세요 ^^<br/>
                                            감사합니다.
                                        </p>
                                    </li>
                                </ul>
                                <span className='cTime'>
                                    <strong>읽음</strong>
                                    <span>오전 09:31</span>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className='chatInput'>
                        <div>
                            <span className='fileFind icon'>
                                <input type='file' id='file1' />
                                <label htmlFor='file1'>파일 첨부하기</label>
                            </span>
                            <TextareaAutosize
                                minRows={1}
                                maxRows={3}
                                placeholder="메세지를 입력해주세요."
                            />
                        </div>
                        <BaseButton label='전송' className='btnB' />
                    </div>
                </div>
            </div>
        </article>
      {isModal && 
          <ModalAlertPresent >
              <LeaveAlert onClose={() => {setIsModal(false)}}/>
          </ModalAlertPresent>
      }
      {isModal2 && 
          <ModalAlertPresent >
              <BlockAlert onClose={() => {setIsModal2(false)}}/>
          </ModalAlertPresent>
      }
      {isModal3 && 
          <ModalPresent >
              <ReportModal onClose={() => {setIsModal3(false)}}/>
          </ModalPresent>
      }
    </>
  );
};

export default ChatCenterPage;
