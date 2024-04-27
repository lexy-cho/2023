import CommonDTO from "./CommonDTO";

export default interface VoucherDTO extends CommonDTO {
    vouUid: number;
    vouDec?: string;
    vouName?: string;
    vouPrice?: number;
    vouPerson?: number;
    vouStatUid?: number;
    memUid?: number;
    vouStatPrice?: number;
    memName?: string;
    memType?: string;
    memPhone?: string;
    actType?: string;
    actStat?: string;
    actName?: string;
    actUid?: number;
    payMethod?: string;
    vouPay?: number;
    restPay?: number;
    useVouPay?: number;             // 개인이 사용한 바우처 금액
    memList?: VoucherDTO[];
}
