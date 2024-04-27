import DaumPostcode from "react-daum-postcode";
import ModalFrame from "./ModalFrame";
import { Link } from "react-router-dom";

type ModalProps = {
    setOnModal: (state: boolean) => void;
    idIndex?: string;
    callback: (fullAddr: string, extraAddr: string, zonecode: string) => void;
};

function DaumPost({ setOnModal, idIndex, callback }: ModalProps) {
    // export const DaumPost = ({ setOnModal, callback }: any) => {

    const handleComplete = async (data: any) => {
        // console.log(data);
        // 각 주소의 노출 규칙에 따라 주소를 조합한다.
        // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
        let fullAddr = ''; // 최종 주소 변수
        let extraAddr = ''; // 조합형 주소 변수
        let zonecode = data.zonecode

        // 사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져온다.
        if (data.userSelectedType === 'R') { // 사용자가 도로명 주소를 선택했을 경우
            fullAddr = data.roadAddress;

        } else { // 사용자가 지번 주소를 선택했을 경우(J)
            fullAddr = data.jibunAddress;
        }

        // 사용자가 선택한 주소가 도로명 타입일때 조합한다.
        if (data.userSelectedType === 'R') {
            //법정동명이 있을 경우 추가한다.
            if (data.bname !== '') {
                extraAddr += data.bname;
            }
            // 건물명이 있을 경우 추가한다.
            if (data.buildingName !== '') {
                extraAddr += (extraAddr !== '' ? ', ' + data.buildingName : data.buildingName);
            }
            // 조합형주소의 유무에 따라 양쪽에 괄호를 추가하여 최종 주소를 만든다.
            extraAddr = (extraAddr !== '' ? ' (' + extraAddr + ')' : '');
        }
        setOnModal(false);
        callback(fullAddr, extraAddr, zonecode);
    }

    return (
        // <ModalFrame setOnModal={setOnModal}>
        //     <DaumPostcode onComplete={handleComplete} />
        // </ModalFrame>
        <div className="alertDim">
            <div className="alertPop">
                <DaumPostcode onComplete={handleComplete} />
                <div className="pBtn">
                    <Link to={'#'} className="btnG" onClick={() => setOnModal(false)}>닫기</Link>
                </div>
            </div>
        </div>
    )
}

export default DaumPost;