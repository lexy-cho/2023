import ActOfferDTO from "./ActOfferDTO";
import ActUserDTO from "./ActUserDTO";
import CommonDTO from "./CommonDTO";
import FileDTO from "./FileDTO";

export default interface ActDTO extends CommonDTO {
    actUid: number;
    actOpenChat?: string;
    repUid?: number;
    actStat?: string;
    actType?: string;
    actName?: string;
    actShowStat?: string;
    actPrice?: string;
    actTime?: string;
    actStartDate?: string;
    actEndDate?: string;
    memUid?: number;
    actStartPoint?: string;
    actEndPoint?: string;
    actDec?: string;
    actGuide?: string;
    actAdminMemo?: string;
    actStar?: string;
    memName?: string;        //등록자이름
    memPhone?: string;

    offerName?: string;               //제공자이름
    offerCount?: number;                 //제공자수
    useName?: string;                 //사용자이름
    useCount?: number;                   //사용자수
    searchStat?: string;
    searchStartDate?: string;
    searchEndDate?: string;
    actRefuseReason?: string;

    type?: string;                    // 활동요청: U, 활동제공: O
    actGrade?: string;                // 활동별점
    isReport?: string;               // 신고여부

    fileList?: FileDTO[];
    userList?: ActUserDTO[];
    offerList?: ActOfferDTO[];
}
