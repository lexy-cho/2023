import CommonDTO from "./CommonDTO";

export default interface FeedbackDTO extends CommonDTO {
    actUid?: number;            // 활동 UID
    actGrade?: number;          // 활동 별점
    memUid?: number;            // 회원 UID
    targetUid?: number;         // 대상 UID
    memGrade?: number;          // 회원 별점
    userList?: FeedbackDTO[];   // 회원목록
}
