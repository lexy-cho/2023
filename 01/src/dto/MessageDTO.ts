import CommonDTO from "./CommonDTO";

export default interface MessageDTO extends CommonDTO {
    messUid: number;
    messTitle?: string;
    messCont?: string;
}
