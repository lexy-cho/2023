import CommonDTO from "./CommonDTO";

export default interface NotificationDTO extends CommonDTO {
    notiUid: number;
    memUid: number;
    notiTitle?: string;
    notiCont?: string;
    notiType?: string;
    searchStartDate?: string;
    searchEndDate?: string;
}
