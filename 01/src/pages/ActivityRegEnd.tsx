import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";


function ActivityRegEnd() {

    return (
        <>
         <div id="container" className="memberCase">
            <section>
                <div className="infoEnd activityCase">
                    <div>
                        <p>
                            활동요청이 <span>등록되었어요.</span>
                            <em>유니마인드랩에서 검토 후 연락드릴께요</em>
                        </p>
                    </div>
                    <Link to={'/'} className="btnL"> 완료</Link>
                </div>
            </section>
        </div>
        </>
    )
}

export default ActivityRegEnd;