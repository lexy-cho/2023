import CommonDTO from "./CommonDTO";

export default interface FileDTO extends CommonDTO {
    fileUid: number;                //파일uid
    fileType?: string;            //첨부파일타입( A:활동, B:배너, D:게시물, M:회원프로필, E:교육제공자 )
    fileTypeUid: number;
    fileUrl?: string;
    fileName?: string;
    fileOrgName?: string;
    fileExt?: string;
    fileBase64?: string;
    fileDesc?: string;
    stat?: string;                //파일상태( 신규:N, 기존:O, 삭제:D)
}
