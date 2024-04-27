export interface LicenseDTO {
    licenseSeq: string;
    licenseName: string;
    testSeq: string;
    fileUrl: string;
}

export interface PageDTO {
    itemsPerPage: number;
    row: number;
}

export interface UserInfo {
    memSeq: string;
    memUuid: string;
    memId: string;
    memName: string;
    memOs: string;
    memEmail: string;
    broadcastFlag: string;
    memPushFlag: string;
    premiumFlag: string;
    pushFlag: string;
    timerFlag: string;
    fcmToken: string;
}

export interface VersionDTO {
    verSeq?: number; //버전SEQ
    verOs?: string; //OS구분(A:Android, I:IOS)
    verNo?: string; //버전번호
    verDesc?: string; //배포내용
}

export interface CustomTimerDTO {
    memSeq: string;
    timeName: string;
    timeSeq: string;
    timeStart: string;
    timeTest: string;
}