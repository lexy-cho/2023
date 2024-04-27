import CommonDTO from "./CommonDTO";
import MemberEducatorDTO from "./MemberEducatorDTO";
import MemberNormalDTO from "./MemberNormalDTO";

export default interface MemberDTO extends CommonDTO { 
    blockTime?: Date;           // 차단일시
    memAdminMemo?: string;      // 관리자메모
    memAuthType?: string;       // 인증수단(P:전화번호, E:이메일)
    memBirth?: string;          // 생년월일
    memBlockFlag?: string;      // 차단여부(Y:차단, N:정상)
    memBlockMemo?: string;      // 차단사유
    memDevice?: string;         // 디바이스 정보
    memEmail?: string;          // 이메일
    memGender?: string;         // 성별(M:남성, F:여성)
    memId?: string;             // 회원ID
    memName?: string;           // 이름
    memPhone?: string;          // 전화번호
    memPwd?: string;            // 회원PWD(영어,숫자,특수문자 중 2 포함)
    memType?: string;           // 회원타입(G: 일반회원, T:준회원, S:최고 관리자,  A: 관리자)
    memUid?: number|null;       // 회원UID
    memUseType?: string;        // 회원사용타입(U:일반회원, O:교육제공자)
    memWd?: string;             // 탈퇴여부(Y:탈퇴, N:미탈퇴)
    recConnect?: Date;          // 최근접속시간
    wdTime?: Date;              // 탈퇴일시

    memberEducatorVO?: MemberEducatorDTO;   //교육제공자 추가정보
    memberNormalVO?: MemberNormalDTO;       //사용자 추가정보
}