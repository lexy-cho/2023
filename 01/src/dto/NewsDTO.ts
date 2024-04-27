import CommonDTO from "./CommonDTO";
import FileDTO from "./FileDTO";

export default interface NewsDTO extends CommonDTO {
    newsUid: number;
    newsDesc?: string;
    newsSubject?: string;

    file?: FileDTO;
    fileList?: FileDTO[];
}
