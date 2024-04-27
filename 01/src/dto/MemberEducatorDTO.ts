import CommonDTO from "./CommonDTO";

export default interface MemberEducatorDTO extends CommonDTO { 
    memEducatorUid: number;
    memUid: number;
    memBusinessNumber?: string;
    businessName?: string;
    memAddress?: string;
    memAddressD?: string;
    memAddressZ?: string;
    businessStatus?: string;
    businessType?: string;
    detailIntroduction?: string;
}