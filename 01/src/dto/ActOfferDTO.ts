import CommonDTO from "./CommonDTO";

export default interface ActOfferDTO extends CommonDTO {
    actOfferUid: number;
    actUid: number;
    memUid: number;
    offReq?: string;
    offReqFlag?: string;
    offMemo?: string;
    memName?: string;
    memAdInformation?: string;
    memAbleType?: string;
    memAbleStat?: string;
}
