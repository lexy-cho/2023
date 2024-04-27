import CommonDTO from "./CommonDTO";

export default interface PayDTO extends CommonDTO {
    payUid: number;
    memUid: number;
    actUid: number;
    payMethod?: string;
    payInfo?: string;
    payPrice?: number;
    actName?: string;
    memName?: string;
    actStat?: string;
    actType?: string;
    payMemName?: string;
    actMemName?: string;
    searchStat?: string;
    searchStartDate?: string;
    searchEndDate?: string;
    searchPayType?: string;
    cardType?: string;
    totalPay?: number;
    charge?: number;
}
