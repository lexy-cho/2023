import CommonDTO from "./CommonDTO";

export default interface MemberNormalDTO extends CommonDTO { 
    memNormalUid?: number;
    memUid?: number;
    memAbleType?: string;
    memAbleStat?: string;
    memAdInformation?: string;

}