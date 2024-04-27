import CommonDTO from "./CommonDTO";

export default interface ReportDTO extends CommonDTO {
    repUid: number;
    repStat?: string;
    memUid: number;
    memName?: string;
    memStat?: string;
    memAdInformation?: string;
    req?: string;
    memo?: string;
    repType?: string;
    repSubjectUid?: number;
    repSubjectName?: string;
    repDec?: string;
    memEmail?: string;
    memPhone?: string;
    actStat?: string;
    actType?: string;
    actName?: string;
}
