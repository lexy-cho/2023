import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useUserState } from "UserContext";
function ActivityWrite1() {
    const navigate = useNavigate();
    const { user } = useUserState();
    
    const selectType = (type: string) => {
        // console.log(user);
        if (type === 'U') {
            if (user.memberNormalVO?.memAbleType === 'A') {
                // alert('추가프로필 등록.');
                navigate('/addProfile');
                return;
            }
        }

        navigate(`/activityWrite2/${type}`)
    }

    return (
        <div id="container" className="memberCase">
            <section>
                <h1 onClick={() => navigate(-1)}>활동등록<span>1단계 : 타입선택 (총 2단계)</span></h1>
                <div className="join1">
                    <form>
                        <div>
                            <span onClick={() => selectType('O')}>
                                <strong>활동등록</strong>
                                <input type="radio" name="radio1" />
                                <label htmlFor="">장애인분들에게 서비스를 제공하고 싶어요.</label>
                            </span>
                            <span onClick={() => selectType('U')}>
                                <strong>활동요청</strong>
                                <input type="radio" name="radio1" />
                                <label htmlFor="">장애인으로 서비스를 받고 싶습니다.</label>
                            </span>
                        </div>
                    </form>
                </div>
                <Link to={'#'} className="btnL" style={{ marginTop: 20 }} onClick={() => navigate(-1)} >뒤로가기</Link>     
            </section>
        </div>
    );
}

export default ActivityWrite1;
