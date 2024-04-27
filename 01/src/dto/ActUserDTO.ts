import CommonDTO from "./CommonDTO";

export default interface ActUserDTO extends CommonDTO {
    actUserUid: number;
    actUid: number;
    memUid: number;
    usrReq?: string;
    usrReqFlag?: string;
    usrMemo?: string;
    memName?: string;
    memAdInformation?: string;
    memAbleType?: string;
    memAbleStat?: string;
}
