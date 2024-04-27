import { useNavigate } from "react-router-dom";
import { Link,useLocation } from "react-router-dom";

function ActivityWrite2() {
    const navigate = useNavigate();

    return (
        <div id="container" className="memberCase">
            <section>
                <h1>활동등록<span>2단계 : 사진 등록 (총 2단계)</span></h1>
                <div className="activityImg">
                    <form>
                        <ul className="imgList">
                            <li>
                                <button>삭제</button>
                                <img src={`${process.env.PUBLIC_URL}/assets/images/img_thumbnail.svg`}  alt="파일설명이 나옵니다" />
                            </li>
                            <li>
                                <button>삭제</button>
                                <img src=""  alt="파일설명이 나옵니다" />
                            </li>
                            <li>
                                <button>삭제</button>
                                <span><img src="" alt="파일설명이 나옵니다" /></span>
                            </li>
                            <li>
                                <button>삭제</button>
                                <span><img src="" alt="파일설명이 나옵니다" /></span>
                            </li>
                        </ul>
                        <span className="fileFind"><input type="file" /><label>+사진등록</label></span>
                    </form>
                    <Link to="" className="btnL" style={{marginTop: 20}}>다음</Link>
                </div>
            </section>
        </div>
    );
}

export default ActivityWrite2;
