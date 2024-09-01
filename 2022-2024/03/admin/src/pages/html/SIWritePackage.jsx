import React , {useState} from 'react';
import PackageAddModal from '../../components/ui/modal/PackageAddModal';
import {ModalFullPresent} from '@components/common';

const SIWritePackage = () => {
    const [isModal, setIsModal] = useState(false);
    return (
        <>
        <div className="contentBack">
            <div className="content">
                <div className="grid">
                    <div>
                        <article className="lbox">
                            <div className="boxTit">
                                <h3>패키지</h3>
                                <span className="right">
                                    <div className="multiSSet">
                                        <em className="mValue on">아이템/업셀링 <i>1</i></em>
                                        <div className="selectArea">
                                            <div className="item">
                                                <span className="checkSet">
                                                    <input type="checkbox" id="one"/>
                                                    <label htmlFor="one">First checkbox</label>
                                                </span>
                                                <span className="checkSet">
                                                    <input type="checkbox" id="two"/>
                                                    <label htmlFor="two">Second checkbox</label>
                                                </span>
                                                <span className="checkSet">
                                                    <input type="checkbox" id="three"/>
                                                    <label htmlFor="three">Third checkbox</label>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <button className="btnW ss" disabled>선택삭제</button>
                                </span>
                            </div>
                            <div className="boxDt">
                                <div className="tableAddSet">
                                    <div className="tls editCase scroll">
                                        <table>
                                            <colgroup>
                                                <col width="72" />
                                                <col width="15%" />
                                                <col width="35%" />
                                                <col width="17%" />
                                                <col width="15%" />
                                                <col width="72" />
                                            </colgroup>
                                            <thead>
                                                <tr>
                                                    <th>
                                                        <span className="checkSet">
                                                            <input type="checkbox" />
                                                        </span>
                                                    </th>
                                                    <th>패키지 타입</th>
                                                    <th>패키지 이름</th>
                                                    <th>아이템/업셀링</th>
                                                    <th>상품 수량</th>
                                                    <th>삭제</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="cnd">
                                                        <span className="checkSet">
                                                            <input type="checkbox" />
                                                        </span>
                                                    </td>
                                                    <td>NKS</td>
                                                    <td>늦캉스 패키지</td>
                                                    <td>아이템</td>
                                                    <td>2</td>
                                                    <td className="cnd"><button className="bEX">Del</button></td>
                                                </tr>
                                                <tr>
                                                    <td className="cnd">
                                                        <span className="checkSet">
                                                            <input type="checkbox" />
                                                        </span>
                                                    </td>
                                                    <td>NKS</td>
                                                    <td>늦캉스 패키지</td>
                                                    <td>아이템</td>
                                                    <td>2</td>
                                                    <td className="cnd"><button className="bEX">Del</button></td>
                                                </tr>
                                                <tr>
                                                    <td className="cnd">
                                                        <span className="checkSet">
                                                            <input type="checkbox" />
                                                        </span>
                                                    </td>
                                                    <td>NKS</td>
                                                    <td>늦캉스 패키지</td>
                                                    <td>아이템</td>
                                                    <td>2</td>
                                                    <td className="cnd"><button className="bEX">Del</button></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="addSet long">
                                        <div className="before case2">
                                            <button className="bAdd" onClick={() => setIsModal(true)}>신규 추가</button>
                                            <button className="bAdd">기존 아이템 선택</button>
                                        </div>
                                        <div className="after" style={{display: 'none'}}>
                                            <div className="multiSSet item">
                                                <em className="mValue">패키지 선택</em>
                                                <div className="selectArea">
                                                    <div className="item">
                                                        <span className="radioSet">
                                                            <input type="radio" id="one2"/>
                                                            <label htmlFor="one2">First checkbox</label>
                                                        </span>
                                                        <span className="radioSet">
                                                            <input type="radio" id="two2"/>
                                                            <label htmlFor="two2">Second checkbox</label>
                                                        </span>
                                                        <span className="radioSet">
                                                            <input type="radio" id="three2"/>
                                                            <label htmlFor="three2">Third checkbox</label>
                                                        </span>
                                                    </div>
                                                    <div className="bLine">
                                                        <button className="btnL">취소</button>
                                                        <button className="btnB">적용</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="multiSSet item">
                                                <em className="mValue">아이템 선택</em>
                                                <div className="selectArea">
                                                    <div className="item">
                                                        <span className="radioSet">
                                                            <input type="radio" id="one22"/>
                                                            <label htmlFor="one22">First checkbox</label>
                                                        </span>
                                                        <span className="radioSet">
                                                            <input type="radio" id="two22"/>
                                                            <label htmlFor="two22">Second checkbox</label>
                                                        </span>
                                                        <span className="radioSet">
                                                            <input type="radio" id="three22"/>
                                                            <label htmlFor="three22">Third checkbox</label>
                                                        </span>
                                                    </div>
                                                    <div className="bLine">
                                                        <button className="btnL">취소</button>
                                                        <button className="btnB">적용</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <input type="text" placeholder="수량" className="item" />
                                            <span className="afterBtn item">
                                                <button className="bID">Del</button>
                                                <button className="bED">Done</button>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>
                    <div></div>
                </div>
            </div>
            <div className="bArea">
                <button className="btnL">취소하기</button>
                <button className="btnB">저장하기</button>
            </div>
        </div>
        {isModal && 
            <ModalFullPresent >
                <PackageAddModal onClose={() => {setIsModal(false)}}/>
            </ModalFullPresent>
        }
        </>
    )
}

export default SIWritePackage;