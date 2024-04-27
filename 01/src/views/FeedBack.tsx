import { useNavigate } from "react-router-dom";
import { useState } from "react";
import StarRatings from "react-star-ratings";
import { Link,useLocation } from "react-router-dom";

function FeedBack() {
    const navigate = useNavigate();
    const [rate, setRate] = useState<number>(0);

    return (
        <div id="container">
            <section>
                <div className="contents">
                    <div className="feedBackArea">
                        <dl>
                            <dt>활동 별점</dt>
                            <dd>
                                <StarRatings
                                    rating={rate}
                                    starRatedColor="gold"
                                    starEmptyColor="grey"
                                    starHoverColor="gold"
                                    numberOfStars={5}
                                    name="rating"
                                    starDimension="50px"
                                    starSpacing="10px"
                                    changeRating={(rating: number) => setRate(rating)}
                                />
                                <input type="text" placeholder="자유롭게 피드백을 입력해주세요." />
                            </dd>
                        </dl>
                        <dl>
                            <dt>이용자 별점</dt>
                            <dd>
                                <StarRatings
                                    rating={rate}
                                    starRatedColor="gold"
                                    starEmptyColor="grey"
                                    starHoverColor="gold"
                                    numberOfStars={5}
                                    name="rating"
                                    starDimension="50px"
                                    starSpacing="10px"
                                    changeRating={(rating: number) => setRate(rating)}
                                />
                                <input type="text" placeholder="자유롭게 피드백을 입력해주세요." />
                            </dd>
                        </dl>
                        <dl>
                            <dt>제공자 별점</dt>
                            <dd>
                                <StarRatings
                                    rating={rate}
                                    starRatedColor="gold"
                                    starEmptyColor="grey"
                                    starHoverColor="gold"
                                    numberOfStars={5}
                                    name="rating"
                                    starDimension="50px"
                                    starSpacing="10px"
                                    changeRating={(rating: number) => setRate(rating)}
                                />
                                <input type="text" placeholder="자유롭게 피드백을 입력해주세요." />
                            </dd>
                        </dl>
                    </div>
                    <div className="viewBtn">
                        <button className="btnM">등록하기</button>
                        <button className="btnG">취소하기</button>
                    </div>
                </div>
                <div className="copy">
                    <span>유니마인드랩 주식회사 · 대표이사 : 최우주 · 사업자등록번호 : 461-81-02935</span>
                    <span>주소 : 서울시 성동구 광나루로 286 8층 (소셜캠퍼스온 서울1)</span>
                    <span>전화 : 070-7014-0304 · 이메일 : uni@unimindlab.com</span>
                    <span>ⓒ 2022 UNIMIND LAB Inc.</span>
                </div>
            </section>
        </div>
    );
}

export default FeedBack;
