import { useNavigate } from "react-router-dom";
import { Link,useLocation } from "react-router-dom";

function ActivityEnd() {
    const navigate = useNavigate();

    return (
        <div id="container" className="memberCase">
            <section>
                <h1>활동등록<span>3단계 : 등록완료</span></h1>
                <div className="infoEnd activityCase">
                    <div>
                        <p>
                            활동요청이 <span>등록되었어요.</span>
                            <em>유니마인드랩에서 검토 후 연락드릴께요</em>
                        </p>
                    </div>
                    <a href="/#/mypage" className="btnG">마이서로로 이동</a>
                    <a href="/#/" className="btnL">홈으로 이동</a>
                </div>
            </section>
        </div>
    );
}

export default ActivityEnd;
